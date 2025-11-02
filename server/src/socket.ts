import { Server } from "socket.io";
import prisma from "./config/prismaClient";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const socketHandler = (io: any) => {
  io.use(async (socket: any, next: any) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error("Authentication error: No token provided"));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string;
      };

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });

      if (!user) {
        return next(new Error("Authentication error: User not found"));
      }

      socket.userId = user.id;
      socket.username = user.username;
      socket.email = user.email;

      next();
    } catch (err) {
      console.log(err);
      next(new Error("Internal error."));
    }
  });

  io.on("connection", async (socket: any) => {
    console.log(`${socket.userId} is connected to the socket server`);

    await prisma.user.update({
      where: { id: socket.userId },
      data: { isOnline: true },
    });

    socket.join(socket.userId);

    socket.on(
      "message:send",
      async (data: { recipientId: any; content: string; chatId: string }) => {
        try {
          const { recipientId, content, chatId } = data;
          const friends = await prisma.friendRequest.findFirst({
            where: {
              OR: [
                { senderId: socket.userId, receiverId: recipientId },
                { senderId: recipientId, receiverId: socket.userId },
              ],
              status: "ACCEPTED",
            },
          });

          if (!friends) {
            return socket.emit("error", {
              error:
                "This person you are trying to send message cant receive your message because you aren't friend with them ",
            });
          }

          let directChat = await prisma.directChat.findFirst({
            where: {
              OR: [
                { user1Id: socket.userId, user2Id: recipientId },
                { user1Id: recipientId, user2Id: socket.userId },
              ],
            },
          });

          if (!directChat) {
            directChat = await prisma.directChat.create({
              data: {
                user1Id: socket.userId,
                user2Id: recipientId,
              },
            });
          }

          const recipient = await prisma.user.findUnique({
            where: { id: recipientId },
            select: {
              profileImage: true,
              username: true,
            },
          });
          const message = await prisma.messages.create({
            data: {
              content: content,
              directChatId: directChat.id,
              senderId: socket.userId,
            },
          });

          socket
            .to(chatId)
            .emit("message:receive", { message, chatId: directChat.id });

          socket
            .to(recipientId)
            .emit("notification", { user: recipient, content: content });
        } catch (err) {
          console.log(err);
        }
      }
    );

    socket.on(
      "group_message:send",
      async (data: { groupId: string; content: string }) => {
        try {
          const { groupId, content } = data;
          const user = await prisma.groupMembership.findUnique({
            where: {
              userId_groupId: {
                userId: socket.userId,
                groupId: groupId,
              },
            },
          });

          if (!user) {
            return socket.emit("error", {
              error: "Error sending message, You ain't a member of this group",
            });
          }

          const recipient = await prisma.user.findUnique({
            where: { id: socket.userId },
            select: {
              username: true,
              profileImage: true,
            },
          });

          const message = await prisma.messages.create({
            data: {
              senderId: socket.userId,
              groupId: groupId,
              content: content,
            },
          });

          socket.to(groupId).emit("group_message:sent", {
            message,
            user: recipient,
          });
        } catch (err) {
          console.log("Creathorkim we have an error", err);
        }
      }
    );
    socket.on("group:join", async (data: { groupId: string }) => {
      try {
        const { groupId } = data;

        const member = await prisma.groupMembership.findUnique({
          where: {
            userId_groupId: {
              userId: socket.userId,
              groupId: groupId,
            },
          },
        });

        if (!member) {
          return socket.emit("error", {
            error: "Error You ain't a member of this group",
          });
        }

        socket.join(groupId);
      } catch (err) {
        console.log(err);
      }
    }),
      socket.on("group:leave", async (data: { groupId: string }) => {
        try {
          const { groupId } = data;

          socket.leave(groupId);

          socket.to(groupId).emit("group:leave:notice", {
            message: `${socket.username} left the group`,
          });
        } catch (err) {
          console.log(err);
        }
      });

    socket.on(
      "typing:start",
      (data: { isTyping: boolean; recipientId: string }) => {
        const { isTyping, recipientId } = data;
        if (isTyping) {
          socket.to(recipientId).emit("listeningTyping", {
            message: `${socket.username} is typing.....`,
          });
        } else {
          socket.to(recipientId).emit("listeningTyping", { message: "" });
        }
      }
    );

    socket.on(
      "groupTyping:start",
      (data: { isTyping: boolean; groupId: string }) => {
        const { isTyping, groupId } = data;

        if (isTyping) {
          socket.to(groupId).emit("listeningTyping", {
            message: `${socket.username} is typing`,
          });
        } else {
          socket.to(groupId).emit("listeningTyping", {
            messge: ``,
          });
        }
      }
    );

    socket.on("checkOnlineUsers", async () => {
      const onlineUsers = await prisma.user.findMany({
        where: { isOnline: true },
      });

      if (onlineUsers) {
        socket.broadcast.emit("onlineUsers", { users: onlineUsers });
      }
    });

    socket.on("read", async (data: { messageId: string }) => {
      const { messageId } = data;

      try {
        await prisma.messages.update({
          where: { id: messageId },
          data: { seen: true },
        });
      } catch (err) {
        console.log("We have an error with the read", err);
      }
    });

    socket.on("disconnect", async () => {
      try {
        await prisma.user.update({
          where: { id: socket.userId },
          data: { isOnline: false },
        });

        for (const room of socket.rooms) {
          socket.leave(room);
        }
      } catch (err) {
        console.log("Disconnect error", err);
      }
    });
  });
};

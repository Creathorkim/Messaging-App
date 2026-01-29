import { Server } from "socket.io";
import prisma from "./config/prismaClient";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { GroupNotifications } from "./services/groupNotifications";

type messageDataType = {
  directChatId?: string;
  senderId: string;
  fileUrl?: string;
  content?: string;
  voiceMessage?: string;
  messageId?: string;
  recipientId?: string;
};
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
    console.log(`${socket.username} is connected to the socket server`);

    await prisma.user.update({
      where: { id: socket.userId },
      data: { isOnline: true },
    });

    socket.join(socket.userId);

    const getOnlineUsers = async (userId: string) => {
      // Get all friends of the current user
      const friendRequests = await prisma.friendRequest.findMany({
        where: {
          OR: [{ senderId: userId }, { receiverId: userId }],
          status: "ACCEPTED",
        },

        select: {
          sender: true,
          receiver: true,
        },
      });

      // Extract friend IDs (excluding current user)
      const friendsId = friendRequests.map((fr) =>
        fr.sender.id === userId ? fr.receiver.id : fr.sender.id,
      );

      // Get online status for all friends
      const friendsWithStatus = await prisma.user.findMany({
        where: {
          id: { in: friendsId },
        },
        select: {
          id: true,
          username: true,
          profileImage: true,
          isOnline: true,
        },
      });

      // Filter only online friends
      return friendsWithStatus.filter((friend) => friend.isOnline);
    };

    const broadCastOnlineUsers = async () => {
      const onlineFriends = await getOnlineUsers(socket.userId);

      socket.emit("onlineUsers", { usersOnline: onlineFriends });

      for (const friend of onlineFriends) {
        const friendsOnlineFriends = await getOnlineUsers(friend.id);
        socket
          .to(friend.id)
          .emit("friendOnline", { userId: socket.userId, isOnline: true });
        socket
          .to(friend.id)
          .emit("onlineUsers", { usersOnline: friendsOnlineFriends });
      }
    };

    const getMyOnlineStatus = async () => {
      try {
        await prisma.user.update({
          where: { id: socket.userId },
          data: {
            isOnline: true,
          },
        });
        socket.emit("onlineUser", { isOnline: true });
      } catch (err) {
        console.log(err);
      }
    };

    await getMyOnlineStatus();
    await broadCastOnlineUsers();

    socket.on("getFriendOnline", async (data: { friendId: string }) => {
      const { friendId } = data;
      try {
        const onlineStatus = await prisma.user.findUnique({
          where: {
            id: friendId,
          },
        });

        socket.emit("friendOnline", {
          userId: friendId,
          isOnline: onlineStatus?.isOnline,
        });
      } catch (err) {
        console.log(err);
      }
    });

    socket.on(
      "message:send",
      async (data: {
        recipientId: string;
        content?: string;
        fileUrl?: string;
        voiceMessage?: string;
      }) => {
        try {
          const { recipientId, content, fileUrl, voiceMessage } = data;

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

          // const recipient = await prisma.user.findUnique({
          //   where: { id: recipientId },
          //   select: {
          //     profileImage: true,
          //     username: true,
          //   },
          // });

          if (!content && !fileUrl && !voiceMessage) {
            return socket.emit("error", {
              error: "Message must contain text, file, or voice note",
            });
          }

          const messageData: messageDataType = {
            directChatId: directChat.id,
            senderId: socket.userId,
            ...(content && { content }),
            ...(fileUrl && { fileUrl }),
            ...(voiceMessage && { voiceMessage }),
          };

          const message = await prisma.messages.create({
            data: messageData,
            include: {
              sender: true,
            },
          });

          socket.to(recipientId).emit("message:receive", {
            id: message.id,
            content: message.content,
            voiceMessage: message.voiceMessage,
            fileUrl: message.fileUrl,
            chatId: directChat.id,
            senderImage: message.sender.profileImage,
            senderId: message.senderId,
            createdAt: message.createdAt,
            messageId: message.messageId,
            seen: message.seen,
            recipientId: recipientId,
          });

          socket.to(recipientId).emit("lastMessage", {
            id: message.id,
            content: message.content,
            voiceMessage: message.voiceMessage,
            fileUrl: message.fileUrl,
            chatId: directChat.id,
            senderImage: message.sender.profileImage,
            senderId: message.senderId,
            createdAt: message.createdAt,
            messageId: message.messageId,
            seen: message.seen,
            recipientId: recipientId,
          });

          socket.emit("lastMessage", {
            id: message.id,
            content: message.content,
            voiceMessage: message.voiceMessage,
            fileUrl: message.fileUrl,
            chatId: directChat.id,
            senderImage: message.sender.profileImage,
            senderId: message.senderId,
            createdAt: message.createdAt,
            messageId: message.messageId,
            seen: message.seen,
            recipientId: recipientId,
          });
          
          socket.to(recipientId).emit("unreadCount", {
            id: message.id,
            content: message.content,
            voiceMessage: message.voiceMessage,
            fileUrl: message.fileUrl,
            chatId: directChat.id,
            senderImage: message.sender.profileImage,
            senderId: message.senderId,
            createdAt: message.createdAt,
            messageId: message.messageId,
            seen: message.seen,
            recipientId: recipientId,
          });

          socket.emit("message:receive", {
            id: message.id,
            content: message.content,
            voiceMessage: message.voiceMessage,
            fileUrl: message.fileUrl,
            chatId: directChat.id,
            senderImage: message.sender.profileImage,
            senderId: message.senderId,
            createdAt: message.createdAt,
            messageId: message.messageId,
            seen: message.seen,
            recipientId: recipientId,
          });
        } catch (err) {
          console.log(err);
        }
      },
    );

    socket.on(
      "message:edit",
      async (data: {
        directChatId: string;
        content?: string;
        messageId: string;
        recipientId: string;
      }) => {
        const { content, directChatId, messageId, recipientId } = data;
        const senderId = socket.userId;

        try {
          const message = await prisma.messages.findUnique({
            where: { id: messageId },
          });

          if (message?.senderId !== senderId) return;

          if (!directChatId) return;

          const chat = await prisma.directChat.findUnique({
            where: {
              id: directChatId,
            },
          });

          if (!chat) return;
          if (!message) return;

          const messageData: messageDataType = {
            directChatId: directChatId,
            messageId: messageId,
            senderId: senderId,
            ...(content && { content }),
          };
          const editedMessage = await prisma.messages.update({
            where: {
              id: messageId,
            },
            data: messageData,
            include: {
              sender: true,
            },
          });

          socket.emit("edit-message", {
            id: editedMessage.id,
            content: editedMessage.content,
            voiceMessage: editedMessage.voiceMessage,
            fileUrl: editedMessage.fileUrl,
            chatId: directChatId,
            senderImage: editedMessage.sender.profileImage,
            senderId: editedMessage.senderId,
            createdAt: editedMessage.createdAt,
            seen: editedMessage.seen,
          });

          socket.to(recipientId).emit("edit-message", {
            id: editedMessage.id,
            content: editedMessage.content,
            voiceMessage: editedMessage.voiceMessage,
            fileUrl: editedMessage.fileUrl,
            chatId: directChatId,
            senderImage: editedMessage.sender.profileImage,
            senderId: editedMessage.senderId,
            createdAt: editedMessage.createdAt,
            seen: editedMessage.seen,
          });
        } catch (err) {
          console.log(err);
        }
      },
    );

    socket.on(
      "message:reply",
      async (data: {
        directChatId: string;
        content?: string;
        fileUrl?: string;
        voiceMessage?: string;
        messageId: string;
        recipientId: string;
      }) => {
        const {
          content,
          fileUrl,
          voiceMessage,
          messageId,
          directChatId,
          recipientId,
        } = data;

        try {
          const message = await prisma.messages.findUnique({
            where: { id: messageId },
          });

          if (!message) return;

          const messageData: messageDataType = {
            directChatId: directChatId,
            senderId: socket.userId,
            messageId: messageId,
            ...(content && { content }),
            ...(fileUrl && { fileUrl }),
            ...(voiceMessage && { voiceMessage }),
          };

          const updatedMessage = await prisma.messages.create({
            data: messageData,
            include: {
              sender: true,
            },
          });

          socket.to(recipientId).emit("message:receive", {
            id: updatedMessage.id,
            content: updatedMessage.content,
            voiceMessage: updatedMessage.voiceMessage,
            fileUrl: updatedMessage.fileUrl,
            chatId: updatedMessage.directChatId,
            senderImage: updatedMessage.sender.profileImage,
            senderId: updatedMessage.senderId,
            createdAt: updatedMessage.createdAt,
            messageId: updatedMessage.messageId,
            seen: updatedMessage.seen,
            recipientId: recipientId,
          });

          socket.emit("message:receive", {
            id: updatedMessage.id,
            content: updatedMessage.content,
            voiceMessage: updatedMessage.voiceMessage,
            fileUrl: updatedMessage.fileUrl,
            chatId: updatedMessage.directChatId,
            senderImage: updatedMessage.sender.profileImage,
            senderId: updatedMessage.senderId,
            createdAt: updatedMessage.createdAt,
            messageId: updatedMessage.messageId,
            seen: updatedMessage.seen,
            recipientId: recipientId,
          });
        } catch (err) {
          console.log(err);
        }
      },
    );

    socket.on(
      "message:delete",
      async (data: { messageId: string; recipientId: string }) => {
        const { messageId, recipientId } = data;

        try {
          const message = await prisma.messages.findUnique({
            where: { id: messageId },
          });

          if (!message) return;

          const deletedMessage = await prisma.messages.delete({
            where: {
              id: messageId,
            },
          });

          socket.to(recipientId).emit("message:delete", {
            id: deletedMessage.id,
          });
          socket.emit("message:delete", {
            id: deletedMessage.id,
          });
        } catch (err) {
          console.log(err);
        }
      },
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
      },
    );
    (socket.on("group:join", async (data: { groupId: string }) => {
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
      }));

    socket.on(
      "typing:start",
      (data: { isTyping: boolean; recipientId: string }) => {
        const { isTyping, recipientId } = data;
        if (isTyping) {
          socket.to(recipientId).emit("listeningTyping", {
            message: "typing",
          });
        } else {
          socket.to(recipientId).emit("listeningTyping", { message: "" });
        }
      },
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
      },
    );

    socket.on("read", async (data: { messageId: string; friendId: string }) => {
      const { messageId, friendId } = data;

      try {
        const readMessage = await prisma.messages.update({
          where: { id: messageId },
          data: { seen: true },
          include: {
            sender: true,
          },
        });

        socket.to(friendId).emit("incomingRead", {
          readMessage: readMessage,
          senderId: readMessage.senderId,
        });
      } catch (err) {
        console.log("We have an error with the read", err);
      }
    });

    socket.on("get-notifications", async () => {
      try {
        const notification = await prisma.notification.findMany({
          where: { userId: socket.userId },
        });

        const grouped = GroupNotifications(notification);
        socket.emit("notifications-data", { grouped });
      } catch (err) {
        console.log("Notification Error", err);
      }
    });

    socket.on("connect_error", (err: any) => {
      console.log("Connection error:", err.message);
    });

    socket.on("disconnect", async (reason: string) => {
      try {
        const onlineFriendsBeforeDisconnect = await getOnlineUsers(
          socket.userId,
        );
        await prisma.user.update({
          where: { id: socket.userId },
          data: { isOnline: false },
        });

        for (const room of socket.rooms) {
          socket.leave(room);
        }

        for (const friend of onlineFriendsBeforeDisconnect) {
          const friendsOnlineFriends = await getOnlineUsers(friend.id);
          io.to(friend.id).emit("onlineUsers", {
            usersOnline: friendsOnlineFriends,
          });
          socket
            .to(friend.id)
            .emit("friendOnline", { userId: socket.userId, isOnline: false });
        }

        console.log(socket.username, "disconnected", reason);
      } catch (err) {
        console.log("Disconnect error", err);
      }
    });
  });
};

import passport from "passport";
import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prismaClient.js";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { sendEmail, contactApp } from "../services/emailService.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import type { ParsedQs } from "qs";

dotenv.config();
const getString = (
  value: string | ParsedQs | (string | ParsedQs)[] | undefined,
): string => {
  if (!value) return "";
  if (Array.isArray(value)) return String(value[0]);
  return String(value);
};


export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const error = validationResult(req);
  if (!error.isEmpty()) {
    const errorMessage = error.array().map((err) => err.msg);
    return res.status(400).json({ error: errorMessage });
  }

  const defaultUsername = email.split("@")[0];
  const hashpassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (existingUser)
      return res.status(409).json({
        error:
          "User already exists. Try logging in or use a different email to sign up",
      });

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashpassword,
        username: defaultUsername,
      },
    });

    // sendEmail(
    //   email,
    //   "Welcome to NexChat! 🎉",
    //   `
    //   <div style = "font-family: Arial, sans-serif;  max-width: 600px; padding:20px; background-color: #f9f9f9; border-radius: 8px; ">
    //     <h1 style = "color: #333;  margin: 0 0 10px 0;">Welcome to NexChat Message App</h1>
    //     <p style="color: #555; margin: 0 0 20px 0;">Hi ${user.username},</p>
    //     <p style="color: #555; margin: 0 0 10px 0;">Thanks for signing up! We're excited to have you.</p>
    //     <p style="color: #555; margin: 0 0 20px 0;">Start chatting with friends now!</p>
    //     <br>
    //     <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
    //   </div>
    //   `
    // );

    return res.redirect("http://localhost:3000/login");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal error.",
    });
  }
};

export const Login = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const errorMessage = error.array().map((err) => err.msg);
    return res.status(400).json({ error: errorMessage });
  }

  try {
    passport.authenticate(
      "local",
      { session: false },
      (error: any, user: any, info: any) => {
        if (error) return res.status(500).json({ error: "Internal error" });

        if (!user) return res.status(401).json({ error: info?.message });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
          expiresIn: "7d",
        });
        const loginTime = new Date().toLocaleString();

        // sendEmail(
        //   user.email,
        //   "Login Alert - NexChat",
        //   `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0; background-color: #f9f9f9; padding: 20px;">
        //   <h2 style="color: #333; margin: 0 0 20px 0;">Login Alert</h2>
        //   <p style="color: #555; margin: 0 0 10px 0;">Hi ${user.username},</p>
        //   <p style="color: #555; margin: 0 0 10px 0;">
        //    Your account was just accessed at: <strong>${loginTime}</strong>.
        //   </p>
        //  <p style="color: #555; margin: 0 0 10px 0;">
        //    If this wasn't you, please secure your account immediately.
        //  </p>
        //   <p style="color: #999; font-size: 12px; margin: 0 0 20px 0;">
        //    This is an automated security notification.
        //   </p>
        //    <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
        // </div>`
        // );
        return res
          .status(200)
          .json({ message: "Login successful", token: token, user: user });
      },
    )(req, res, next);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Error ",
    });
  }
};

export const GoogleInit = passport.authenticate("google-login", {
  scope: ["profile", "email"],
});

export const GoogleLogin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    passport.authenticate(
      "google-login",
      { session: false },
      (error: any, user: any, info: any) => {
        if (error) {
          console.log("Google Login Error:", error);
          return res.redirect(
            `http://localhost:3000/login?error=${encodeURIComponent(
              "server error",
            )}`,
          );
        }
        if (!user)
          return res.redirect(
            `http://localhost:3000/login?error=${encodeURIComponent(
              info.message,
            )}`,
          );

        const loginTime = new Date().toLocaleString();
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
          expiresIn: "7d",
        });

        // sendEmail(
        //   user.email,
        //   "Login Alert - NexChat",
        //   `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0; background-color: #f9f9f9; padding: 20px;">
        //   <h2 style="color: #333; margin: 0 0 20px 0;">Login Alert</h2>
        //   <p style="color: #555; margin: 0 0 10px 0;">Hi ${user.username},</p>
        //   <p style="color: #555; margin: 0 0 10px 0;">
        //    Your account was just accessed at: <strong>${loginTime}</strong>.
        //   </p>
        //  <p style="color: #555; margin: 0 0 10px 0;">
        //    If this wasn't you, please secure your account immediately.
        //  </p>
        //   <p style="color: #999; font-size: 12px; margin: 0 0 20px 0;">
        //    This is an automated security notification.
        //   </p>
        //    <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
        // </div>`
        // );

        return res.redirect(`http://localhost:3000/login?token=${token}`);
      },
    )(req, res, next);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal error.",
    });
  }
};

export const googleSignUpInit = passport.authenticate("google-signup", {
  scope: ["profile", "email"],
});

export const GoogleSignUp = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    passport.authenticate(
      "google-signup",
      { session: false },
      (error: any, user: any, info: any) => {
        if (error) {
          console.log("Google Login Error:", error);
          return res.redirect(
            `http://localhost:3000/signup?error=${encodeURIComponent(
              "server error",
            )}`,
          );
        }

        if (!user)
          return res.redirect(
            `http://localhost:3000/signup?error=${encodeURIComponent(
              "Account already exists, try logging in.",
            )}`,
          );

        //   sendEmail(
        //     user.email,
        //     "Welcome to NexChat! 🎉",
        //     `
        // <div style = "font-family: Arial, sans-serif;  max-width: 600px; padding:20px; background-color: #f9f9f9; border-radius: 8px; ">
        //   <h1 style = "color: #333;  margin: 0 0 20px 0;">Welcome to NexChat Message App</h1>
        //   <p style="color: #555; margin: 0 0 20px 0;">Hi ${user.username},</p>
        //   <p style="color: #555; margin: 0 0 10px 0;">Thanks for signing up! We're excited to have you.</p>
        //   <p style="color: #555; margin: 0 0 20px 0;">Start chatting with friends now!</p>
        //   <br>
        //   <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
        // </div>
        // `
        //   );
      },
    )(req, res, next);
  } catch (err) {
    console.log(err);
    res.redirect(
      `http://localhost:3000/signup?error=${encodeURIComponent(
        "Internal Error.",
      )}`,
    );
  }
};

export const initialLogin = async (req: Request, res: Response) => {
  try {
    const userId = req.user as string;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        bio: true,
        createdAt: true,
        email: true,
        isOnline: true,
        profileImage: true,
      },
    });

    const friendRequests = await prisma.friendRequest.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }],
        status: "ACCEPTED",
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            email: true,
            profileImage: true,
            isOnline: true,
            bio: true,
            createdAt: true,
          },
        },
        receiver: {
          select: {
            id: true,
            username: true,
            email: true,
            profileImage: true,
            isOnline: true,
            bio: true,
            createdAt: true,
          },
        },
      },
    });

    const friends = friendRequests.map((fr:any) => {
      return fr.senderId === userId ? fr.receiver : fr.sender;
    });

    const chatWithLastMessage = await Promise.all(
      friends.map(async (fr:any) => {
        const directChat = await prisma.directChat.findFirst({
          where: {
            OR: [
              { user1Id: userId, user2Id: fr.id },
              { user2Id: userId, user1Id: fr.id },
            ],
          },
          include: {
            messages: {
              orderBy: { createdAt: "desc" },
              take: 1,
              select: {
                id: true,
                content: true,
                createdAt: true,
                senderId: true,
                seen: true,
                fileUrl: true,
                voiceMessage: true,
              },
            },
          },
        });

        const unreadCount = await prisma.messages.count({
          where: {
            directChatId: directChat?.id ?? null,
            senderId: fr.id,
            seen: false,
          },
        });
        const lastMessagePreview = directChat?.messages[0];
        let lastMessage = null;
        if (lastMessagePreview) {
          if (lastMessagePreview.content)
            lastMessage = lastMessagePreview.content;
          if (lastMessagePreview.voiceMessage) lastMessage = "🎤 Voice message";
          if (lastMessagePreview.fileUrl) lastMessage = "📎 Attachment";
        }

        return {
          ...fr,
          chatId: directChat?.id,
          lastMessage: lastMessage || null,
          unreadCount: unreadCount,
        };
      }),
    );
    const groupQuery = await prisma.groupMembership.findMany({
      where: { userId: userId },
      include: {
        group: true,
      },
    });

    const groups = groupQuery.map((gr:any) => gr.group);

    const groupWithLastMessage = await Promise.all(
      groups.map(async (gr:any) => {
        const groupMessage = await prisma.groupChat.findUnique({
          where: { id: gr.id },
          include: {
            messages: {
              orderBy: { createdAt: "desc" },
              take: 1,
              select: {
                id: true,
                content: true,
                createdAt: true,
                senderId: true,
                seen: true,
                voiceMessage: true,
                fileUrl: true,
              },
            },
          },
        });

        // const unreadCount = await prisma.messages.count({
        //   where: { groupId: gr.id, seen: false },
        // });

        const groupRole = await prisma.groupMembership.findFirst({
          where: {
            userId: userId,
            groupId: gr.id,
          },
        });

        const lastMessagePreview = groupMessage?.messages[0];
        let lastMessage = null;

        if (lastMessagePreview) {
          if (lastMessagePreview?.content)
            lastMessage = lastMessagePreview.content;
          if (lastMessagePreview?.fileUrl) lastMessage = "📎 Attachment";
          if (lastMessagePreview?.voiceMessage)
            lastMessage = "🎤 Voice message";
        }
        return {
          ...gr,
          lastMessage: lastMessage,
          // unreadCount: unreadCount,
          groupId: groupMessage?.id,
          groupRole: groupRole?.role,
        };
      }),
    );

    res.status(200).json({
      user: user,
      friends: chatWithLastMessage,
      group: groupWithLastMessage,
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal error",
    });
  }
};

export const chatHistory = async (req: Request, res: Response) => {
  const { chatId } = req.params;

  try {
    const chat = await prisma.directChat.findUnique({
      where: {
        id: chatId!,
      },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
          include: { sender: true, replies: true },
        },
      },
    });

    res.status(200).json({
      chatMessage: chat,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal error",
    });
  }
};

export const groupChatHistory = async (req: Request, res: Response) => {
  const { groupId } = req.body;
  try {
    const data = await prisma.messages.findMany({
      where: { groupId: groupId, directChatId: null },
      orderBy: { createdAt: "asc" },
      include: {
        sender: true,
      },
    });

    if (!data) {
      return res.status(404).json({ error: "Group not found." });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return { error: "Server went very wrong." };
  }
};

export const searchBar = async (req: Request, res: Response) => {
  try {
    const username = getString(req.query.username);
    const currentUser = req.user as string;

    const users = await prisma.user.findMany({
      where: {
        username: { contains: username as string, mode: "insensitive" },
        NOT: { id: currentUser },
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    const usersWithStatus = await Promise.all(
      users.map(async (user:any) => {
        const friendStatus = await prisma.friendRequest.findFirst({
          where: {
            OR: [
              { senderId: currentUser, receiverId: user.id },
              { senderId: user.id, receiverId: currentUser },
            ],
          },
        });

        let status = null;
        if (friendStatus) {
          if (friendStatus.status === "ACCEPTED") {
            status = "friends";
          } else if (friendStatus.status === "PENDING") {
            if (friendStatus.senderId === currentUser) {
              status = "pending";
            } else {
              status = "awaiting_response";
            }
          }
        }

        return {
          ...user,
          status: status,
          requestId: friendStatus?.id,
        };
      }),
    );

    return res.status(200).json({
      usersWithStatus,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal error.",
    });
  }
};

type NotificationType = {
  id: string;
  createdAt: Date;
  data: any;
  userId: string;
  read: boolean | null;
  type: string;
  message: string;
};

export const sendFriendRequest = async (req: Request, res: Response) => {
  const { receiverId } = req.body;
  const senderId = req.user as string;

  try {
    const sender = await prisma.user.findUnique({
      where: { id: senderId! },
    });

    const receiver = await prisma.user.findUnique({
      where: { id: receiverId! },
    });

    if (!sender || !receiver) {
      return res.status(404).json({
        error: "User not found.",
      });
    }

    const friendRequest = await prisma.friendRequest.create({
      data: {
        senderId: senderId!,
        receiverId: receiverId!,
      },
    });

    if (!friendRequest) return;

    await prisma.notification.create({
      data: {
        userId: receiverId as string,
        type: "FRIEND REQUEST",
        message: `${sender.username} sent you a friend request`,
        data: {
          profilePicture: sender.profileImage,
          senderId: sender.id,
          requestId: friendRequest.id,
          senderUsername: sender.username,
          senderImage: sender.profileImage,
          statusId: friendRequest.id,
        },
      },
    });

    res.status(201).json({
      message: "Friend request sent successfully.",
    });

    sendEmail(
      receiver.email,
      `New Friend Request from ${sender.username} - NexChat`,
      `<div style = "font-family: Arial, sans-serif;  max-width: 600px; padding:20px; background-color: #f9f9f9; border-radius: 8px; ">
        <h1 style = "color: #333;  margin: 0 0 20px 0;">Welcome to NexChat Message App</h1>
        <p style="color: #555; margin: 0 0 20px 0;">Hi ${receiver.username},</p>
        <p style="color: #555; margin: 0 0 10px 0;"><strong>${sender.username}</strong> sent you a friend request on NexChat!</p>
        <p style="color: #555; margin: 0 0 20px 0;"> 🎉 Connect with ${sender.username} and start chatting!</p>
        <br>
        <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
      </div>`,
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal error" });
  }
};

export const acceptFriendRequest = async (req: Request, res: Response) => {
  try {
    const { requestId } = req.body;

    const acceptedFriendReques = await prisma.friendRequest.update({
      where: { id: requestId as string },
      include: { sender: true, receiver: true },
      data: { status: "ACCEPTED" },
    });

    await prisma.directChat.create({
      data: {
        user1Id: acceptedFriendReques.senderId,
        user2Id: acceptedFriendReques.receiverId,
      },
    });

    sendEmail(
      acceptedFriendReques.sender.email,
      `${acceptedFriendReques.receiver.username} accepted your friend request! - NexChat 🎉`,
      `<div style = "font-family: Arial, sans-serif;  max-width: 600px; padding:20px; background-color: #f9f9f9; border-radius: 8px; ">
        <h1 style = "color: #333;  margin: 0 0 20px 0;">Welcome to NexChat Message App</h1>
        <p style="color: #555; margin: 0 0 20px 0;">Hi ${acceptedFriendReques.sender.username},</p>
        <p style="color: #555; margin: 0 0 10px 0;"><strong> Great news! <strong>${acceptedFriendReques.receiver.username}</strong> accepted your friend request on NexChat!</p>
        <p style="color: #555; margin: 0 0 20px 0;">  🎊 You can now start chatting with ${acceptedFriendReques.receiver.username}!</p>
        <br>
        <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
      </div>`,
    );
    res.status(200).json({ message: "Friend request accepted." });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal error",
    });
  }
};

export const rejectFriendRequest = async (req: Request, res: Response) => {
  try {
    const { requestId } = req.body;
    await prisma.friendRequest.delete({
      where: { id: requestId as string },
    });
    res.status(200).json({ message: "Friend request rejected." });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal error",
    });
  }
};

export const getFriendRequest = async (req: Request, res: Response) => {
  try {
    const userId = getString(req.params.userId);

    const requestReceived = await prisma.friendRequest.findMany({
      where: { status: "PENDING", receiverId: userId! },
    });
    res.status(200).json({ request: requestReceived });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error" });
  }
};

export const cancelRequest = async (req: Request, res: Response) => {
  const senderId = req.user as string;
  const { receiverId } = req.body;

  try {
    const friendRequest = await prisma.friendRequest.delete({
      where: {
        senderId_receiverId: {
          senderId: senderId,
          receiverId: receiverId,
        },
      },
    });

    if (!friendRequest) {
      return res.status(404).json({
        error: "Invalid Request",
      });
    }

    res.status(200).json({ message: "Request done successfully" });
    console.log("Request cancelled successfully");
  } catch (err) {
    console.log("Cancel request Error.", err);
  }
};

export const contactUs = async (req: Request, res: Response) => {
  const { email, subject, message } = req.body;
  try {
    await contactApp(email, subject, message);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully " });
  } catch (err) {
    console.log("CONTACT US ERROR ", err);
    res.status(500).json({ error: "Internal error" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const { DisplayName, Bio } = req.body;
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];
  const decoded = jwt.decode(token as string) as JwtPayload;
  const userId = decoded.id;
  const imageUrl = req.file?.path;

  const data: Record<string, any> = {};

  if (DisplayName) data.username = DisplayName;
  if (Bio) data.bio = Bio;
  if (imageUrl) data.profileImage = imageUrl;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: data,
    });
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
  } //Change initial login token from body to header
};

export const deleteAccount = async (req: Request, res: Response) => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];
  const decoded = jwt.decode(token as string) as JwtPayload;
  const userId = decoded.id;

  try {
    const deletedAccount = await prisma.user.delete({ where: { id: userId } });
    res.json(deletedAccount);
  } catch (err) {
    console.log(err);
  }
};

export const fileUpload = async (req: Request, res: Response) => {
  const fileUrl = req.file?.path as any;

  if (!fileUrl) {
    console.log("Error big one");
    return res.status(400).json({ error: "No file provided" });
  }

  console.log(fileUrl);
  res.json({ data: fileUrl });
};

export const createGroup = async (req: Request, res: Response) => {
  const imageUrl = req.file?.path;
  const { name, memberIds } = req.body;

  const admin = req.user;

  try {
    const parsedMemberIds: string[] =
      typeof memberIds === "string" ? JSON.parse(memberIds) : memberIds;

    const group = await prisma.groupChat.create({
      data: {
        name: name,
        imageUrl: imageUrl ?? null,
      },
    });

    const adminUser = await prisma.groupMembership.create({
      data: {
        groupId: group.id,
        userId: admin as string,
        role: "ADMIN",
      },
    });

    const members = await Promise.all(
      parsedMemberIds.map(async (id: string) => {
        return await prisma.groupMembership.create({
          data: {
            groupId: group.id,
            userId: id,
          },
        });
      }),
    );

    res.status(200).json({ adminUser, members, group });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "The server went very wrong" });
  }
};

export const leaveGroup = async (req: Request, res: Response) => {
  const { groupId } = req.body;
  const userId = req.user as string;

  if (!userId || !groupId) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    const groupLeft = await prisma.groupMembership.delete({
      where: {
        userId_groupId: {
          userId: userId,
          groupId: groupId,
        },
      },
    });

    return res.status(200).json(groupLeft);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to leave group" });
  }
};

export const unFriend = async (req: Request, res: Response) => {
  const { friendId } = req.body;
  const userId = req.user as string;

  if (!friendId || !userId) {
    return res.status(400).json({ error: "Missing data" });
  }
  try {
    await prisma.directChat.deleteMany({
      where: {
        OR: [
          { user1Id: userId, user2Id: friendId },
          { user2Id: userId, user1Id: userId },
        ],
      },
    });

    await prisma.friendRequest.deleteMany({
      where: {
        OR: [
          { senderId: userId, receiverId: friendId },
          { receiverId: userId, senderId: friendId },
        ],
      },
    });

    res.status(200).json({ message: "You've unfriend user successfully." });
  } catch (err) {
    console.log(err);
  }
};

export const addMemberToGroup = async (req: Request, res: Response) => {
  const { groupId } = req.body;
  const { newMembers } = req.body;

  const parsedMembers: string[] =
    typeof newMembers === "string" ? JSON.parse(newMembers) : newMembers;
  if (!parsedMembers || !groupId) {
    return res.status(400).json({ error: "Missing data" });
  }

  try {
    for (const memId of parsedMembers) {
      const alreadyMember = await prisma.groupMembership.findFirst({
        where: {
          groupId: groupId,
          userId: memId,
        },
      });

      if (alreadyMember) {
        return res.status(400).json({ error: "User already exist." });
      }

      await prisma.groupMembership.create({
        data: {
          groupId: groupId,
          userId: memId,
        },
      });
    }
    res.status(200).json("User joined the group successfully");
  } catch (err) {
    console.log(err);
  }
};

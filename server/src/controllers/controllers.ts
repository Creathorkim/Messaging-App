import passport from "passport";
import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prismaClient";
import jwt from "jsonwebtoken";
import { sendEmail } from "../services/emailService";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
dotenv.config();

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
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

    sendEmail(
      email,
      "Welcome to NexChat! 🎉",
      `
      <div style = "font-family: Arial, sans-serif;  max-width: 600px; padding:20px; background-color: #f9f9f9; border-radius: 8px; ">
        <h1 style = "color: #333;  margin: 0 0 10px 0;">Welcome to NexChat Message App</h1>
        <p style="color: #555; margin: 0 0 20px 0;">Hi ${user.username},</p>
        <p style="color: #555; margin: 0 0 10px 0;">Thanks for signing up! We're excited to have you.</p>
        <p style="color: #555; margin: 0 0 20px 0;">Start chatting with friends now!</p>
        <br>
        <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
      </div>
      `
    );

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      token: token,
    });
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
    return res.status(400).json({ error: error.array() });
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

        sendEmail(
          user.email,
          "Login Alert - NexChat",
          `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0; background-color: #f9f9f9; padding: 20px;">
          <h2 style="color: #333; margin: 0 0 20px 0;">Login Alert</h2>
          <p style="color: #555; margin: 0 0 10px 0;">Hi ${user.username},</p>
          <p style="color: #555; margin: 0 0 10px 0;">
           Your account was just accessed at: <strong>${loginTime}</strong>.
          </p>
         <p style="color: #555; margin: 0 0 10px 0;">
           If this wasn't you, please secure your account immediately.
         </p>
          <p style="color: #999; font-size: 12px; margin: 0 0 20px 0;">
           This is an automated security notification.
          </p>
           <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
        </div>`
        );
        return res
          .status(200)
          .json({ message: "Login successful", data: token });
      }
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
  next: NextFunction
) => {
  try {
    passport.authenticate(
      "google-login",
      { session: false },
      (error: any, user: any, info: any) => {
        if (error) return res.status(500).json({ error: "Internal error" });
        if (!user) return res.status(401).json({ error: info?.message });

        const loginTime = new Date().toLocaleString();
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
          expiresIn: "7d",
        });

        sendEmail(
          user.email,
          "Login Alert - NexChat",
          `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0; background-color: #f9f9f9; padding: 20px;">
          <h2 style="color: #333; margin: 0 0 20px 0;">Login Alert</h2>
          <p style="color: #555; margin: 0 0 10px 0;">Hi ${user.username},</p>
          <p style="color: #555; margin: 0 0 10px 0;">
           Your account was just accessed at: <strong>${loginTime}</strong>.
          </p>
         <p style="color: #555; margin: 0 0 10px 0;">
           If this wasn't you, please secure your account immediately.
         </p>
          <p style="color: #999; font-size: 12px; margin: 0 0 20px 0;">
           This is an automated security notification.
          </p>
           <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
        </div>`
        );

        res.status(200).json({ token: token });
      }
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
  next: NextFunction
) => {
  try {
    passport.authenticate(
      "google-signup",
      { session: false },
      (error: any, user: any, info: any) => {
        if (error)
          return res.status(500).json({
            error: "Internal error",
          });
        if (!user) return res.status(401).json({ error: info?.message });

        sendEmail(
          user.email,
          "Welcome to NexChat! 🎉",
          `
      <div style = "font-family: Arial, sans-serif;  max-width: 600px; padding:20px; background-color: #f9f9f9; border-radius: 8px; ">
        <h1 style = "color: #333;  margin: 0 0 20px 0;">Welcome to NexChat Message App</h1>
        <p style="color: #555; margin: 0 0 20px 0;">Hi ${user.username},</p>
        <p style="color: #555; margin: 0 0 10px 0;">Thanks for signing up! We're excited to have you.</p>
        <p style="color: #555; margin: 0 0 20px 0;">Start chatting with friends now!</p>
        <br>
        <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
      </div>
      `
        );

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
          expiresIn: "7d",
        });
        return res.status(201).json({
          success: true,
          message: "Account created successfully",
          token: token,
        });
      }
    )(req, res, next);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal error.",
    });
  }
};

export const initialLogin = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: userId! },
    });

    const friends = await prisma.friendRequest.findMany({
      where: {
        OR: [
          { receiverId: userId!, status: "ACCEPTED" },
          { senderId: userId!, status: "ACCEPTED" },
        ],
      },
      include: {
        sender: true,
        receiver: true,
      },
    });

    res.status(200).json({
      user: user,
      friends: friends,
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
          include: { sender: true },
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

export const searchBar = async (req: Request, res: Response) => {
  try {
    const { username } = req.query;

    if (typeof username === "string") {
      const user = await prisma.user.findMany({
        where: { username: { contains: username, mode: "insensitive" } },
      });
      return res.status(200).json({
        user: user,
      });
    } else {
      return res.status(500).json({
        error: "Invalid User",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal error.",
    });
  }
};

export const sendFriendRequest = async (req: Request, res: Response) => {
  try {
    const { senderId, receiverId } = req.params;

    if (senderId === receiverId) {
      return res.status(400).json({
        error: "You can't add yourself.",
      });
    }

    const existingRequest = await prisma.friendRequest.findUnique({
      where: {
        senderId_receiverId: {
          senderId: senderId!,
          receiverId: receiverId!,
        },
      },
    });

    if (existingRequest) {
      return res.status(400).json({
        error: "Request already sent.",
      });
    }

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

    await prisma.friendRequest.create({
      data: {
        senderId: senderId!,
        receiverId: receiverId!,
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
      </div>`
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal error" });
  }
};

export const acceptFriendRequest = async (req: Request, res: Response) => {
  try {
    const { requestId } = req.params;

    const acceptedFriendRequest = await prisma.friendRequest.update({
      where: { id: requestId as string },
      include: { sender: true, receiver: true },
      data: { status: "ACCEPTED" },
    });

    sendEmail(
      acceptedFriendRequest.sender.email,
      `${acceptedFriendRequest.receiver.username} accepted your friend request! - NexChat 🎉`,
      `<div style = "font-family: Arial, sans-serif;  max-width: 600px; padding:20px; background-color: #f9f9f9; border-radius: 8px; ">
        <h1 style = "color: #333;  margin: 0 0 20px 0;">Welcome to NexChat Message App</h1>
        <p style="color: #555; margin: 0 0 20px 0;">Hi ${acceptedFriendRequest.sender.username},</p>
        <p style="color: #555; margin: 0 0 10px 0;"><strong> Great news! <strong>${acceptedFriendRequest.receiver.username}</strong> accepted your friend request on NexChat!</p>
        <p style="color: #555; margin: 0 0 20px 0;">  🎊 You can now start chatting with ${acceptedFriendRequest.receiver.username}!</p>
        <br>
        <p style="margin: 0;color: #999;">Best regards,<br>The NexChat Team</p>
      </div>`
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
    const { requestId } = req.params;
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
    const { userId } = req.params;

    const requestReceived = await prisma.friendRequest.findMany({
      where: { status: "PENDING", receiverId: userId! },
    });
    res.status(200).json({ request: requestReceived });
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal error.");
  }
};

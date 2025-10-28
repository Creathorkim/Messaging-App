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
    return res.status(500).json("Internal error");
  }
};

export const Login = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

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
      return res.status(200).json({ message: "Login successful", data: token });
    }
  )(req, res, next);
};

export const GoogleInit = passport.authenticate("google-login", {
  scope: ["profile", "email"],
});

export const GoogleLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
};

export const googleSignUpInit = passport.authenticate("google-signup", {
  scope: ["profile", "email"],
});

export const GoogleSignUp = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
};

// export 
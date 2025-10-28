import express from "express";
import morgan from "morgan";
import type { Request, Response } from "express";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypt from "bcryptjs";
import prisma from "./config/prismaClient";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/route";

const app = express();
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (!user) return done(null, false, { message: "User not found " });

        const isMatch = await bcrypt.compare(password, user.password!);
        if (!isMatch)
          return done(null, false, { message: "Incorrect password" });

        return done(null, user);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);

passport.use(
  "jwt-strategy",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET!,
    },

    async (payload, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: payload.id },
        });
        if (user) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: "User not authorized to perform this action.",
          });
        }
      } catch (err) {
        console.log(err);
        return done(false, err);
      }
    }
  )
);

passport.use(
  "google-login",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value!;
        const user = await prisma.user.findUnique({ where: { email: email } });

        if (!user)
          return done(null, false, {
            message: "No account found. Please sign up first.",
          });

        return done(null, user);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);

passport.use(
  "google-signup",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
    },
    async (acessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value!;
        let user = await prisma.user.findUnique({
          where: { email: email },
        });
        if (!user) {
          user = await prisma.user.create({
            data: {
              email: email,
              username: profile.displayName,
              profileImage: profile.photos?.[0]?.value!,
            },
          });
        } else {
          return done(null, false, {
            message: "Account already exists. Please log in.",
          });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

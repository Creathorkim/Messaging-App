import type { Request, Response, NextFunction } from "express";
import passport from "passport";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", (error: any, user: any, info: any) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!user) {
      return res.status(401).json({ error: info?.message });
    }
    next();
  })(req, res, next);
};

export default authenticate;

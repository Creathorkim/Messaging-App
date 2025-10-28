import {
  signUp,
  GoogleInit,
  GoogleLogin,
  GoogleSignUp,
  googleSignUpInit,
  Login
} from "../controllers/authController";
import { signUpValidation, loginValidation } from "../middlewares/validation";
import { Router } from "express";
const router = Router();

router.post("/signUp", signUpValidation(), signUp);
router.post("/login", loginValidation(), Login);

router.get("/google/signup", googleSignUpInit);
router.get("/auth/google/callback", GoogleSignUp);

router.get("/google/login", GoogleInit);
router.get("/auth/google/callback",GoogleLogin)

export default router

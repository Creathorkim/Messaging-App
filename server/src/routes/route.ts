import authenticate from "../middlewares/authMiddleware";
import {
  signUp,
  GoogleInit,
  GoogleLogin,
  GoogleSignUp,
  googleSignUpInit,
  Login,
  initialLogin,
  chatHistory,
  searchBar,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  getFriendRequest,
} from "../controllers/controllers";
import { signUpValidation, loginValidation } from "../middlewares/validation";
import { Router } from "express";
const router = Router();

router.post("/signUp", signUpValidation(), signUp);
router.post("/login", loginValidation(), Login);
router.get("/google/signup", googleSignUpInit);
router.get("/auth/google/callback", GoogleSignUp);
router.get("/google/login", GoogleInit);
router.get("/auth/google/callback", GoogleLogin);

router.get("/user/:userId", authenticate, initialLogin);
router.get("/search", authenticate, searchBar);
router.get("/chat/:chatId", authenticate, chatHistory);

router.post(
  "/friend/request/:senderId/:receiverId",
  authenticate,
  sendFriendRequest
);
router.get("/friend/requests/:userId", authenticate, getFriendRequest);
router.put("/friend/accept/:requestId", authenticate, acceptFriendRequest);
router.delete("/friend/reject/:requestId", authenticate, rejectFriendRequest);

export default router;

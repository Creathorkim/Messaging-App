import authenticate from "../middlewares/authMiddleware";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
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
  contactUs,
  updateProfile,
  deleteAccount,
  cancelRequest,
  fileUpload,
} from "../controllers/controllers";
import { signUpValidation, loginValidation } from "../middlewares/validation";
import cloudinary from "../config/cloudinary";
import { Router } from "express";
const router = Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "KimChat Uploads",
      resource_type: "auto",
    };
  },
});

const upload = multer({ storage });
router.post("/login", loginValidation(), Login);
router.post("/signUp", signUpValidation(), signUp);
router.post("/contact", contactUs);
router.get("/google/signup", googleSignUpInit);
router.get("/auth/google/signup/callback", GoogleSignUp);
router.get("/google/login", GoogleInit);
router.get("/auth/google/login/callback", GoogleLogin);

router.post("/user", authenticate, initialLogin);
router.put(
  "/update",
  authenticate,
  upload.single("profilePicture"),
  updateProfile
);
router.get("/search", authenticate, searchBar);
router.get("/chat/:chatId", authenticate, chatHistory);

router.post("/uploads", authenticate, upload.single("file"), fileUpload);

router.post("/friend/request", authenticate, sendFriendRequest);
router.get("/friend/requests/:userId", authenticate, getFriendRequest);
router.put("/friend/accept/:requestId", authenticate, acceptFriendRequest);
router.delete("/friend/reject", authenticate, rejectFriendRequest);
router.delete("/friend/cancelRequest", authenticate, cancelRequest);
router.delete("/deleteAccount", authenticate, deleteAccount);
export default router;

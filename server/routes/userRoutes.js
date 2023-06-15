import express from "express";
import { allUsers, login, signUp } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
// import signUp from "../controllers/userController";

const router = express.Router();
router.route("/").post(signUp).get(protect, allUsers);
router.post("/login", login);
export { router };

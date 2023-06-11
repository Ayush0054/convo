import express from "express";
import { login, signUp } from "../controllers/userController.js";
// import signUp from "../controllers/userController";

const router = express.Router();
router.route("/").post(signUp);
router.post("/login", login);
export { router };

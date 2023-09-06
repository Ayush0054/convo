import express from "express";
import { allUsers, login, signUp , updatePhoto} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
// import signUp from "../controllers/userController";

const router = express.Router();
router.route("/").post(signUp).get(protect, allUsers);
router.post("/login", login);
router.route("/updatephoto").put(protect, updatePhoto);
export { router };

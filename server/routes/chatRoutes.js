import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { accessChat, fetchChats } from "../controllers/chatController.js";

const chatRoutes = express.Router();
chatRoutes.route("/").post(protect, accessChat);
chatRoutes.route("/").get(protect, fetchChats);
// chatRoutes.route("/group").post(protect,createGroupChat);
// chatRoutes.route("/rename").put(protect,renameGroup);
// chatRoutes.route("/groupremove").put(protect,removeFromGroup);
// chatRoutes.route("/groupadd").put(protect,addToGroup);
export { chatRoutes };

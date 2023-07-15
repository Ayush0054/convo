import express from "express";
import { connectDB } from "./config/db.js";
import { router } from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";
import dotenv from "dotenv";
import { chatRoutes } from "./routes/chatRoutes.js";
import { messageRoutes } from "./routes/messageRoutes.js";
// const userRoutes = require("./routes/userRoutes");
const app = express();
dotenv.config();
app.use(express.json());
connectDB();
console.log(connectDB());

app.use(cors());

app.options("*", cors());
app.use("/api/user", router);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}
app.get("/", (req, res) => {
  res.send("hello nigga");
});
// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//   console.log(`Listening to requests on port ${port}`.yellow)
// );
app.listen(5000, function () {
  console.log("Server is running on port " + 5000);
});

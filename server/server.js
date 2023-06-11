import express from "express";
import { connectDB } from "./config/db.js";
import { router as userRoutes } from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
connectDB();
console.log(connectDB());
app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("hello nigga");
});
app.listen(5000, function () {
  console.log("Server is running on port " + 5000);
});

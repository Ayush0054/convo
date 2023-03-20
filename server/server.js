import express from "express";
import { connectDB } from "./config/db";
// import { connectDB } from "../config/db";
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("hello nigga");
});
app.listen(5000, () => console.log("server running"));

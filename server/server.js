import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("hello nigga");
});
app.listen(5000, () => console.log("server running"));

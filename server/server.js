import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello nigga");
});
app.listen(5000, () => console.log("server running"));

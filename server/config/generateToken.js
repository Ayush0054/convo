// const jwt = require("jsonwebtoken");
// import { jsonwebToken as jwt } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
export default generateToken;

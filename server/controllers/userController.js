import asyncHandler from "express-async-handler";
import { User } from "../model/userModel.js";
import generateToken from "../config/generateToken.js";

export const signUp = asyncHandler(async (req, res) => {
  const { name, email, password, picture } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all the feilds");
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    picture,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture || "https://cdn-icons-png.flaticon.com/512/6522/6522516.png",
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the User");
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});
//api/user?search=ayush
export const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
  // console.log(keyword);
});

export const updatePhoto = asyncHandler(async (req, res) => {
  const { userId ,picture} = req.body;
  console.log(userId);
  const updatedPic = await User.findByIdAndUpdate(
    userId,
    { picture },
    { new: true }
  )
  console.log(updatedPic);
  if (!updatedPic) {
    return res.status(400).send({ message: "Chat not found" });
  } else {
    res.json(updatedPic);
  }

  // console.log(keyword);
});

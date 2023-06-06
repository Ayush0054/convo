import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./signin-image.json";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [img, setImg] = useState();
  const [name, setName] = useState("");

  const postImg = () => {};
  const style = {
    height: 600,
    width: 600,
  };
  return (
    <div>
      <h1 className=" text-7xl text-center p-10 ">SignUp</h1>
      <div className=" flex justify-evenly items-center bg-[#FFD7C0] ml-64 mr-64 h-auto rounded-lg shadow-2xl ">
        <div>
          <Lottie animationData={animation} style={style} className=" " />
        </div>
        <div className=" p-8 m-8 bg-orange-300 rounded-3xl shadow-2xl">
          <form action="" className=" grid max-w-xs  items-center  ">
            <h1 className="text-2xl">Name</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
            />
            <h1 className="text-2xl">Email</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
            />

            <h1 className="text-2xl">Password</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
            />
            <h1 className="text-2xl">Confirm Password</h1>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
            />

            <h1 className="text-2xl">Picture</h1>

            <input
              id="file_input"
              type="file"
              accept="image/*"
              value={img}
              onChange={postImg}
              className="block   focus:outline-none  p-2 m-3  text-sm   rounded-3xl cursor-pointer bg-gray-50 dark:text-gray-700  "
            />

            <button className=" bg-[#FD8D4E] m-5   rounded-lg "> SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

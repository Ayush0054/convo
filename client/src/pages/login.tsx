import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./login-image.json";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const style = {
    height: 600,
    width: 600,
  };
  return (
    <div>
      <h1 className=" text-7xl text-center p-10 ">Login</h1>
      <div className=" flex justify-evenly items-center bg-[#FFD7C0] ml-64 mr-64 h-auto rounded-lg shadow-2xl ">
        <div>
          <Lottie animationData={animation} style={style} className=" " />
        </div>
        <div className=" p-10 bg-orange-300 rounded-3xl shadow-2xl">
          <form action="" className=" grid max-w-xs  items-center  ">
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
            <button className=" bg-[#FD8D4E] m-5   rounded-lg "> Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

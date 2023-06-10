import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./login-image.json";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const style = {
    height: 500,
    width: 500,
  };
  return (
    <div>
      <h1 className=" text-7xl text-center p-10 ">Login</h1>
      <div className=" flex justify-center items-center">
        <div className=" flex justify-between items-center bg-[#FFD7C0] ml-64 mr-64  h-auto rounded-lg shadow-2xl  max-w-4xl ">
          <div>
            <Lottie animationData={animation} style={style} className=" " />
          </div>
          <div className=" p-10 mr-5">
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
              <button className=" bg-[#FD8D4E] m-5   rounded-lg  p-2 drop-shadow-xl">
                {" "}
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

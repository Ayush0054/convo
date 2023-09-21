import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./login-image.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginParams } from "../types/authTypes";
function Login() {
  const [loginData, setLoginData] = useState<LoginParams>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (field: string, value: string): void => {
    setLoginData((prevData) => {
      return { ...prevData, [field]: value };
    });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!loginData.email || !loginData.password) {
      alert("Please Enter Email and Password");
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://convo-aoru.onrender.com/api/user/login",
        { email: loginData.email, password: loginData.password },
        config
      );

      // console.log(JSON.stringify(data));
      alert("Login Successfull");
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chat");
      window.location.reload();
    } catch (error) {
      alert("Invalid Email or Password");
      setLoading(false);
    }
  };
  const style = {
    height: 500,
    width: 500,
  };
  return (
    <div>
      <h1 className=" text-7xl text-center p-10 ">Login</h1>
      <div className=" flex justify-center items-center">
        <div className=" flex justify-between items-center bg-[#FFD7C0] ml-64 mr-64  h-auto rounded-lg shadow-2xl  max-w-4xl ">
          <div className="hidden md:block">
            <Lottie animationData={animation} style={style} className=" " />
          </div>
          <div className=" md:p-10 p-5 mr-5">
            <form
              className=" grid max-w-xs  items-center  "
              onSubmit={submitHandler}
            >
              <h1 className="md:text-2xl text-lg">Email</h1>
              <input
                type="email"
                value={loginData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("email", e.target.value)
                }
                className=" bg-white border md:p-2 md:m-3 m-1 p-1  rounded-3xl focus:outline-none"
              />
              <h1 className="md:text-2xl text-lg">Password</h1>
              <input
                type="password"
                value={loginData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("password", e.target.value)
                }
                className=" bg-white border md:p-2 md:m-3 m-1 p-1  rounded-3xl focus:outline-none"
              />
              <button className=" bg-[#FD8D4E] m-5   rounded-lg  p-2 drop-shadow-xl">
                {" "}
                Login
              </button>
              <h1 className=" flex justify-center gap-2">
                New user ?{" "}
                <span
                  className=" text-orange-600 cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

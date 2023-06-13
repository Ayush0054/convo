import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./login-image.json";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast("Please Select an Image!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
        "/api/user/login",
        { email, password },
        config
      );

      // console.log(JSON.stringify(data));
      toast("Please Select an Image!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast("Please Select an Image!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
              <button
                className=" bg-[#FD8D4E] m-5   rounded-lg  p-2 drop-shadow-xl"
                onClick={submitHandler}
              >
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

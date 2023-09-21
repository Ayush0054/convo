import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Lottie from "lottie-react";
import animation from "./landing-anime.json";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
function Home() {
  const navigate = useNavigate();
  const style = {
    height: 600,
    width: 600,
  };
  const style2 = {
    height: 200,
    width: 200,
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo") as string);

    if (user) {
      navigate("/chat");
    }
  }, [navigate]);
  return (
    <div className=" bg-[#fce8dc] p-10 h-[100vh]  text-center ">
      <div className="flex items-center justify-center pr-2 ">
        <img src={logo} alt="" className="md:max-w-2 md:max-h-40 max-w-1 max-h-20" />
        <h1 className=" md:text-9xl text-3xl text-center">Convo</h1>
      </div>
      <div className="grid md:flex justify-between md:m-36   md:gap-20 gap-5">
        <div className="hidden md:block">
          <Lottie
            animationData={animation}
            style={style}
            className=" flex items-center justify-center "
          />
        </div>
        <div className="md:hidden flex justify-center">
          <Lottie
            animationData={animation}
            style={style2}
            className=" flex items-center justify-center "
          />
        </div>
        <div className="grid place-items-center">
          <h2 className=" md:text-6xl text-2xl  md:pb-10 pb-4 font-semibold">
            Unlock Conversations,Elevate Connections
            <span className="text-[#FD8D4E] "> Welcome to Convo,</span>
            Where Dialogue Flourishes!
          </h2>
          <div className=" flex rounded-xl ">
            <button
              onClick={() => navigate("/login")}
              className=" bg-[#FD8D4E] md:text-4xl text-xl rounded-l-lg  md:p-4 p-2 drop-shadow-xl hover:shadow-lg"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="  bg-[#fac8aa] md:text-4xl text-xl rounded-r-lg   md:p-4 p-2 drop-shadow-xl hover:shadow-lg"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

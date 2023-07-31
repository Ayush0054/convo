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
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo") as string);

    if (user) {
      navigate("/chat");
    }
  }, [navigate]);
  return (
    <div className=" bg-[#fce8dc] p-10 h-full ">
      <div className="flex items-center justify-center pr-2 ">
        <img src={logo} alt="" className="max-w-2 max-h-40" />
        <h1 className=" text-9xl text-center">Convo</h1>
      </div>
      <div className=" flex justify-between m-36 gap-20">
        <div className="hidden sm:block">
          <Lottie
            animationData={animation}
            style={style}
            className=" flex items-center justify-center "
          />
        </div>
        <div>
          <h2 className="text-6xl pb-10 font-semibold">
            Unlock Conversations,Elevate Connections
            <span className="text-[#FD8D4E] "> Welcome to Convo,</span>
            Where Dialogue Flourishes!
          </h2>
          <div className=" flex rounded-xl">
            <button
              onClick={() => navigate("/login")}
              className=" bg-[#FD8D4E] text-4xl rounded-l-lg   p-4 drop-shadow-xl hover:shadow-lg"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="  bg-[#fac8aa] text-4xl rounded-r-lg   p-4 drop-shadow-xl hover:shadow-lg"
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

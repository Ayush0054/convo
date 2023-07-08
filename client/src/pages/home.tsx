import React, { useEffect } from "react";
import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo") as string);

    if (user) {
      navigate("/chat");
    }
  }, [navigate]);
  return (
    <div className=" ">
      Home
      <div>
        <button
          onClick={() => navigate("/login")}
          className=" bg-[#FD8D4E] m-5   rounded-lg  p-2 drop-shadow-xl"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="  bg-[#fac8aa] m-5   rounded-lg  p-2 drop-shadow-xl"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Home;

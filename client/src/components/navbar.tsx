import React from "react";
import logo from "./logo.png";
import { ChatState } from "../context/chatProvider";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const { user } = ChatState();
  const lougout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className="bg-[#FD8D4E] min-w-full max-h-xl flex justify-between p-3 shadow-xl text-black">
      <div className=" flex items-center  pr-2 rounded-xl shadow-2xl ">
        <img src={logo} alt="" className="max-w-2 max-h-10" />
        <h1 className=" text-2xl font-semibold">CONVO</h1>
      </div>
      <div className=" flex  gap-10 items-center">
        <h1 className=" text-3xl font-medium">Ayush</h1>
        <img src="" alt="your pic" />
        <button onClick={lougout} className=" text-3xl font-medium">
          logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;

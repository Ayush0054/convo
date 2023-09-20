import React from "react";
import logo from "./logo.png";
import { ChatState } from "../context/chatProvider";
import { useNavigate } from "react-router-dom";
import UpdatePfp from "./modal/updatepfp";
function Navbar({ fetchAgain, setFetchAgain }: { fetchAgain: any; setFetchAgain: any;}) {
  const navigate = useNavigate();
  const { user } = ChatState();
  const lougout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className="bg-[#FD8D4E] hover:bg-[#fdae80]  max-h-xl grid justify-items-center md:flex md:justify-between  rounded-xl md:p-3 md:pb-5 md:pt-5 p-1 pb-3 pt-3 shadow-xl text-black uppercase">
      <div className=" flex items-center  pr-2  ">
        <img src={logo} alt="" className="hidden md:block max-w-2 max-h-14" />
        <h1 className=" hidden md:block text-4xl font-semibold">CONVO</h1>
      </div>
      <div className=" gap-4 md:gap-10 items-center grid justify-items-center md:flex md:justify-between">
        <h1 className=" text-4xl font-medium">{user.name}</h1>
   
        <UpdatePfp fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        <button onClick={lougout} className=" text-4xl font-medium">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;

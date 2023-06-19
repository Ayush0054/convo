import React from "react";
import logo from "./logo.png";
function Navbar() {
  return (
    <div className="bg-[#FD8D4E] min-w-full max-h-xl flex justify-between p-3 shadow-xl text-black">
      <div className=" flex items-center  pr-2 rounded-xl shadow-2xl ">
        <img src={logo} alt="" className="max-w-2 max-h-10" />
        <h1 className=" text-2xl font-semibold">CONVO</h1>
      </div>
      <div className=" flex  gap-10 items-center">
        <h1 className=" text-3xl font-medium">Ayush</h1>
        <img src="" alt="your pic" />
        <h1 className=" text-3xl font-medium">logout</h1>
        <h1 className=" text-3xl font-medium">create Group</h1>
      </div>
    </div>
  );
}

export default Navbar;

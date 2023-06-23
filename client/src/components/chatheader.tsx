import React from "react";
import plus from "./plus.png";
function Chatheader() {
  return (
    <div className=" text-black flex m-5 justify-between">
      <div className=" flex items-center gap-3">
        <h1 className="text-5xl  ">Contacts</h1>
        <button>
          <img src={plus} alt="" />
        </button>
      </div>
      <div className=" flex  items-center">
        <input
          type="text"
          placeholder="Search/Add users to create group"
          className="shadow bg-[#FBF3EF] flex p-2 outline-none w-[1000px]  "
        />

        <button className="shadow bg-[#FD8D4E] p-2 m-2 ">Create Group</button>
      </div>
    </div>
  );
}

export default Chatheader;

import React, { useState } from "react";
import plus from "./plus.png";
import { ChatState } from "../context/chatProvider";
import GroupChatModal from "./modal/groupChatModal";

function Chatheader() {
  const { search, setSearch } = ChatState();
  const [click, setClick] = useState(search);
  const handleClick = () => {
    setClick(true);
    setSearch(click);
    if (click) {
      setClick(false);
    }
  };
  return (
    <div className=" text-black flex m-5 justify-between">
      <div className=" flex items-center gap-3">
        <h1 className="text-5xl  ">Contacts</h1>
        <button onClick={handleClick}>
          <img src={plus} alt="" />
        </button>
      </div>
      <form className=" flex  items-center">
        {/* <input
          type="text"
          placeholder="Search in chat or group"
          className="shadow bg-[#fcefe9] flex p-2 outline-none w-[1000px]  "
        /> */}
        <GroupChatModal />
        {/* <button className="shadow bg-[#FD8D4E] p-2 m-2 ">Create Group</button> */}
      </form>
    </div>
  );
}

export default Chatheader;

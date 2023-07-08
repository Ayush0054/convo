import React from "react";
import logo from "./logo.png";

import { ChatState } from "../context/chatProvider";
function ResultContact({ user, handleFunction }) {
  const { setSearch } = ChatState();
  const handleClick = async () => {
    setSearch(false);
  };
  return (
    <div onClick={handleClick}>
      <div
        onClick={handleFunction}
        className="shadow-contact bg-[#fcefe9] flex pl-5 pr-5 pt-2 pb-2 mt-8 mb-8  gap-5 hover:bg-[#f8d6ba] hover:shadow-xl"
      >
        <img src={user.picture} alt="hi" className=" max-h-10 rounded-full " />
        <div>
          <h1 className=" text-lg font-semibold text-[#FD8D4E]">
            {user.name}{" "}
          </h1>
          <h1 className=" text-lg font-normal text-neutral-950">
            {user.email}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ResultContact;

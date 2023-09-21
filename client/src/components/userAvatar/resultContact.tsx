import React from "react";
import logo from "./logo.png";

import { ChatState } from "../../context/chatProvider";
function ResultContact({
  user,
  handleFunction,
}: {
  user: any;
  handleFunction: any;
}) {
  const { setSearch } = ChatState();
  const handleClick = async () => {
    setSearch(false);
  };
  return (
    <div onClick={handleClick} className="md:w-full ">
      <div
        onClick={handleFunction}
        className=" rounded-xl border border-gray-300 bg-[#fcefe9] flex md:pl-5 md:pr-5 pl-2 pr-2 pt-2 pb-2 md:mt-8 md:mb-8 mb-3 mt-3  gap-3 hover:bg-[#f8d6ba] "
      >
        <img src={user.picture} alt="hi" className=" hidden md:block w-10 h-10 rounded-full " />
        <div>
          <h1 className=" md:text-lg text-md font-semibold text-[#FD8D4E]">
            {user.name}{" "}
          </h1>
          <h1 className=" md:text-lg text-sm font-normal text-neutral-950">
            {user.email}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ResultContact;

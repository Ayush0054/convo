import React, { useState } from "react";
import plus from "./plus.png";
import { ChatState } from "../context/chatProvider";
import GroupChatModal from "./modal/groupChatModal";

function Chatheader( {showContact, setShowContact} : {showContact:any, setShowContact:any}) {
  const { search, setSearch } = ChatState();
  const [click, setClick] = useState(search);
  const handleClick = () => {
    setClick(true);
    setSearch(click);
    if (click) {
      setClick(false);
    }
  };
 const handleShowContact = () => {
    setShowContact(true);
    if(showContact){
      setShowContact(false)
    }

 }
  return (
    <div className=" text-black flex mt-5 mb-5 justify-between">
      <div className=" flex items-center gap-3">
        {/* <h1 className="hidden md:block text-5xl  ">Contacts</h1> */}
        <button onClick={handleClick} className="border border-gray-100 rounded-xl bg-[#FD8D4E] p-2 m-2 ">
         Add Contact
        </button>
        <button onClick={handleShowContact} className="  border border-gray-100 rounded-xl bg-[#FD8D4E] p-2 m-2 ">
        {
          showContact ? "Hide Contact" : "Show Contact"
        
        }
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

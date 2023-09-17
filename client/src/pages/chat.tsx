import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Chatheader from "../components/chatheader";

import ChatContact  from "../components/chatContact";
import ChatBox from "../components/box/chatBox";
import SearchContact from "../components/searchContact";
import { ChatState } from "../context/chatProvider";

function Chat() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { search, user } = ChatState();


  return (
    <div className="   ">
      <Navbar fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      <Chatheader  />
      {user && (
        <div className=" grid justify-items-center place-items-center  md:flex md:justify-between ">
       

          

          {search ? <SearchContact /> : <ChatContact fetchAgain={fetchAgain}  />}
      
        
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </div>
      )}
    </div>
  );
}

export default Chat;

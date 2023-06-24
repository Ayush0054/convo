import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Chatheader from "../components/chatheader";

import ChatContact from "../components/chatContact";
import ChatBox from "../components/chatBox";
import SearchContact from "../components/searchContact";

function Chat() {
  return (
    <div>
      <Navbar />
      <Chatheader />
      <SearchContact />
      <div className="flex justify-between">
        <ChatContact />
        <ChatBox />
      </div>
    </div>
  );
}

export default Chat;

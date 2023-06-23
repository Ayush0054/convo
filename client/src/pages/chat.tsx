import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Chatheader from "../components/chatheader";

import ChatContact from "../components/chatContact";
import ChatBox from "../components/chatBox";

function Chat() {
  return (
    <div>
      <Navbar />
      <Chatheader />
      <div className="flex justify-between">
        <ChatContact />
        <ChatBox />
      </div>
    </div>
  );
}

export default Chat;

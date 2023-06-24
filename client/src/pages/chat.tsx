import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Chatheader from "../components/chatheader";

import ChatContact from "../components/chatContact";
import ChatBox from "../components/chatBox";
import SearchContact from "../components/searchContact";
import { ChatState } from "../context/chatProvider";

function Chat() {
  const { search } = ChatState();

  return (
    <div>
      <Navbar />
      <Chatheader />
      <div className="flex justify-between">
        {search ? <SearchContact /> : <ChatContact />}
        <ChatBox />
      </div>
    </div>
  );
}

export default Chat;

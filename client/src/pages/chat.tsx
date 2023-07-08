import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Chatheader from "../components/chatheader";

import ChatContact from "../components/chatContact";
import ChatBox from "../components/chatBox";
import SearchContact from "../components/searchContact";
import { ChatState } from "../context/chatProvider";

function Chat() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { search, user } = ChatState();

  return (
    <div>
      <Navbar />
      <Chatheader />
      {user && (
        <div className="flex justify-between">
          {search ? <SearchContact /> : <ChatContact fetchAgain={fetchAgain} />}
          <ChatBox />
        </div>
      )}
    </div>
  );
}

export default Chat;

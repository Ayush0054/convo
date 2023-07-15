import React, { useEffect, useState } from "react";
import { ChatState } from "../../context/chatProvider";
import axios from "axios";
import SingleChat from "./singleChat";

function ChatBox({
  fetchAgain,
  setFetchAgain,
}: {
  fetchAgain: any;
  setFetchAgain: any;
}) {
  const { selectedChat, user } = ChatState();
  return (
    <div className="shadow bg-[#FBF3EF] p-3 mr-10 rounded-lg ">
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </div>
  );
}

export default ChatBox;

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
    <div className=" p-3  rounded-3xl  max-w-5xl  ">
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </div>
  );
}

export default ChatBox;

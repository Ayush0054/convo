import Contact from "./userAvatar/contact";
import React, { useEffect, useState } from "react";
import { ChatState } from "../context/chatProvider";
import axios from "axios";
import { getSender } from "../config/chatLogics";

function ChatContact({ fetchAgain }: { fetchAgain: any }) {
  const [loggedUser, setLoggedUser] = useState<any>({});
  const { user, selectedChat, setSelectedChat, chats, setChats, setSearch } =
    ChatState();
  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/api/chat/`,
        config
      );
      console.log(data);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo") as string));
    console.log(loggedUser);

    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);
  return (
    <div>
      {chats ? (
        <div>
          {chats.map((chat: any) => (
            <div
              key={chat._id}
              onClick={() => setSelectedChat(chat)}
              className={`shadow-contact ${
                selectedChat === chat ? "bg-[#fcc99f]" : "bg-[#fcefe9]"
              } flex pl-5 pr-5 pt-2 pb-2 m-8 gap-5 hover:bg-[#f8d6ba] hover:shadow-xl`}
            >
              <img
                src={chat.users[1].picture}
                alt=""
                className=" w-10 h-10 rounded-full"
              />
              <h1>
                {" "}
                {!chat.isGroupChat
                  ? getSender(loggedUser, chat.users)
                  : chat.chatName}
              </h1>
              {chat.latestMessage && (
                <div>
                  <h1 className=" text-lg font-semibold text-[#FD8D4E]">
                    {chat.latestMessage.sender.name} :
                  </h1>
                  <h2>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>no chats</div>
      )}
    </div>
  );
}

export default ChatContact;

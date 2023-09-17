import Contact from "./userAvatar/contact";
import React, { useEffect, useState } from "react";
import { ChatState } from "../context/chatProvider";
import axios from "axios";
import { getSender } from "../config/chatLogics";
import ScrollableFeed from "react-scrollable-feed";

function ChatContact({ fetchAgain }: { fetchAgain: any}) {
  const [loggedUser, setLoggedUser] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const { user, selectedChat, setSelectedChat, chats, setChats, setSearch } =
    ChatState();
  const fetchChats = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `https://convo-aoru.onrender.com/api/chat/`,
        config
      );
      console.log(data);
      setChats(data);
      setLoading(false);
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
  const handleClick = (chat:any) => {
    setSelectedChat(chat);
    // showContact(false);
  }
  return (
    <div className="  ">
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div  className=" flex object-contain h-[650px]  mb-5      "
        style={{ scrollbarWidth: "none", flexDirection: "column" }} >
          {chats ? (
                  // @ts-ignore
            <ScrollableFeed className="no-scrollbar " >
               
              {chats.map((chat: any) => (
                <div
                  key={chat._id}
                  onClick={() => handleClick(chat)}
                  className={` rounded-xl border border-gray-300 ${
                    selectedChat === chat ? "bg-[#fcc99f] " : "bg-[#fcefe9]"
                  } flex pl-5 pr-5 pt-2 pb-2 mt-5 mb-5  w-full gap-5 hover:bg-[#f8d6ba] `}
                >
                  {!chat.isGroupChat && (
                    <img
                      src={chat.users[1].picture}
                      alt=""
                      className="hidden md:block w-10 h-10 rounded-full "
                    />
                  )}
                  <div>
                    <h1 className=" text-2xl font-medium">
                      {" "}
                      {!chat.isGroupChat
                        ? getSender(loggedUser, chat.users)
                        : chat.chatName}
                    </h1>
                    {chat.latestMessage && (
                      <div className=" flex items-center">
                        {/* <h1 className=" text-xl font-semibold text-[#FD8D4E]">
                          {user==!chat.latestMessage.sender.name || chat.latestMessage.sender.name}
                        </h1> */}
                        <h2 className=" p-2 text-lg font-semibold text-[#FD8D4E]">
                          {chat.latestMessage.content.length > 50
                            ? chat.latestMessage.content.substring(0, 20) +
                              "..."
                            : chat.latestMessage.content}
                        </h2>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </ScrollableFeed>
          ) : (
            <div>no chats</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatContact;

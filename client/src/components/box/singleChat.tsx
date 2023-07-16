import React, { useEffect, useState } from "react";
import { ChatState } from "../../context/chatProvider";
import { getSender, getSenderFull } from "../../config/chatLogics";
import ProfileModal from "../modal/profileModal";
import UpdateGroupChatModal from "../modal/updateGroupChatModal";
import Lottie from "lottie-react";
import animation from "./chat-anime.json";
import sndbtn from "./Vector.png";
import axios from "axios";
import ScrollableChat from "./scrollableChat";
function SingleChat({
  fetchAgain,
  setFetchAgain,
}: {
  fetchAgain: any;
  setFetchAgain: any;
}) {
  const style = {
    height: 600,
    width: 600,
  };
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const { selectedChat, user, setSelectedChat } = ChatState();

  const sendMessage = async (event: any) => {
    if (event.key === "Enter" && newMessage) {
      event.preventDefault();
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "http://localhost:5000/api/message",
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          config
        );
        console.log(data);
        setSelectedChat(selectedChat);
        setMessages([...messages, data]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchMessages = async () => {
    if (!selectedChat) return;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/api/message/${selectedChat._id}`,
        config
      );
      console.log(messages);

      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);

  const typingHandler = (e: any) => {
    setNewMessage(e.target.value);
  };
  return (
    <div className=" flex justify-center items-center text-center">
      {selectedChat ? (
        <div>
          <div className="shadow bg-[#FBF3EF]">
            {!selectedChat.isGroupChat ? (
              <div className="flex justify-between  items-center p-3 border-b-2 border-gray-300">
                <h1 className=" text-2xl ">
                  {getSender(user, selectedChat.users)}
                </h1>
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </div>
            ) : (
              <div className="flex justify-between  items-center p-3 border-b-2 border-gray-300">
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal
                  chat={selectedChat}
                  setFetchAgain={setFetchAgain}
                  fetchAgain={fetchAgain}
                  fetchMessages={fetchMessages}
                />
              </div>
            )}
            <div className=" p-10 ">
              {loading ? (
                <div>
                  <h1 className=" text-4xl">Loading</h1>
                  <Lottie
                    animationData={animation}
                    style={style}
                    className=" "
                  />
                </div>
              ) : (
                <div
                  className=" flex object-contain   h-[600px]   "
                  style={{ scrollbarWidth: "none", flexDirection: "column" }}
                >
                  <ScrollableChat messages={messages} />
                </div>
              )}
            </div>
          </div>
          <form
            onKeyDown={sendMessage}
            onClick={sendMessage}
            className=" flex justify-between items-center gap-5"
          >
            <input
              type="text"
              className="shadow bg-[#fcefe9] mt-5 flex p-5 outline-none w-[1000px]  "
              placeholder="Enter a Message"
              onChange={typingHandler}
              value={newMessage}
            />
            <button>
              <img src={sndbtn} alt="" className=" mt-5 " />
            </button>
          </form>
        </div>
      ) : (
        <div className=" text-6xl pt-72 pb-72 text-center flex justify-center  ">
          Click on a user to start chatting
        </div>
      )}
    </div>
  );
}

export default SingleChat;

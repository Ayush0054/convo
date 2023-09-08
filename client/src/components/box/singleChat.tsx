import React, { useEffect, useState } from "react";
import { ChatState } from "../../context/chatProvider";
import { getSender, getSenderFull } from "../../config/chatLogics";
import ProfileModal from "../modal/profileModal";
import UpdateGroupChatModal from "../modal/updateGroupChatModal";
import Lottie from "lottie-react";
import animation from "./message.json";
import loadinganimation from "./loading.json";
import sndbtn from "./Vector.png";
import axios from "axios";
import ScrollableChat from "./scrollableChat";
import { io } from "socket.io-client";
// @ts-ignore
const ENDPOINT = "http://localhost:5000";
var socket: any, selectedChatCompare: any;
function SingleChat({
  fetchAgain,
  setFetchAgain,
}: {
  fetchAgain: any;
  setFetchAgain: any;
}) {
  const style = {
    height: 370,
    width: 300,
  };
  const style2 = {
    height: 50,
    width: 50,
  };
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const { selectedChat, user, setSelectedChat } = ChatState();
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIstyping] = useState(false);
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.once("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIstyping(true));
    socket.on("stop typing", () => setIstyping(false));
  }, []);
  const sendMessage = async (event: any) => {
    if (event.key === "Enter" && newMessage) {
      event.preventDefault();
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        // @ts-ignore
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
        socket.emit("new message", data);
        // setSelectedChat(selectedChat);
        // @ts-ignore
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
      socket.emit("join room", selectedChat._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved: any) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
      } else {
        // @ts-ignore
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  const typingHandler = (e: any) => {
    setNewMessage(e.target.value);
    if (!socketConnected) return;
    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime: any = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timNow = new Date().getTime();
      var timeDiff = timNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };
  return (
    <div className=" flex justify-center items-center text-center rounded-3xl ">
      {selectedChat ? (
        <div>
          <div className=" border border-gray-300 bg-[#FBF3EF] rounded-lg h-3/5">
            {!selectedChat.isGroupChat ? (
              <div className="flex justify-between  items-center p-3 border-b-2 border-gray-300">
                <h1 className=" text-2xl uppercase font-semibold  ">
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
                <div className=" grid items-center ">
                  <h1 className=" text-4xl">Loading</h1>
                  <Lottie
                    animationData={animation}
                    style={style}
                    className=" flex items-center justify-center "
                  />
                </div>
              ) : (
                <div
                  className=" flex object-contain   h-[370px]   "
                  style={{ scrollbarWidth: "none", flexDirection: "column" }}
                >
                  <ScrollableChat messages={messages} />
                </div>
              )}
            </div>
            {istyping ? (
              <div>
                {" "}
                <Lottie
                  animationData={loadinganimation}
                  style={style2}
                  className=" "
                />
              </div>
            ) : (
              <div></div>
            )}
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
            {/* <button>
              <img src={sndbtn} alt="" className=" mt-5 " />
            </button> */}
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

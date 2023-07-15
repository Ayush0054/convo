import React from "react";
import { ChatState } from "../../context/chatProvider";
import { getSender, getSenderFull } from "../../config/chatLogics";
import ProfileModal from "../modal/profileModal";
import UpdateGroupChatModal from "../modal/updateGroupChatModal";

function SingleChat({
  fetchAgain,
  setFetchAgain,
}: {
  fetchAgain: any;
  setFetchAgain: any;
}) {
  const { selectedChat, user, setSelectedChat } = ChatState();
  return (
    <div className=" flex justify-center items-center text-center">
      {selectedChat ? (
        <div>
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
              />
            </div>
          )}
          <div className=" pt-72 p-72 ">
            {/* messages */}
            hi
          </div>
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

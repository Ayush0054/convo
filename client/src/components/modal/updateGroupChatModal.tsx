import React, { useState } from "react";
import { ChatState } from "../../context/chatProvider";

function UpdateGroupChatModal({
  chat,
  setFetchAgain,
}: {
  chat: any;
  setFetchAgain: any;
}) {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState<any>();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameLoading, setRenameLoading] = useState(false);
  const { user, chats, setSelectedChat, selectedChat } = ChatState();
  return (
    <>
      <button
        className="shadow bg-[#FD8D4E] p-2 m-2 hover:shadow-lg"
        onClick={() => setShowModal(true)}
      >
        {" "}
        Update
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
                <h1>{selectedChat.chatName}</h1>
                <input
                  type="text"
                  className=" p-3 outline-orange-500 bg-orange-50 rounded-sm "
                />
                <button
                  className="  bg-[#FD8D4E] p-2 m-2 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  // onClick={handleSubmit}
                >
                  Update Group
                </button>
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default UpdateGroupChatModal;

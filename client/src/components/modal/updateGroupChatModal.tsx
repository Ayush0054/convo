import React, { useState } from "react";
import { ChatState } from "../../context/chatProvider";
import UserIcon from "../userAvatar/usericon";
import axios from "axios";
import ResultContact from "../userAvatar/resultContact";
import ScrollableFeed from "react-scrollable-feed";

function UpdateGroupChatModal({
  chat,
  setFetchAgain,
  fetchAgain,
  fetchMessages,
}: {
  chat: any;
  setFetchAgain: any;
  fetchMessages: any;
  fetchAgain: any;
}) {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState<any>();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameLoading, setRenameLoading] = useState(false);
  const { user, chats, setSelectedChat, selectedChat } = ChatState();

  const handleRename = async () => {
    if(selectedChat.groupAdmin._id !== user._id){
      alert("only admin can rename");
      return;
    }
    if (!groupName) {
      alert("please enter group name");
      return;
    }
    try {
      setRenameLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        `https://convo-aoru.onrender.com/api/chat/rename`,
        {
          chatId: selectedChat._id,
          chatName: groupName,
        },
        config
      );
      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setShowModal(false);
      setRenameLoading(false);
      alert("group updated");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async (query: any) => {
    setSearch(query);
    if (!query) {
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `https://convo-aoru.onrender.com/api/user?search=${search}`,
        config
      );
      console.log(data);

      setLoading(false);
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddUser = async (userToAdd: any) => {
    if (selectedChat.users.find((u: any) => u._id === userToAdd._id)) {
      alert("user already added");
      return;
    }
    if (selectedChat.groupAdmin._id !== user._id) {
      alert("only admin can add users");
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        "https://convo-aoru.onrender.com/api/chat/groupadd",
        {
          chatId: selectedChat._id,
          userId: userToAdd._id,
        },
        config
      );
      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (userToRemove: any) => {
    if (
      selectedChat.groupAdmin._id !== user._id &&
      user._id !== userToRemove._id
    ) {
      alert("only admin can remove users");
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        "https://convo-aoru.onrender.com/api/chat/groupremove",
        {
          chatId: selectedChat._id,
          userId: userToRemove._id,
        },
        config
      );
      userToRemove._id ===   user._id
        ? setSelectedChat("")
        : setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      fetchMessages();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleDelete = async () => {
  //     if( selectedChat.groupAdmin._id !== user._id ){
  //         alert("only admin can delete group");
  //         return;
  //     }
  //     try{
  //       setLoading(true);
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //         },
  //       };
  //       const { data } = await axios.put(
  //         "http://localhost:5000/api/chat/deletegroup",
  //         {
  //           chatId: selectedChat._id
  //         },
  //         config
  //       );
  //       setSelectedChat(data)
  //       setFetchAgain(!fetchAgain);
  //       setShowModal(false);
  //       setLoading(false);
  //     }catch (error) {
  //       console.log(error);
  //     }
  // }
  // const handleDelete = async () => {
  //   if (selectedChat.groupAdmin._id !== user._id) {
  //     alert("Only admin can delete the group");
  //     return;
  //   }
  
  //   try {
  //     setLoading(true);
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     };
  
  //     // Make a DELETE request to your server API
  //     const response = await axios.delete(
  //       `http://localhost:5000/api/chat/deletegroup`,
  //       {
  //         headers: config.headers,
  //         data: {
  //           chatId: selectedChat._id, // Send chatId in the request body
  //         },
  //       }
  //     );
  
  //     // Handle the response from the server

  //       setSelectedChat(null);  
  //       setFetchAgain(!fetchAgain); 
  //       setShowModal(false); 
    

  //       console.log(response.data); 
  
  
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);

  //   }
  // }
  return (
    <>
      <button
        className="rounded-lg border border-gray-300 bg-[#FD8D4E] p-2 m-2 "
        onClick={() => setShowModal(true)}
      >
        {" "}
        Update
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:w-full w-96 bg-white outline-none focus:outline-none md:p-10 p-5 ">
                <h1 className="  font-bold"> Group Name: {selectedChat.chatName}</h1>
                <h1 className=" text-orange-500 font-semibold"> Group Admin: {selectedChat.groupAdmin.name}</h1>
                <div className=" flex justify-center">
                  {selectedChat.users.map((u: any) => (
                    <div className=" flex flex-wrap justify-center items-center">
                      <UserIcon
                        key={u._id}
                        user={u}
                        // admin={selectedChat.groupAdmin}
                        handleFunction={() => handleRemove(u)}
                      />
                    </div>
                  ))}
                </div>
                <div className=" ">
                  <form action="" className=" grid md:flex justify-center items-center">
                    <input
                      type="text"
                      className=" p-3 outline-orange-500 bg-orange-50 rounded-sm "
                      placeholder="Enter Group Name"
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                    <button
                      className="  bg-[#FD8D4E] p-2 m-2 text-white font-bold uppercase text-sm md:px-6 md:py-3 px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleRename}
                    >
                      Update Group
                    </button>
                  </form>
                  <form action="" className=" p-2">
                    <input
                      type="text"
                      placeholder="Add Users eg:joss,naman"
                      className=" p-3 outline-orange-500 bg-orange-50 rounded-sm"
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </form>
                  <div
        className=" flex object-contain md:h-[450px] h-[250px]    "
        style={{ scrollbarWidth: "none", flexDirection: "column" }}
      >
                 {

                   // @ts-ignore
             <ScrollableFeed className="no-scrollbar">
                  {loading ? (
                    <div> loading</div>
                  ) : (
                    searchResults
                    ?.slice(0, 5)
                    .map((user: any) => (
                        <ResultContact
                        key={user._id}
                        user={user}
                        handleFunction={() => handleAddUser(user)}
                        />
                        ))
                        )}
                  </ScrollableFeed>
                      }
                      </div>
                </div>

                <button
                  onClick={() => handleRemove(user)}
                  className="  bg-[#f52b11] p-2 m-2 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Leave Group
                </button>
                {/* {
                  selectedChat.groupAdmin._id === user._id &&

                  <button
                  onClick={() => handleDelete()}
                  className="  bg-[#be3725] p-2 m-2 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                 Delete Group
                </button>
                } */}
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

import React, { useState } from "react";
import { ChatState } from "../../context/chatProvider";
import axios from "axios";
import ResultContact from "../userAvatar/resultContact";
import UserIcon from "../userAvatar/usericon";
//ignore ts error
export default function GroupChatModal() {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState<any>();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, chats, setChats } = ChatState();

  const handleSubmit = async () => {
    if (!groupName || !selectedUsers) {
      alert("please enter group name and select users");
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `https://convo-aoru.onrender.com/api/chat/group`,
        {
          name: groupName,
          users: JSON.stringify(selectedUsers.map((u: any) => u._id)),
        },
        config
      );
      setChats([data, ...chats]);
      alert("group created");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (userToDelete: any) => {
    setSelectedUsers(
      selectedUsers.filter((u: any) => u._id !== userToDelete._id)
    );
  };
  const handleGroup = (userToAdd: any) => {
    // @ts-ignore
    if (selectedUsers.includes(userToAdd)) {
      alert("user already added");
      return;
    }
    // @ts-ignore
    setSelectedUsers([...selectedUsers, userToAdd]);
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
      // console.log(data);

      setLoading(false);
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        className=" rounded-lg border border-gray-300 bg-[#FD8D4E] p-2 m-2 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Group
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start  justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold   ">
                    Create Group Chat
                  </h3>
                </div>
                {/*body*/}

                <div className="relative p-6 grid gap-3 ">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Chat Name"
                      className=" p-3 outline-orange-500 bg-orange-50 rounded-sm "
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </form>
                  <form action="">
                    <input
                      type="text"
                      placeholder="Add Users eg:joss,naman"
                      className=" p-3 outline-orange-500 bg-orange-50 rounded-sm"
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </form>
                  {selectedUsers.map((user: any) => (
                    <div className=" flex flex-wrap justify-center items-center">
                      <UserIcon
                        key={user._id}
                        user={user}
                        handleFunction={() => handleDelete(user)}
                      />
                    </div>
                  ))}
                  {loading ? (
                    <div> loading</div>
                  ) : (
                    searchResults
                      ?.slice(0, 5)
                      .map((user: any) => (
                        <ResultContact
                          key={user._id}
                          user={user}
                          handleFunction={() => handleGroup(user)}
                        />
                      ))
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="  bg-[#FD8D4E] p-2 m-2 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create Group
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

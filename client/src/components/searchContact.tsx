import React, { useState } from "react";
import Contact from "./contact";
import { ChatState } from "../context/chatProvider";
import axios from "axios";
import ResultContact from "./resultContact";

function SearchContact() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [selectedChat , setSelectedChat] = useState<any>(null);
  const { user, setSelectedChat, chats, setChats } = ChatState();
  const handleSearch = async () => {
    if (!search) {
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/api/user?search=${search}`,
        config
      );
      setSearchResults(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const accessChat = async (userId: any) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/api/chat/`,
        { userId },
        config
      );
      console.log(data);

      if (!chats.find((c: any) => c._id === data._id))
        setChats([data, ...chats]);
      setSelectedChat(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" m-8">
      <div className=" flex gap-5">
        <input
          type="text"
          className="shadow bg-[#fcefe9] flex p-2 outline-none   "
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <button onClick={handleSearch} className="shadow bg-[#FD8D4E] p-2 m-2 ">
          Search
        </button>
      </div>
      {searchResults?.map((user: any) => (
        <ResultContact
          key={user._id}
          user={user}
          handleFunction={() => accessChat(user._id)}
        />
      ))}
    </div>
  );
}

export default SearchContact;

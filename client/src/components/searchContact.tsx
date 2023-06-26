import React, { useState } from "react";
import Contact from "./contact";
import { ChatState } from "../context/chatProvider";
import axios from "axios";

function SearchContact() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = ChatState();
  const handleSearch = async () => {
    if (!search) {
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      setSearchResults(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        type="text"
        className=" bg-black"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <button
      // onClick={handleSearch}
      ></button>
      <Contact />
    </div>
  );
}

export default SearchContact;

import React, { useState } from "react";
import Contact from "./contact";
// import { ChatState } from "../context/chatProvider";

function SearchContact() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <input type="text" className=" bg-black" />
      <Contact />
    </div>
  );
}

export default SearchContact;

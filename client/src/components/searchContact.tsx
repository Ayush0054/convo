import React, { useState } from "react";
// import { ChatState } from "../context/chatProvider";

function SearchContact() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default SearchContact;

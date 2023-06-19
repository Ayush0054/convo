import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Chatheader from "../components/chatheader";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo") as string);

    if (user) {
      navigate("/chat");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Chatheader />
    </div>
  );
}

export default Chat;

import React, { useEffect } from "react";
import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo") as string);

    if (user) {
      navigate("/chat");
    }
  }, [navigate]);
  return <div className=" "></div>;
}

export default Home;

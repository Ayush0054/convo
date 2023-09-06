import React from "react";
import logo from "./logo.png";
import { ChatState } from "../context/chatProvider";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Dropdown } from "rsuite";
import UpdatePfp from "./modal/updatepfp";
function Navbar() {
  const navigate = useNavigate();
  const { user } = ChatState();
  const lougout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className="bg-[#FD8D4E] min-w-full max-h-xl flex justify-between p-3 pb-5 pt-5 shadow-xl text-black uppercase">
      <div className=" flex items-center  pr-2  ">
        <img src={logo} alt="" className="max-w-2 max-h-14" />
        <h1 className=" text-4xl font-semibold">CONVO</h1>
      </div>
      <div className=" flex  gap-10 items-center">
        <h1 className=" text-4xl font-medium">{user.name}</h1>
        {/* <img
          src={user.picture}
          alt="your pic"
          className=" w-10 h-10 rounded-full "
        /> */}
        <UpdatePfp  />
        <button onClick={lougout} className=" text-4xl font-medium">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;

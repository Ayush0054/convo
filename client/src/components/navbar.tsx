import React from "react";
import logo from "./logo.png";
import { ChatState } from "../context/chatProvider";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Navbar() {
  const { notifications, setNotifications } = ChatState();
  const navigate = useNavigate();
  const { user } = ChatState();
  const lougout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className="bg-[#FD8D4E] min-w-full max-h-xl flex justify-between p-3 shadow-xl text-black">
      <div className=" flex items-center  pr-2 rounded-xl shadow-2xl ">
        <img src={logo} alt="" className="max-w-2 max-h-10" />
        <h1 className=" text-2xl font-semibold">CONVO</h1>
      </div>
      <div className=" flex  gap-10 items-center">
        <button
          id="dropdownUserAvatarButton"
          data-dropdown-toggle="dropdownAvatar"
          className="flex mx-3 text-sm  md:mr-0 "
          type="button"
        >
          <NotificationsIcon />
        </button>
        <div
          id="dropdownAvatar"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          {!NotificationsIcon.length && "no new message"}
        </div>

        <h1 className=" text-3xl font-medium">{user.name}</h1>
        <img
          src={user.picture}
          alt="your pic"
          className=" w-10 h-10 rounded-full "
        />
        <button onClick={lougout} className=" text-3xl font-medium">
          logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;

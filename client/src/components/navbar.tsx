import React from "react";
import logo from "./logo.png";
import { ChatState } from "../context/chatProvider";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Dropdown } from "rsuite";
import UpdatePfp from "./modal/updatepfp";
function Navbar({ fetchAgain, setFetchAgain }: { fetchAgain: any; setFetchAgain: any;}) {
  const navigate = useNavigate();
  const { user } = ChatState();
  const lougout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className="bg-[#FD8D4E] hover:bg-[#fdae80]  max-h-xl flex justify-between  rounded-xl p-3 pb-5 pt-5 shadow-xl text-black uppercase">
      <div className=" flex items-center  pr-2  ">
        <img src={logo} alt="" className="max-w-2 max-h-14" />
        <h1 className=" text-4xl font-semibold">CONVO</h1>
      </div>
      <div className=" flex  gap-10 items-center">
        <h1 className=" text-4xl font-medium">{user.name}</h1>
   
        <UpdatePfp fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        <button onClick={lougout} className=" text-4xl font-medium">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;

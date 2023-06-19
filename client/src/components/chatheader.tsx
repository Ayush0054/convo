import React from "react";

function Chatheader() {
  return (
    <div className=" text-black flex m-5 justify-between">
      <h1 className="text-3xl ">Contacts</h1>
      <div className=" flex ">
        <div className=" shadow bg-[#fdf0ea] flex p-2 ">
          <input type="text" className="  " />
        </div>
        <div className="shadow bg-[#FD8D4E] p-2 m-2 ">
          <h1>create</h1>
        </div>
      </div>
    </div>
  );
}

export default Chatheader;

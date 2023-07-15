import React from "react";
import logo from "./logo.png";
function Contact() {
  return (
    <div className="shadow-contact bg-[#fcefe9] flex pl-5 pr-5 pt-2 pb-2 m-8 gap-5 hover:bg-[#f8d6ba] hover:shadow-xl">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKoeGTG2evu2zrPJadEAHCnm7BK5AJynLIw8BpQzZ&s"
        alt=""
        className=" max-h-10 rounded-full "
      />
      <div>
        <h1 className=" text-lg font-semibold text-[#FD8D4E]">Name name </h1>
        <h2>Message message.....</h2>
      </div>
    </div>
  );
}

export default Contact;

import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Chatheader from "../components/chatheader";

import ChatContact  from "../components/chatContact";
import ChatBox from "../components/box/chatBox";
import SearchContact from "../components/searchContact";
import { ChatState } from "../context/chatProvider";

function Chat() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { search, user } = ChatState();
 const [showContact, setShowContact] = useState(true);

  return (
    <div className=" m-4 p-4 bg-orange-50 shadow-md grid place-content-center  ">
      <Navbar fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      <Chatheader showContact={showContact} setShowContact={setShowContact}  />
      {user && (
        <div className=" grid justify-items-center place-items-center  md:flex md:justify-between ">
       

          { showContact && 
              <div>

            
            {search ? <SearchContact /> : <ChatContact fetchAgain={fetchAgain}  />}
              </div>
          }
      
        
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </div>
      )}
    </div>
  );
}

export default Chat;

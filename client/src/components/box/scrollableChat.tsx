import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { ChatState } from "../../context/chatProvider";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../../config/chatLogics";
import { Tooltip } from "react-tooltip";
function ScrollableChat({ messages }: { messages: any }) {
  const { user } = ChatState();
  console.log(messages);
  return (
    // @ts-ignore
    <ScrollableFeed className="no-scrollbar  ">
      {messages &&
        messages.map((m: any, i: any) => (
          <div className=" flex items-center gap-1" key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <div>
                <img
                  src={m.sender.picture}
                  // src="https://cdn.vox-cdn.com/thumbor/9TS9oKKcdKInFAHnWOOCE2qF8ng=/0x0:2864x1200/1400x1050/filters:focal(799x609:1257x1067):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/53591117/kongyell.0.jpg"
                  alt=""
                  className="my-anchor-element w-10 h-10 rounded-full "
                />
                <Tooltip
                  anchorSelect=".my-anchor-element"
                  place="left"
                  className=" from-neutral-950 "
                >
                  {m.sender.name}
                </Tooltip>
                {/* <h1>{m.sender.name}</h1> */}
              </div>
            )}
            <span
              className={` shadow ${
                m.sender._id === user._id
                  ? "bg-[#FFFDFC] rounded-br-none "
                  : "bg-[#FD8D4E] rounded-bl-none"
              } p-3 m-2 rounded-xl break-normal `}
              style={{
                maxWidth: "50%",
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i) ? 3 : 10,
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
}

export default ScrollableChat;

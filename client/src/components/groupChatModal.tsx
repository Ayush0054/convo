import React from "react";

export default function GroupChatModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="shadow bg-[#FD8D4E] p-2 m-2 hover:shadow-lg"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Group
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start  justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold   ">
                    Create Group Chat
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 grid gap-3 ">
                  <input
                    type="text"
                    placeholder="Chat Name"
                    className=" p-3 outline-orange-500 bg-orange-50 rounded-sm "
                  />
                  <input
                    type="text"
                    placeholder="Add Users eg:joss,naman"
                    className=" p-3 outline-orange-500 bg-orange-50 rounded-sm"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="  bg-[#FD8D4E] p-2 m-2 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Create Group
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

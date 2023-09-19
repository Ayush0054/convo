import React from "react";

function ProfileModal({ user }: { user: any }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <img
        className=" max-w-10 max-h-10 md:max-w-20 md:max-h-20 rounded-lg"
        src={user.picture}
        onClick={() => setShowModal(true)}
      ></img>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
                {/*header*/}

                <img
                  src={user.picture}
                  alt={user.name}
                  className=" rounded-full  "
                />

                <h1 className=" text-3xl p-5">{user.name}</h1>
                <h1 className=" text-3xl p-5">{user.email}</h1>

                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ProfileModal;

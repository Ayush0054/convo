import React, { useState } from "react";
import { ChatState } from "../../context/chatProvider";
import Toast from "../toast";
import axios from "axios";

function updatePfp( {fetchAgain, setFetchAgain}: {fetchAgain: any, setFetchAgain: any}) {
  const { user ,setUser} = ChatState();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [pic, setPic] = useState();
  const toastname: any = "Please fill all the fields";
  const postImg = (pics: File): void => {
    setLoading(true);
    setButtonLoading(true);
    if (pics === undefined) {
      alert("Please select an image");
      return;
    }
    console.log(pics);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      console.log("2", pics);
      data.append("file", pics);
      data.append("upload_preset", "convos");
      data.append("cloud_name", "dkj0ybxnk");
      fetch("https://api.cloudinary.com/v1_1/dkj0ybxnk/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // handleInputChange("img", data.url.toString());
          setPic(data.url.toString());
          console.log(data.url.toString());
          console.log("hello");

          setButtonLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      <Toast {...toastname} />;
      setLoading(false);
      return;
    }
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("pic", pic);

    setLoading(true);
console.log(user._id);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          // "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        "https://convo-aoru.onrender.com/api/user/updatephoto",
        { userId: user._id,
          picture: pic,
        },
        config
      );
      setFetchAgain(!fetchAgain);
    
     console.log(data);

      alert("picture Created");
      console.log("uploaded", data);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);

      alert("picture not uploaded");
      setLoading(false);
    }
  };
  return (
    <>
      <img
        className=" w-10 h-10 rounded-full"
        src={user.picture}
        onClick={() => setShowModal(true)}
      ></img>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:w-full w-72 bg-white outline-none focus:outline-none p-5 md:p-10">
                {/*header*/}
                <div className=" grid justify-items-center">
                  <h1 className=" font-bold ">Update image</h1>
                  <form className=" md:flex" onSubmit={submitHandler}>
                    <input
                      id="file_input"
                      type="file"
                      accept="image/*"
                      // onChange={postImg}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        postImg(e.target.files![0])
                      }
                      className="block   focus:outline-none  p-2 m-3  text-sm    cursor-pointer dark:text-gray-700  "
                    />
                    {buttonLoading ?
                         <button className=" bg-[#FD8D4E] md:m-5 m-2  rounded-lg p-2 drop-shadow-xl" disabled>
                         loading...
                       </button>
                       :

                      <button className=" bg-[#FD8D4E] md:m-5 m-2  rounded-lg p-2 drop-shadow-xl">
                      {" "}
                      Update
                    </button>
                    }
                  </form>

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
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default updatePfp;

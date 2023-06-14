import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "./signin-image.json";
import Toast from "../components/toast";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupParams } from "../types/authTypes";
function SignIn() {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState<SignupParams>({
    name: "",
    email: "",
    img: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (field: string, value: string): void => {
    setSignupData((prevData) => {
      return { ...prevData, [field]: value };
    });
  };
  const [loading, setLoading] = useState(false);
  const toastname: any = "Please fill all the fields";
  const postImg = (pics: File): void => {
    setLoading(true);
    if (pics === undefined) {
      toast("Please Select an Image!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    console.log(pics);
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
          handleInputChange("img", data.url.toString());
          console.log(data.url.toString());
          console.log("hello");

          setLoading(false);
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
    console.log(
      signupData.email,
      signupData.password,
      signupData.confirmPassword,
      signupData.name,
      signupData.img
    );

    setLoading(true);
    if (
      !signupData.name ||
      !signupData.email ||
      !signupData.password ||
      !signupData.confirmPassword
    ) {
      toast("Please fill all the fields", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      console.log(loading);
      return;
    }
    console.log(loading);
    if (signupData.password !== signupData.confirmPassword) {
      toast("password do not match", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user",
        {
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
          img: signupData.img,
        },
        config
      );
      console.log(data);
      console.log("yoyo");

      toast("Account Created Successfully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);

      toast("Error Occured!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    }
  };

  const style = {
    height: 600,
    width: 600,
  };
  return (
    <div>
      <h1 className=" text-7xl text-center p-10 ">SignUp</h1>
      <div className=" flex justify-center items-center">
        <div className=" flex justify-between items-center bg-[#FFD7C0] ml-64 mr-64 h-auto rounded-lg shadow-2xl  max-w-5xl  ">
          <div>
            <Lottie animationData={animation} style={style} className=" " />
          </div>
          <div className=" p-8 m-8">
            <form
              className=" grid max-w-xs  items-center  "
              onSubmit={submitHandler}
            >
              <h1 className="text-2xl">Name</h1>
              <input
                type="text"
                value={signupData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("name", e.target.value)
                }
                className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
              />
              <h1 className="text-2xl">Email</h1>
              <input
                type="email"
                value={signupData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("email", e.target.value)
                }
                className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
              />

              <h1 className="text-2xl">Password</h1>
              <input
                type="password"
                value={signupData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("password", e.target.value)
                }
                className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
              />
              <h1 className="text-2xl">Confirm Password</h1>
              <input
                type="password"
                value={signupData.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className=" bg-white border p-2 m-3  rounded-3xl focus:outline-none"
              />

              <h1 className="text-2xl">Picture</h1>

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

              <button className=" bg-[#FD8D4E] m-5   rounded-lg p-2 drop-shadow-xl">
                {" "}
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
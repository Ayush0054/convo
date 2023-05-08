import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="" className=" grid max-w-xs  items-center ">
        <input type="email" className=" bg-white border " />
        <input type="password" className=" bg-white border" />
        <button className=" bg-slate-400"> Login</button>
      </form>
    </div>
  );
}

export default Login;

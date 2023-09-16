import React from "react";

function UserIcon({
  user,
  handleFunction,
}: {
  user: any;
  handleFunction: any;
}) {
  return (
    <div
      className=" px-3 py-1.5 rounded-lg m-1 mb-2 cursor-pointer bg-orange-50 flex justify-center items-center gap-2 "
     
    >
      {user.name}
      <button className=" text-x"  onClick={handleFunction}>X</button>
    </div>
  );
}

export default UserIcon;

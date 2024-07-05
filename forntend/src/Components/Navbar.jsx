import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="absolute top-3 left-3 right-3 text-black z-20  ">
        <div className="flex p-3 rounded-2xl  w-full justify-center items-center space-x-10 text-xl bg-white  bg-opacity-80 backdrop-blur-lg  shadow-lg text-white drop-shadow-xl ">
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;

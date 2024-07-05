import React, { useState } from "react";
import bgVideo from "./assets/bg.mp4";
import bgVideo1 from "./assets/bg2.mp4";
import bgVideo2 from "./assets/bg3.mp4";
import logo from "./assets/logo.png";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";
function App() {
  const [openPopup, setOpenPopUp] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    setOpenPopUp(!openPopup);
  };
  return (
    <>
      <div className="lg:pt-[100px] xs:pt-[50px] overflow-hidden  lg:h-[100vh]">
        {openPopup && (
          <Popup openPopup={openPopup} setOpenPopUp={setOpenPopUp} />
        )}
        <Navbar />
        {/* <img src={logo} alt="" /> */}
        <div className="relative  ">
          <div className="absolute inset-0 overflow-hidden xs:hidden lg:block ">
            {/* Apply backdrop filter for blur effect */}
            <div className="w-full h-full  absolute inset-0">
              <video
                autoPlay
                muted
                loop
                className="w-[100%] h-full object-fill"
              >
                <source src={bgVideo2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="relative lg:h-[100vh] lg:flex flex-col pt-[60px] lg:items-end xs:items-center  justify-center  text-black">
            <div className="lg:hidden">
              <div className="mb-10 ">
                <div className="absolute w-full  h-[60%] top-[100px] left-[90px]">
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-[100%] h-full object-fill"
                  >
                    <source src={bgVideo2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="relative xs:mt-[440px] lg:mt-[0] xs:text-center  p-6">
              <h1 className="md:text-[50px] xs:text-[30px] font-bold">
                Let's Learn & Earn
              </h1>
              <p className="md:text-3xl mt-4 xs:text-lg">
                Get a chance to win up-to{" "}
                <span className="block pt-3 text-blue-950 font-bold md:text-[50px] xs:text-2xl ">
                  {" "}
                  Rs.15,000{" "}
                </span>
              </p>
              <button
                onClick={toggle}
                className="mt-10 text-white bg-customBlue text-xl rounded-full w-full border-2 border-black p-3 transition-transform transform hover:scale-110"
              >
                Refer Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

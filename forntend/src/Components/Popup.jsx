/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import iconCross from "../assets/icon-cross.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

function Popup({ openPopup, setOpenPopUp }) {
  const [loader, setLoader] = useState(false);
  const [error, setErrorMsg] = useState("");
  const [sucess, setSucessMsg] = useState("");
  const closePopup = (e) => {
    e.preventDefault();
    setOpenPopUp(!openPopup);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    if (data.course === "") {
      alert("Please select a course");
    } else {
      setLoader(!loader);
      try {
        const response = await axios.post(
          "https://accredian-backend-task-p1h7.onrender.com/referral",
          data
        );
        console.log("Referral data submitted:", response.data);
        setSucessMsg("Referral Accepted !! ");
        setTimeout(() => {
          setOpenPopUp(!openPopup);
        }, 2000);
      } catch (error) {
        setErrorMsg("Something wrong please try again !! ");
        setLoader(!loader);
        setTimeout(() => {
          setOpenPopUp(!openPopup);
        }, 2000);
        console.error("Error submitting referral:", error.message);
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 justify-center flex w-[100%] flex-col items-center z-50 ">
        <div className="relative bg-white p-[50px]">
          <button onClick={closePopup} className="cursor-pointer">
            <img
              src={iconCross}
              className="absolute right-6 top-6 cursor-pointer"
              alt="close"
            />
          </button>
          <h1 className="text-2xl font-semibold p-2">
            You are one step closer to earning 🥳💵 !!
          </h1>
          <div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="p-1 flex flex-col">
                <label htmlFor="referrerName">Referrer Name</label>
                <input
                  className="p-1 outline-none rounded-md border-2 border-gray-200"
                  type="text"
                  {...register("referrerName", { required: true })}
                />
                {errors.referrerName && (
                  <span className="text-red-500 text-xs pt-2">
                    This field is required
                  </span>
                )}
              </div>

              <div className="p-1 flex flex-col">
                <label htmlFor="referrerEmail">Referrer Email</label>
                <input
                  className="p-1 outline-none rounded-md border-2 border-gray-200"
                  type="email"
                  {...register("referrerEmail", { required: true })}
                />
                {errors.referrerEmail && (
                  <span className="text-red-500 text-xs pt-2">
                    This field is required
                  </span>
                )}
              </div>

              <div className="p-1 flex flex-col">
                <label htmlFor="refereeName">Referee Name</label>
                <input
                  className="p-1 outline-none rounded-md border-2 border-gray-200"
                  type="text"
                  {...register("refereeName", { required: true })}
                />
                {errors.refereeName && (
                  <span className="text-red-500 text-xs pt-2">
                    This field is required
                  </span>
                )}
              </div>

              <div className="p-1 flex flex-col">
                <label htmlFor="refereeEmail">Referee Email</label>
                <input
                  className="p-1 outline-none rounded-md border-2 border-gray-200"
                  type="email"
                  {...register("refereeEmail", { required: true })}
                />
                {errors.refereeEmail && (
                  <span className="text-red-500 text-xs pt-2">
                    This field is required
                  </span>
                )}
              </div>

              <div className="p-1 flex flex-col ">
                <label htmlFor="course">Courses</label>
                <select
                  {...register("course", { required: true })}
                  className="p-1 outline-none rounded-md border-2 border-gray-200"
                >
                  <option value="">Select a course</option>
                  <option value="Technology and Software Development">
                    Technology and Software Development
                  </option>
                  <option value="Business and Management">
                    Business and Management
                  </option>
                  <option value="Creative and Design">
                    Creative and Design
                  </option>
                  <option value="Health and Wellness">
                    Health and Wellness
                  </option>
                  <option value="Language Learning">Language Learning</option>
                  <option value="Personal Development">
                    Personal Development
                  </option>
                </select>
                {errors.course && (
                  <span className="text-red-500 text-xs pt-2">
                    This field is required
                  </span>
                )}
              </div>

              <button className="w-full mt-3 bg-darkerBlue text-white p-3 rounded-full">
                <p className={`${loader ? "hidden" : "block"}`}>
                  There you go !!
                </p>
                <div
                  role="status"
                  className={`${loader ? "flex justify-center" : "hidden"} `}
                >
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-500 fill-blue-800"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            </form>
          </div>
          <p className="text-red-600 font-bold text-xl text-center">{error}</p>
          <p className="text-green-600 font-bold text-xl text-center">{sucess}</p>
        </div>
      </div>
    </>
  );
}

export default Popup;

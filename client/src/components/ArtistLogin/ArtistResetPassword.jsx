/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/artist";
let config = {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
};
export const ArtistResetPassword = () => {
  const [newPassword, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigation = useNavigate();
  const handleResetPass = async () => {
    if (confirmPass === newPassword) {
      const data = resetPassword(
        { password: newPassword, email: localStorage.getItem("Artist Email") },
        config
      );
      console.log(data);
      navigation("/ArtistLogin");
    } else {
      alert("New Password and Confirm Password should be same");
    }
  };

  return (
    <div className="Register bg-gradient-to-r from-blue-300 to-gray-400 ">
      <section className="text-gray-800 h-full body-font py-72 bg-cover ">
        <div className="container h-full mx-auto">
          <div className="box-border rounded-2xl container py-10 px-6 mx-auto  md:box-content  w-1/2  bg-slate-300 bg-opacity-75 md:bg-opacity-75  justify-center border-black border-2">
            <div className="box-border container w-1/2 text-left  mx-auto mb-12">
              <h1 className=" text-4xl font-bold text-center  text-gray-900 sm:text-4xl">
                Create New Password
              </h1>
            </div>
            <div className="lg:w-5/6 md:w-2/3 mx-auto ">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="mt-2 text-3xl text-black font-bold"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      onChange={(e) => setNewPass(e.target.value)}
                      id="name"
                      name="New Password"
                      className="w-full h-16 normal-case text-3xl rounded-xl border-gray-500 focus:border-gray-900 outline-none text-black duration-200 ease-in-out"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="mt-2 text-3xl text-black font-bold"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      onChange={(e) => setConfirmPass(e.target.value)}
                      id="name"
                      name="Confirm Password"
                      className="w-full h-16 normal-case text-3xl rounded-xl border-gray-500 focus:border-gray-900 outline-none text-black duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="mx-auto rounded-full w-fit mb-3">
                  <button
                    onClick={handleResetPass}
                    className=" flex w-full justify-center text-center  mx-auto text-2xl text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded mb-4 h-12 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

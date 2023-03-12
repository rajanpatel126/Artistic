/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/admin";

// import logo from "./images/logo1.jpeg";
// import google from "./images/google.png";
let config = {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
};
export const AdminResetPassword = () => {
  const [newPassword, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigation = useNavigate();
  const handleResetPass = async () => {
    if (confirmPass === newPassword) {
      const data = resetPassword(
        { password: newPassword, email: localStorage.getItem("Admin Email") },
        config
      );
      console.log(data);
      navigation("/AdminLogin");
    } else {
      alert("New Password and Confirm Password should be same");
    }
  };

  return (
    <section className="text-black body-font py-24 relative bg-[#763446] bg-cover">
      <div className="container py-24 mx-auto  ">
        <div className="box-border rounded-2xl border-black border-2 container py-12 px-6 bg-slate-400 bg-opacity-75 md:bg-opacity-75 justify-center mx-auto  md:box-content  w-1/2 shadow-2xl">
          <div className="box-border container w-1/2 text-left  mx-auto mb-12">
            <h1 className=" text-4xl font-bold title-font text-center  text-gray-900 sm:text-4xl">
              Create New Password
            </h1>
          </div>
          <form className="lg:w-5/6 md:w-2/3 mx-auto ">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                {/* <div className="relative">
                  <label
                    htmlFor="name"
                    className="mt-12 text-3xl text-black font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="name"
                    name="name"
                    required
                    className=" w-full h-14 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div> */}

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
                    name="newPass"
                    required
                    className="w-full h-14 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    required
                    name="Confirm Password"
                    className="w-full rounded h-14 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleResetPass}
                  className=" flex w-full justify-center text-center  mx-auto text-2xl text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded mb-4 h-12 "
                  // to="/AdminLogin"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { forgetPassword } from "../../api/admin";

let config = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
};

export const AdminForgotPassword = () => {
  const [emailInfo, setEmailInfo] = useState({});
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    let op = Math.floor(Math.random() * 1000000);
    setOtp(op);
    localStorage.setItem("OTP", op);
    const obj = {
      emailAddress: emailInfo,
      subject: "Email From Artstic to Admin for Forgot Password",
      text: `The OTP for forget Password is ${op}`,
    };
    localStorage.setItem("Admin Email", emailInfo);
    const data = await forgetPassword(obj, config);
    console.log(data);
  };

  return (
    <>
      <section className="text-gray-800 h-full body-font py-72 bg-[#568848] bg-cover ">
        <div className="container h-full py-1 mx-auto   ">
          <div className="box-border rounded-2xl container py-10 px-6 mx-auto  md:box-content  w-1/2 bg-slate-400 bg-opacity-75 md:bg-opacity-75  justify-center border-black border-2">
            <div className="box-border container flex w-32 mb-3">
              <img
                src="./images/logo1.jpeg"
                className="img1 justify-center items-center"
                alt="hello"
              />
            </div>
            <p className="text-Black justify-center text-center   text-4xl mt-2 px-2 font-bold">
              Enter the provided Email-Address
            </p>

            <div className="lg:w-5/6 md:w-2/3 mx-auto ">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 mt-6 text-3xl text-black font-bold mb-3"
                    >
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmailInfo(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full h-14 normal-case rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 text-3xl py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className=" w-full">
                  <NavLink
                    onClick={handleSubmit}
                    className="mt-4 flex w-full justify-center text-center mx-auto text-3xl text-white bg-indigo-500 border-0 p-3 font-semibold focus:outline-none hover:bg-indigo-600 rounded-md mb-10 "
                    to="/AdminVerifyOTP"
                  >
                    Send Mail
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

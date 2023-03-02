/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navigate, useNavigate, NavLink } from "react-router-dom";

// import logo from "./images/logo1.jpeg";
// import google from "./images/google.png";

export const ArtistVerifyOTP = () => {
  const [verifyOtp, setVerifyOtp] = useState({});
  const [isbuttonDisabled, setIsButtonDisabled] = useState(true);
  const navigation = useNavigate();
  const handleChange = async (e) => {
    if (e.target.value.length === 5) {
      setIsButtonDisabled(false);
    }
  };
  const handleContinue = async () => {
    let otp = localStorage.getItem("OTP");
    if (verifyOtp === otp) {
      navigation("/ArtistLogin/ArtistForgotPassword/ArtistVerifyOTP/ArtistResetPassword");
    }
  };

  return (
    <div className="Register bg-gradient-to-r from-blue-300 to-gray-400">
      <section className="text-gray-800 h-full body-font py-72 bg-cover ">
        <div className="container h-full mx-auto   ">
          <div className="box-border rounded-2xl container py-14 px-6 mx-auto  md:box-content  w-1/2 shadow-2xl bg-slate-300 border-black border-2 bg-opacity-75 md:bg-opacity-75 justify-center">
            <div className="box-border container flex mb-3">
              <img
                src="./images/logo1.jpeg"
                className="justify-center mx-auto items-center rounded-full h-24 w-24"
                alt="hello"
              />
            </div>
            <p className="text-Black justify-center text-center   text-4xl mt-1 px-2 font-bold">
              Verification Required
            </p>

            <div className="px-16 mx-auto ">
              <div className="flex flex-wrap -m-2">
                <p className="px-2 text-2xl  mb-4 mt-4 text-left">
                  To continue, complete this verification step. We've sent an
                  OTP to the Email Address. Please enter it below to complete
                  verification.
                </p>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-3xl text-black font-bold mb-3"
                    >
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setVerifyOtp(e.target.value)}
                      className="w-full h-16 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-3xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="mx-auto rounded-full w-fit mb-3">
                  <NavLink onClick={handleContinue} to="/ArtistResetPassword">
                    <button
                      disabled={isbuttonDisabled}
                      className="text-3xl mx-auto text-white w-fit mt-4 p-3 bg-blue-900 rounded-3xl"
                    >
                      Continue
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

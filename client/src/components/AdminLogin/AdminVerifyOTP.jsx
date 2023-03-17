/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export const AdminVerifyOTP = () => {
  const [verifyOtp, setVerifyOtp] = useState({});
  const [isbuttonDisabled, setIsButtonDisabled] = useState(true);
  const navigation = useNavigate();
  const handleChange = async (e) => {
    if (e.target.value.length === 6) {
      setIsButtonDisabled(false);
    }
  };
  const handleContinue = async () => {
    let otp = localStorage.getItem("OTP");
    if (verifyOtp === otp) {
      navigation("/AdminResetPassword");
    }
  };

  return (
    <>
      <section className="text-black bg-[#feccbb] h-full body-font py-72 bg-cover">
        <div className="container h-full mx-auto">
          <div className="box-border rounded-2xl container py-14 px-6 mx-auto  md:box-content  w-1/2 shadow-2xl border-black border-2 bg-slate-400 bg-opacity-75 md:bg-opacity-75 justify-center">
            <div className="box-border container flex w-32 mb-3">
              <img
                src="./images/logo1.jpeg"
                className="img1 justify-center items-center w-64"
                alt="hello"
              />
              {/* <p className="mt-4 ml-2 text-4xl">Artistic</p> */}
            </div>
            <p className="text-Black justify-center text-center   text-4xl mt-1 px-2 font-bold">
              Verification Required
            </p>

            <div className="px-16 mx-auto ">
              <div className="flex flex-wrap -m-2">
                <p className="px-2 text-xl mb-4 mt-4 text-left">
                  To continue, complete this verification step. We've sent an
                  OTP to the mobile number. Enter it below to complete
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
                      onClick={(e) => setVerifyOtp(e.target.value)}
                      onChange={handleChange}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full h-14 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className=" w-full">
                  <NavLink onClick={handleContinue} to="/AdminResetPassword">
                    <button
                      disabled={isbuttonDisabled}
                      className=" flex w-full justify-center text-center mx-auto text-2xl text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded mb-4 h-12"
                    >
                      Continue
                    </button>
                  </NavLink>
                </div>

                {/* <NavLink
                  className=" flex w-full justify-center text-center mx-auto text-2xl text-blue border-0 py-2 px-8 focus:outline-none text-blue-600 rounded"
                  to="/AdminVerifyOTP"
                >
                  Resend OTP
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

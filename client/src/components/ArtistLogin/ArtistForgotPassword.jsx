/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "./images/logo1.jpeg";
// import google from "./images/google.png";

export const ArtistForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);

  const handleChange = async (e) => {
    // if (e.target.value.length=== null) {
    //   setIsButtonDisabled(false);
    // }
  };

  return (
    <div className="Register bg-gradient-to-r from-blue-300 to-slate-400 ">
      <section className="text-gray-800 h-full body-font py-72 bg-cover ">
        <div className="container h-full mx-auto">
          <div className="box-border rounded-2xl container py-10 px-6 mx-auto  md:box-content  w-1/2  bg-slate-200 bg-opacity-75 md:bg-opacity-75  justify-center border-black border-2">
            <div className="box-border container flex w-32 mb-3">
              <img
                src="./images/Logo.jpeg"
                className=" justify-center rounded-full w-28 h-20"
                alt="img"
              />
            </div>
            <p className="text-Black justify-center text-center text-4xl mt-2 px-2 font-bold">
              Enter the Email-Id
            </p>

            <div className="lg:w-5/6 md:w-2/3 mx-auto ">
              <div className="flex flex-wrap -m-2">
                <p className="px-2 text-2xl mx-auto font-semibold mb-4 mt-3 text-left">
                  {" "}
                  Enter the email address associated with your Artistic account.
                </p>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-3xl text-black font-bold mb-3"
                    >
                      Email
                    </label>
                    <input
                      onClick={(e) => setEmail(e.target.value)}
                      // onChange={handleChange};
                      type="email"
                      id="name"
                      name="name"
                      className="w-full h-16 normal-case text-3xl rounded-xl border-gray-500 focus:border-gray-900 outline-none text-black duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="mx-auto rounded-full w-fit mb-3">
                  <NavLink to="/ArtistLogin/ArtistForgotPassword/ArtistVerifyOTP">
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

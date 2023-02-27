/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import logo from "./images/logo1.jpeg";
// import google from "./images/google.png";

export const ResetPassword = () => {
  return (
    <section className="text-gray-800 h-full body-font py-72 bg-[#75a0e1] bg-cover ">
      <div className="container h-full mx-auto">
        <div className="box-border rounded-2xl container py-10 px-6 mx-auto  md:box-content  w-1/2  bg-slate-400 bg-opacity-75 md:bg-opacity-75  justify-center border-2">
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
                    className="mt-12 text-3xl text-black font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    name="name"
                    className="w-full h-16 normal-case text-3xl rounded-xl border-gray-500 focus:border-gray-900 outline-none text-black duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="name"
                    className="mt-2 text-3xl text-black font-bold"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="name"
                    name="name"
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
                    id="name"
                    name="name"
                    className="w-full h-16 normal-case text-3xl rounded-xl border-gray-500 focus:border-gray-900 outline-none text-black duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="mx-auto rounded-full w-fit mb-3">
                <NavLink
                  className="text-3xl mx-auto text-white w-fit mt-4 p-3 bg-blue-900 rounded-3xl"
                  to="/Login"
                >
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import logo from "./images/logo1.jpeg";
// import google from "./images/google.png";

export const AdminResetPassword = () => {
  return (
    <section className="text-gray-800 body-font py-24 relative bg-[url('https://images.template.net/wp-content/uploads/2015/11/25190558/Plain-Dark-Blue-Background-Images-Download.jpg')] bg-cover">
      <div className="container  py-24 mx-auto  ">
        <div className="box-border rounded-2xl border-white border-2 container py-12 px-6 bg-slate-400 bg-opacity-75 md:bg-opacity-75 justify-center w-96 mx-auto  md:box-content  w-1/2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-100">
          <div className="box-border container w-1/2 text-left  mx-auto mb-12">
            <h1 className=" text-4xl font-bold title-font text-center  text-gray-900 sm:text-4xl">
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
                    className="w-full h-14 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    id="name"
                    name="name"
                    className="w-full rounded h-14 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <NavLink
                  className=" flex w-full justify-center text-center  mx-auto text-2xl text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded mb-4 h-12 "
                  to="/AdminLogin"
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

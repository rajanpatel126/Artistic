/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
// import Selller from "./Selller";
import { Navigate, NavLink } from "react-router-dom";

import ArtistList from "./Artists";
import ViewArt from "../ViewArt";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigation = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    navigation("/");
  };
  return (
    <>
      <div className="flex">
        <div className="flex flex-col h-screen p-3 text-white bg-[#a5a5a7] shadow-orange-200 w-96">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className=" font-bold text-black text-5xl">Admin Panel</h2><hr className="my-4 bg-white"></hr>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm ">
                  <NavLink
                    to="/"
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                  >
                    <span className="text-4xl">Dashboard</span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="/Admin/Product"
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                  >
                    {" "}
                    <span className="text-4xl">Product</span>
                  </NavLink>
                </li>
                <li className="rounded-sm ">
                  <NavLink
                    to="/Admin/Artist"
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                  >
                    <span className="text-4xl">Artists</span>
                  </NavLink>
                </li>
                <li className="rounded-sm ">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                  >
                    <span className="text-4xl">Orders</span>
                  </a>
                </li>

                <li onClick={handleLogout} className="rounded-sm ">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                  >
                    <button className="border-transparent border-0 p-0 border-slate-500 bg-transparent"><span className="text-4xl">Logout</span></button> 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow-xl">
              <div className="text-2xl text-gray-500 truncate">
                Total users
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                12,000
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow-xl">
              <div className="text-2xl text-gray-500 truncate">
                Total Profit
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
              ₹ 421.72 Cr
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow-xl">
              <div className="text-2xl text-gray-500 truncate">
                Total Orders
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                20,480
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

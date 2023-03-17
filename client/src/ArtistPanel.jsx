/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ArtistPanel() {
  const navigation = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    navigation("/");
  };

  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white  shadow w-96">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className=" font-bold text-4xl">Artist Panel</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-4xl">
              <li className="rounded-sm ">
                <NavLink
                  to="/AddArt"
                  className="flex items-center p-2  hover:text-white hover:bg-slate-500 space-x-3 rounded-md "
                >
                  <span className="text-3xl">Add Art</span>
                </NavLink>
              </li>

              <li className="rounded-sm ">
                <NavLink
                  to="/viewArt"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                >
                  <span className="text-3xl">View Art</span>
                </NavLink>
              </li>

              <li onClick={handleLogout} className="rounded-sm ">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                >
                  <span className="text-3xl">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-3">
          <div className="w-full px-4 py-5 rounded-lg shadow-2xl">
            <div className="text-3xl font-medium text-gray-500 truncate">
              Total Designs
            </div>
            <div className="mt-1 text-4xl font-semibold text-black">
              260
            </div>
          </div>
          <div className="w-full px-4 py-5 rounded-lg shadow-2xl">
            <div className="text-3xl font-medium text-gray-500 truncate">
              Total Profit
            </div>
            <div className="mt-1 text-4xl font-semibold text-black">
              ₹ 12,000
            </div>
          </div>
          <div className="w-full px-4 py-5 rounded-lg shadow-2xl">
            <div className="text-3xl font-medium text-gray-500 truncate">
              Total Orders
            </div>
            <div className="mt-1 text-4xl font-semibold text-black">540</div>
          </div>
        </div>
      </div>
    </div>
  );
}

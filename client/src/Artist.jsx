import React from "react";
import AddArt from "./AddArt";
import { NavLink } from "react-router-dom";
import artistList from "./ArtistList";

import ViewArt from "./ViewArt";

export default function Artist() {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white  shadow w-96">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className=" font-bold text-4xl">Artist Panel</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm ">
                <NavLink
                  to="/AddArt"
                  className="flex items-center p-2  hover:text-white hover:bg-slate-500 space-x-3 rounded-md "
                >
                  <span className="text-2xl">Add Art</span>
                </NavLink>
              </li>

              <li className="rounded-sm ">
                <NavLink
                  to="/viewArt"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                >
                  <span className="text-2xl">View Art</span>
                </NavLink>
              </li>

              <li className="rounded-sm ">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-slate-500 hover:text-white"
                >
                  <span className="text-2xl">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Artists
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              1200
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Profit
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              $ 450k
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">20k</div>
          </div>
        </div>
      </div>
    </div>
  );
}

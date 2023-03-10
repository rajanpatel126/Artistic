import React from "react";
import { NavLink } from "react-router-dom";
import { BiRupee } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col mb-8 h-screen border-2 border-black w-2/3 p-20 ml-60 mt-52 bg-slate-200 shadow-orange-200 ">
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-10 space-y-1 text-sm">
              <li class="text-base md:text-lg lg:text-xl mb-10">
                <span class="text-sm md:text-base lg:text-4xl font-bold">
                  Category
                </span>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md text-blue-700 underline"
                >
                  <span class="text-sm md:text-base text-black lg:text-4xl font-bold hover:text-blue-700">
                    All
                  </span>
                </NavLink>
              </li>
              <li className="rounded-sm ">
                <NavLink
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md hover:text-blue-500"
                >
                  <span class="text-sm md:text-base lg:text-4xl">Plain</span>
                </NavLink>
              </li>
              <li className="rounded-sm ">
                <NavLink
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:text-blue-500"
                >
                  <span class="text-sm md:text-base lg:text-4xl">Designed</span>
                </NavLink>
              </li>

              <li className="rounded-sm py-10">
                <span class="text-sm md:text-base lg:text-4xl font-bold">
                  Company
                </span>
                <select
                  id="select-option"
                  name="select-option"
                  class="w-full text-3xl mt-4 px-4 py-2 border rounded-lg"
                >
                  <option value="Aurelia">Aurelia</option>
                  <option value="Varanga">Varanga</option>
                  <option value="Rangriti">Rangriti</option>
                  <option value="Biba">Biba</option>
                  <option value="Janasya">Janasya</option>
                </select>
              </li>

              <li className="rounded-sm py-4">
                <span class="text-sm md:text-base lg:text-4xl font-bold">
                  Colors
                </span>
              </li>

              <li className="flex pb-10">
                <NavLink
                  to="#"
                  className="text-sm md:text-base mr-3 lg:text-2xl font-bold"
                >
                  <span class="text-sm md:text-base lg:text-3xl">All</span>
                </NavLink>
                <button className="bg-pink-400 mr-3 rounded-full hover:scale-125"></button>
                <button className="bg-black mr-3 rounded-full hover:scale-125"></button>
                <button className="bg-white mr-3 rounded-full hover:scale-125"></button>
                <button className="bg-yellow-200 mr-3 rounded-full hover:scale-125"></button>
                <button className="bg-cyan-500 mr-3 rounded-full hover:scale-125"></button>
              </li>

              <li classNameName="rounded-sm flex">
                <span className="text-sm md:text-base flex lg:text-4xl font-bold">
                  Price
                  <BiRupee className="text-3xl mt-2 ml-2" />
                </span>
              </li>

              <li className="rounded-sm pb-24">
                <select
                  id="select-option"
                  name="select-option"
                  class="w-full text-3xl mt-3 px-4 py-2 border rounded-lg mb-2"
                >
                  <option value="Aurelia">500</option>
                  <option value="Varanga">700</option>
                  <option value="Rangriti">1000</option>
                  <option value="Biba">1500</option>
                </select>
              </li>



              <li classNameName="rounded-sm flex">
                <span className="text-sm md:text-base pb-4 flex lg:text-4xl font-bold">
                  Deals and Discounts
                </span>
              </li>

              <li className="rounded-sm">
                <NavLink
                  to="/"
                  className="flex items-center p-1 space-x-3 rounded-md text-blue-700"
                >
                  <span class="text-sm md:text-base text-black lg:text-3xl  hover:text-blue-700">
                    All Discounts
                  </span>
                </NavLink>
              </li>

              <li className="rounded-sm">
                <NavLink
                  to="/"
                  className="flex items-center p-1 space-x-3 rounded-md  text-blue-700"
                >
                  <span class="text-sm md:text-base text-black lg:text-3xl  hover:text-blue-700">
                    Best Deals
                  </span>
                </NavLink>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

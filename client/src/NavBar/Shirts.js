/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ShirtSlider1 from "./ShirtSlider1";
import ShirtSlider2 from "./ShirtSlider2";

import Sidebar from "./Sidebar";


const Shirts = () => {
  return (
    <>
      <div className="bg-slate-300 flex">
        {/* Sidebar */}

        <div className="mr-14">
          <Sidebar></Sidebar>
        </div>

        {/* slider1 */}
        <div>
          <div className="mr-40 w-[60vw] h-1/2 mt-16 ">
            <span className="text-sm md:text-2xl lg:text-4xl font-bold ml-10">
              Plain Shirts
            </span>
           <ShirtSlider1></ShirtSlider1>
          </div>

          <div className="mr-40  w-[60vw] h-1/2 -mt-0 ">
            <span className="text-sm md:text-2xl lg:text-4xl font-bold ml-10">
              Designed Shirts
            </span>
           <ShirtSlider2></ShirtSlider2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shirts;

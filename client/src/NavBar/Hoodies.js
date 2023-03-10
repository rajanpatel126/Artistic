/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import HoodieSlider1 from "./HoodieSlider1";
import HoodieSlider2 from "./HoodieSlider2";

import Sidebar from "./Sidebar";


const Hoodies = () => {
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
              Plain Hoodies
            </span>
            <HoodieSlider1></HoodieSlider1>
          </div>

          <div className="mr-40  w-[60vw] h-1/2 -mt-0 ">
            <span className="text-sm md:text-2xl lg:text-4xl font-bold ml-10">
              Designed Hoodies
            </span>
           <HoodieSlider2></HoodieSlider2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoodies;

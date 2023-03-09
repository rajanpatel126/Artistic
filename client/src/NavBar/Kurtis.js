/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider1 from "./Slider1";

import Sidebar from "./Sidebar";
import Slider2 from "./Slider2";

const Kurtis = () => {
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
              Plain Kurtis
            </span>
            {/* <Slider1></Slider1> */}
          </div>

          <div className="mr-40  w-[60vw] h-1/2 -mt-0 ">
            <span className="text-sm md:text-2xl lg:text-4xl font-bold ml-10">
              Designed Kurtis
            </span>
            {/* <Slider2></Slider2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kurtis;

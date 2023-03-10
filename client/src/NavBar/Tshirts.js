/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";
import TshirtSlider1 from "./TshirtSlider1";
import TshirtSlider2 from "./TshirtSlider2";


const Tshirts = () => {
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
              Plain Tshirts
            </span>
           <TshirtSlider1></TshirtSlider1>
          </div>

          <div className="mr-40  w-[60vw] h-1/2 -mt-0 ">
            <span className="text-sm md:text-2xl lg:text-4xl font-bold ml-10">
              Designed Tshirts
            </span>
         <TshirtSlider2></TshirtSlider2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tshirts;

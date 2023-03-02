/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <section className="text-gray-600 body-font bg-slate-100">
      <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font  text-5xl mb-4 text-black font-bold">
            Trending Products
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

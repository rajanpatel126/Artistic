/* eslint-disable no-unused-vars */
import React from 'react'

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <section className= "mt-4 text-black body-font bg-[#849070]">
      <div className="mx-auto flex px-5 pt-10 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-5xl mb-4 text-black font-bold">
            Trending Products
          </h1>
          <p className="mb-4 text-4xl leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto repudiandae, quod natus at quam quia placeat laudantium nihil debitis harum sint sed asperiores nemo fugit soluta ad id, error ratione ea aspernatur maxime reiciendis. Molestiae consequuntur fugit non eos quas.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

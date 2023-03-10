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
            Introducing the latest trend in activewear - the most Exquisite Kurtis,Shirts,Hoodies and Tshirts! Our new collection features a high-rise waistband that provides both comfort and style, while also giving you support during your workouts. These all products are made with high-quality materials that are moisture-wicking, ensuring that you stay comfortable. Available in a range of colors and sizes, these products are perfect for any events. And with over 500 five-star reviews, it's clear that customers love these products just as much as we do. Order now and get free shipping on your first purchase!
          </p>
          
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

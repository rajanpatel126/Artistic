/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromTag } from "../api/admin";

export default function ProductCollections() {
  const [trendKurti, setTrendKurti] = useState([]);
  const [trendShirt, setTrendShirt] = useState([]);
  const [trendHoodie, setTrendHoodie] = useState([]);
  const [trendTshirt, setTrendTshirt] = useState([]);

  const handleProducts = async () => {
    setTrendHoodie([]);
    // setTrendKurti([]);
    // setTrendShirt([]);
    setTrendTshirt([]);

    const tshirt = await fetchFromTag("Trending T-Shirt");
    const shirt = await fetchFromTag("Trending Shirt");
    const kurti = await fetchFromTag("Trending Kurti");
    const hoodie = await fetchFromTag("Trending Hoodie");
    setTrendHoodie(hoodie);
    setTrendKurti(kurti);
    setTrendShirt(shirt);
    setTrendTshirt(tshirt);
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <>
      <section className="mt-4 text-black body-font bg-[#d1af5a]">
        <div className="mx-auto flex px-5 pt-10 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font text-5xl mb-4 text-black font-bold">
              Trending Products
            </h1>
            <p className="mb-4 text-4xl content-between leading-relaxed">
              Introducing the latest trend in activewear - the most Exquisite
              Kurtis,Shirts,Hoodies and Tshirts! Our new collection features a
              high-rise waistband that provides both comfort and style, while
              also giving you support during your workouts. These all products
              are made with high-quality materials that are moisture-wicking,
              ensuring that you stay comfortable. Available in a range of colors
              and sizes, these products are perfect for any events. And with
              over 500 five-star reviews, it's clear that customers love these
              products just as much as we do. Order now and get free shipping on
              your first purchase!
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#d1af5a]">
        <section className="text-black body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap -mx-14 -m-4">
              {trendKurti.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:bg-[#e2dcce] hover:shadow-2xl">
                  <Link
                    className="block relative h-4/5 rounded overflow-hidden"
                    to="/Kurti"
                  >
                    <img
                      src={item?.productImg}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block  hover:cursor-pointer transform "
                    />
                  </Link>
                  <div className="mt-4">
                    <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
                      8% OFF
                    </label>
                    <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
                      Deal Of The Day
                    </label>
                    <h2 className="text-black title-font font-bold text-3xl">
                      {item?.name}
                    </h2>
                    <h2 className="text-gray-600 title-font  text-xl">
                      {item?.description}
                    </h2>
                    <div className="">
                      <span className="mt-1 line-through text-2xl">₹7999</span>
                      <span className="mx-3 text-2xl font-bold">
                        ₹ {item?.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {trendShirt.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:shadow-2xl hover:bg-[#e2dcce]">
                  <Link
                    className="block relative h-4/5 rounded overflow-hidden"
                    to="/Shirt"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block hover:cursor-pointer transform hover:scale-110 hover:shadow-2xl"
                      src={item?.productImg}
                    />
                  </Link>
                  <div className="mt-4">
                    <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
                      15% OFF
                    </label>
                    <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
                      Best Selling
                    </label>
                    <h2 className="text-black title-font font-bold text-3xl">
                      {item?.name}
                    </h2>

                    <h2 className="text-gray-600 title-font  text-xl">
                      {item?.description}
                    </h2>
                    <span className="mt-1 line-through text-2xl">₹4699</span>
                    <span className="mx-3 text-2xl font-bold">
                      ₹ {item?.price}
                    </span>
                  </div>
                </div>
              ))}
              {trendHoodie.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:shadow-2xl hover:bg-[#e2dcce]">
                  <Link
                    className="block relative h-4/5 rounded overflow-hidden"
                    to="/Hoodie"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block hover:cursor-pointer transform hover:scale-110 hover:shadow-2xl"
                      src={item?.productImg}
                    />
                  </Link>
                  <div className="mt-4">
                    <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
                      Upto 15% OFF
                    </label>
                    <h2 className="text-black title-font font-bold text-3xl">
                      {item?.name}
                    </h2>
                    <h2 className="text-gray-600 title-font  text-xl">
                      {item?.description}
                    </h2>
                    <span className="mt-1 line-through text-2xl">₹6799</span>
                    <span className="mx-3 text-2xl font-bold">
                      ₹ {item?.price}
                    </span>
                  </div>
                </div>
              ))}
              {trendTshirt.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:shadow-2xl hover:bg-[#e2dcce]">
                  <Link
                    to="/Tshirt"
                    className="block relative h-4/5 rounded overflow-hidden"
                  >
                    <img
                      src={item?.productImg}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block hover:cursor-pointer transform hover:scale-110 hover:shadow-2xl"
                    />
                  </Link>
                  <div className="mt-4">
                    <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
                      12% OFF
                    </label>
                    <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
                      Limited Time Deal
                    </label>
                    <h2 className="text-black title-font font-bold text-3xl">
                      {item?.name}
                    </h2>
                    <h2 className="text-gray-600 title-font  text-xl">
                      {item?.description}
                    </h2>
                    <span className="mt-1 line-through text-2xl">₹7899</span>
                    <span className="mx-3 text-2xl font-bold">
                      ₹ {item?.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

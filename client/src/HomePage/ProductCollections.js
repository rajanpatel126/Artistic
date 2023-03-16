import React from "react";
import { Link } from "react-router-dom";

export default function ProductCollections() {
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
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:bg-[#e2dcce] hover:shadow-2xl">
                <Link
                  className="block relative h-4/5 rounded overflow-hidden"
                  to="/Kurti"
                >
                  <img
                    src="./images/kurti.jpg"
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block  hover:cursor-pointer transform "
                  />
                </Link>
                <div className="mt-4">
                  {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                  <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
                    8% OFF
                  </label>
                  <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
                    Deal Of The Day
                  </label>
                  <h2 className="text-black title-font font-bold text-3xl">
                    A line Kurtis
                  </h2>
                  <h2 className="text-gray-600 title-font  text-xl">
                    Design by GloopZ
                  </h2>
                  <div className="">
                    <span className="mt-1 line-through text-2xl">₹320</span>
                    <span className="mx-3 text-2xl font-bold">₹250</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:shadow-2xl hover:bg-[#e2dcce]">
                <Link
                  className="block relative h-4/5 rounded overflow-hidden"
                  to="/Shirt"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block hover:cursor-pointer transform hover:scale-110 hover:shadow-2xl"
                    src="./images/shirt.jpg"
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
                    Dennis Lingo
                  </h2>

                  <h2 className="text-gray-600 title-font  text-xl">
                    Design by GloopZ
                  </h2>
                  <span className="mt-1 line-through text-2xl">₹700</span>
                  <span className="mx-3 text-2xl font-bold">₹590</span>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:shadow-2xl hover:bg-[#e2dcce]">
                <Link
                  className="block relative h-4/5 rounded overflow-hidden"
                  to="/Hoodie"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block hover:cursor-pointer transform hover:scale-110 hover:shadow-2xl"
                    src="./images/hoodie.jpg"
                  />
                </Link>
                <div className="mt-4">
                  <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
                    Upto 15% OFF
                  </label>
                  <h2 className="text-black title-font font-bold text-3xl">
                    Lymio
                  </h2>
                  <h2 className="text-gray-600 title-font  text-xl">
                    Design by GloopZ
                  </h2>
                  <span className="mt-1 line-through text-2xl">₹799</span>
                  <span className="mx-3 text-2xl font-bold">₹649</span>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-110 hover:shadow-2xl hover:bg-[#e2dcce]">
                <Link
                  to="/Tshirt"
                  className="block relative h-4/5 rounded overflow-hidden"
                >
                  <img
                    src="./images/OptimistPrime.jpeg"
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
                    OPTIMIST PRIME
                  </h2>
                  <h2 className="text-gray-600 title-font  text-xl">
                    Design by GloopZ
                  </h2>
                  <span className="mt-1 line-through text-2xl">₹799</span>
                  <span className="mx-3 text-2xl font-bold">₹649</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

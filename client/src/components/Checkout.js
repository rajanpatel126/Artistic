/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BiRupee } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-14 font-bold md:text-5xl text-center text-5xl text-heading ">Customer Info
            </h2>
            <form className="justify-center w-full mx-auto" method="post" action>
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label for="firstName" className="block mb-3 text-3xl font-semibold text-black">First
                      Name</label>
                    <input name="firstName" type="text" placeholder="First Name"
                      className="w-full px-4 py-3 normal-case border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label for="firstName" className="block mb-3 text-3xl font-semibold text-black">Last
                      Name</label>
                    <input name="Last Name" type="text" placeholder="Last Name"
                      className="w-full px-4 normal-case py-3 text-sm border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label for="Email"
                      className="block mb-1 text-3xl font-semibold text-black">Email</label>
                    <input name="Last Name" type="text" placeholder="Email"
                      className="w-full px-4 normal-case py-3 text-sm border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full">
                    <label for="Address"
                      className="block mb-1 text-3xl font-semibold text-black">Address</label>
                    <textarea
                      className="w-full px-4 py-3 mb-12 normal-case text-xs border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address" cols="20" rows="4" placeholder="Address">
                    </textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label for="city"
                      className="block mb-3 text-3xl font-semibold text-black">City</label>
                    <input name="city" type="text" placeholder="City"
                      className="w-full px-4 normal-case py-3 text-sm border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label for="postcode" className="block mb-3 text-3xl font-semibold text-black">
                      Postcode</label>
                    <input name="postcode" type="text" placeholder="Post Code"
                      className="w-full normal-case px-4 py-3 text-sm border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input type="checkbox"
                      className="w-5 h-5 normal-case text-2xl border border-gray-300 lg:text-3xl rounded focus:outline-none focus:ring-1"/>
                    <span className="ml-2 -mt-4 text-2xl text-black">Save this information for next time</span>
                  </label>
                </div>
                <div className="relative pt-3 xl:pt-6"><label for="note"
                  className="block mb-3 text-3xl font-semibold text-black"> Notes
                  (Optional)</label><textarea name="note"
                    className="flex items-center normal-case w-full px-4 py-3 text-2xl border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4" placeholder="Notes for delivery"></textarea>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full px-6 py-2 text-white font-bold bg-blue-600 hover:bg-blue-900">Complete Checkout and Pay</button>
                </div>
              </div>
            </form>
          </div>
          <div className=" flex flex-col w-full h-2/3 py-3 px-8 mt-28 border-2 border-gray-300 ml-40 lg:ml-28 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-4xl font-bold text-center">Current Cart
              </h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <div className="w-full mb-7">
                      <h2 className="text-2xl font-bold text-red-500">Product 1</h2>
                      <p className="text-lg">Lorem ipsum dolor sit amet, tet</p>
                    </div>
                    <div className="text-2xl font-bold">
                       $20.00   
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-full">
                      <h2 className="text-2xl font-bold text-red-500">Product 2</h2>
                      <p className="text-lg">Lorem ipsum dolor sit amet, tet</p>
                    </div>
                    <div className="text-2xl font-bold">
                      $20.00
                    </div>
                  </div>

                </div>
              </div>

           
              <div
                className="flex items-center w-full py-4 mt-28 text-2xl font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<div className="ml-52 flex ">
                  <BiRupee></BiRupee>
                  40.00</div>
              </div>
              <div
                className="flex items-center w-full py-4 text-2xl font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<div className="ml-40 flex ">
                  <BiRupee></BiRupee>
                  40.00</div>
              </div>
              <div
                className="flex items-center w-full py-4 text-2xl font-semibold  lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<div className="ml-64 flex ">
                  <BiRupee></BiRupee>
                  40.00</div></div>
              <div
                className="flex items-center w-full py-4 text-2xl font-semibold  lg:py-5 lg:px-3 text-heading  last:text-base last:pb-0">
                <div className="ml-40 flex ">
                  {/* <BiRupee></BiRupee> */}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

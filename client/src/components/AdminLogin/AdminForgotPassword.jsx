import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const AdminForgotPassword = () => {



    return (<>
        <section className="text-gray-800 h-full body-font py-72 bg-slate-200 bg-[url('https://images.template.net/wp-content/uploads/2015/11/25190558/Plain-Dark-Blue-Background-Images-Download.jpg')] bg-cover ">
            <div className="container h-full py-1 mx-auto   ">


                <div className="box-border rounded-2xl container py-10 px-6 mx-auto  md:box-content  w-1/2  bg-slate-100 bg-slate-400 bg-opacity-75 md:bg-opacity-75  justify-center w-96 border-white border-2">
                    <div className="box-border container flex w-32 mb-3">
                        <img src="./images/logo1.jpeg" className="img1 justify-center items-center  " alt="hello" />
                        {/* <p className="mt-4 ml-2 text-4xl">Artistic</p> */}
                    </div>
                    <p className="text-Black justify-center text-center   text-4xl mt-2 px-2 font-bold">Provide Account Information</p>

                    <div className="lg:w-5/6 md:w-2/3 mx-auto ">
                        <div className="flex flex-wrap -m-2">
                            <p className="px-2 text-xl mb-4 mt-3 text-left">  Enter the email address or mobile phone number associated with your Amazon account.</p>


                            <div className="p-2 w-full">

                                <div className="relative">
                                    <label
                                        for="name"
                                        className="leading-7 text-3xl text-black font-bold mb-3"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="name"
                                        name="name"
                                        className="w-full h-14 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className=" w-full">
                                <NavLink className="mt-4 flex w-full justify-center text-center mx-auto text-2xl text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded mb-10 h-12 "
                                    to="/AdminVerifyOTP"
                                >
                                    Continue
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>



    );
}
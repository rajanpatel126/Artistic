/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  const navigation = useNavigate();
  const handleSelect = (e) => {
    if (e.target.value === "Admin") {
      navigation("/AdminLogin");
    } else if (e.target.value === "User") {
      navigation("/UserLogin");
    } else if (e.target.value === "Artist") {
      navigation("/ArtistLogin");
    }
  };
  return (
    <>
      <nav className="bg-[#e8b3d1] border-gray-600 px-2 sm:px-4 py-2.5 mb-4 rounded sticky ">
        <div className=" flex flex-wrap  items-center justify-between mx-auto">
          <Link to="/" className="flex items-start">
            <img
              src="./images/Logo.jpeg"
              className="h-24 w-24 mr-3 ml-9 rounded-full "
              alt="Artistic Logo"
            />
            <span className="self-center text-5xl font-bold hover:no-underline active:no-underline whitespace-nowrap ">
              Artistic
            </span>
          </Link>
          <div className="flex md:order-2">
            <form className="w-full -mb-14 mt-10 justify-end text-right">
              <div className="relative flex w-full h-20 justify-end text-right">
                <AiOutlineSearch className="absolute mt-3 mr-3  flex w-6 h-8 text-6xl text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-3 normal-case  text-4xl h-16  text-black border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600">
                </input>
              </div>
            </form>
            <div className="relative hidden md:flex">
             

              <div className="relative group z-20">
                {/* <button className="flex flex-row items-center text-3xl w-full px-4 py-4 mt-4 text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat ">
                  <span className="text-4xl text-black flex">
                    Login
                    <IoMdArrowDropdown className=" text-black" />
                  </span>
                </button> */}
                {/* <div className="  hidden absolute -my-4 ml-10  group-hover:block">
                  <div className=" px-3 py-4  w-36 h-40 rounded-xl text-black">
                    <ul className="space-y-2">
                      <li>
                        <NavLink to="/Login" className="navbar-link text-2xl">
                          User
                        </NavLink>
                      </li>
                      <hr className="leading-tight" />
                      <li>
                        <NavLink
                          to="/AdminLogin"
                          className="navbar-link text-2xl"
                        >
                          Admin
                        </NavLink>
                      </li>
                      <hr />
                      <li>
                        <NavLink
                          to="/ArtistLogin"
                          className="navbar-link text-2xl"
                        >
                          Artist
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <select
                  onChange={handleSelect}
                  className="cursor-pointer flex flex-row items-center text-5xl w-full px-3 mr-0 py-4 mt-4 text-center bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat "
                >
                  <option
                    value="User"
                    className="cursor-pointer px-3 py-4 text-3xl w-36 h-40 rounded-xl text-black"
                  >
                    Login
                  </option>
                  <hr className="w-full" />
                  <option
                    value="User"
                    className=" px-3 py-4 text-3xl w-36 h-40 rounded-xl text-black"
                  >
                    User
                  </option>
                  <hr className="w-full" />
                  <option
                    value="Admin"
                    className=" px-3 py-4 cursor-pointer text-3xl w-36 h-40 rounded-xl text-black"
                  >
                    Admin
                  </option>
                  <hr className="w-full" />
                  <option
                    value="User"
                    className=" px-3 py-4 cursor-pointer text-3xl  w-36 h-40 rounded-xl text-black"
                  >
                    Artist
                  </option>
                </select>
              </div>
            </div>
            {/* 
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button> */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div> */}
              {/* <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              /> */}
            </div>
            <div className="">
              <ul className="flex mt-4 border rounded-lg md:flex-row md:space-x-24 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                <li>
                  <Link
                    to="/Shirts"
                    className="py-2 leading-7 text-5xl pl-28 pr-4 text-black md:p-0 "
                    aria-current="page"
                  >
                    Shirt
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Tshirts"
                    className="block py-2 leading-3 text-5xl pl-28 pr-4 text-black md:hover:bg-transparent  md:p-0"
                  >
                    Tshirt
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Kurtis"
                    className="block py-2 leading-3 text-5xl pl-28 pr-4 text-black rounded md:hover:bg-transparent  md:p-0"
                  >
                    Kurti
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Hoodies"
                    className="block py-2 leading-3 text-5xl pl-3 pr-4 text-black rounded md:hover:bg-transparent  md:p-0"
                  >
                    Hoodie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

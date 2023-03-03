import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai"

function NavBar() {
  return (
    <>

      <nav class="bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky ">
        <div class=" flex flex-wrap  items-center justify-between mx-auto">
          <Link to="/" class="flex items-start">
            <img src="./images/Logo.jpeg" class="h-24 w-24 mr-3 ml-9 rounded-full " alt="Flowbite Logo" />
            <span class="self-center text-5xl font-bold hover:no-underline active:no-underline whitespace-nowrap ">Artistic</span>
          </Link>
          <div class="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1" >
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:flex">

              <input type="text" id="search-navbar" className="block w-full mt-12 p-2 pl-10 text-2xl lowercase text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
              <AiOutlineSearch className="text-white h-12 w-16 mt-12 p-1 mr-2 ml-1 focus:border-blue-500 bg-blue-900 rounded-full" />




              <div className="relative group ">
                <button className="flex flex-row items-center text-3xl w-full px-4 py-4 mt-4 text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat ">
                  <span className="text-4xl text-black flex">
                    Login
                    <IoMdArrowDropdown className=" text-black" />
                  </span>
                </button>
                <div className=" z-10 hidden absolute -my-4 ml-10  group-hover:block">
                  <div className="px-3 py-4 bg-slate-200 w-36 h-40 rounded-xl text-black">
                    <ul className="space-y-2">
                      <li>
                        <NavLink
                          to="/Login"
                          className="navbar-link text-2xl"
                        >
                          User
                        </NavLink>
                      </li>
                      <hr className="leading-tight" />
                      <li>
                        <NavLink to="/AdminLogin" className="navbar-link text-2xl">
                          Admin
                        </NavLink>
                      </li>
                      <hr />
                      <li>
                        <NavLink to="/ArtistLogin" className="navbar-link text-2xl">
                          Artist
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />
            </div>
            <ul class="flex mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-24 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-100  ">
              <li>
                <Link to="/Shirts" class="block py-2 text-4xl pl-28 pr-4  rounded text-black md:p-0 " aria-current="page">Shirt</Link>
              </li>
              <li>
                <Link to="/Tshirts" class="block py-2  text-4xl pl-28 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0">Tshirt</Link>
              </li>
              <li>
                <Link to="/Kurtis" class="block py-2  text-4xl pl-28 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0">Kurti</Link>
              </li>
              <li>
                <Link to="/Hoodies" class="block py-2  text-4xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0">Hoodie</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default NavBar;




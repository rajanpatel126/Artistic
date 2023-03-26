import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const Footer = () => {
  const linkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        linkRef.current.classList.add("visible");
      } else {
        linkRef.current.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#123822] mt-4">
      <div className="w-full h-16 bg-black justify-center text-center text-white text-2xl py-3">
        <NavLink
          ref={linkRef}
          to={"/"}
          onClick={handleClick}
          className="scroll-to-top-link hover:text-blue-500 hover:no-underline"
        >
          Back to Top
        </NavLink>
      </div>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <NavLink
            to={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          ></NavLink>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <div className="flex">
              <img
                src="./images/Logo.jpeg"
                // src={require("../../public/images/")}
                className="w-28 h-28 rounded-full mr-4"
                alt="logo"
              />

              <NavLink className=" text-white  text-4xl mt-9" to="/">
                Artisitc.com
              </NavLink>
            </div>
            <nav className="list-none text-left">
              <li className="mt-2 text-white text-2xl text-justify">
                Artistic is a online customised website which offers you
                different varity of products and to customised items as per your
                choice
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-5">
            <h2 className="title-font text-center text-white text-6xl mb-4 ">
              Shop
            </h2>
            <nav className="list-none text-3xl space-y-5 text-center">
              <li>
                <NavLink className="text-blue-600 hover:text-blue-800" to={"/"}>
                  Tshirts
                </NavLink>
              </li>
              <li>
                <NavLink className="text-blue-600 hover:text-blue-800" to={"/"}>
                  Hoodies
                </NavLink>
              </li>
              <li>
                <NavLink className="text-blue-600 hover:text-blue-800" to={"/"}>
                  Stickers
                </NavLink>
              </li>
              <li>
                <NavLink className="text-blue-600 hover:text-blue-800" to={"/"}>
                  Mugs
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <h2 className="title-font text-center text-white text-6xl mb-4 ">
              Get us to know
            </h2>
            <nav className="list-none text-3xl space-y-5 text-center">
              <li>
                <NavLink
                  className="text-blue-600  hover:text-blue-800"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-blue-600  hover:text-blue-800"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-blue-600  hover:text-blue-800"
                  to={"/"}
                >
                  Return Policy
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <h2 className="title-font text-center text-white text-6xl mb-4 ">
              Policy
            </h2>
            <nav className="list-none text-3xl space-y-5 text-center">
              <li>
                <NavLink className="text-blue-600 hover:text-blue-800" to={"/"}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink className="text-blue-600 hover:text-blue-800" to={"/"}>
                  Terms and Conditions
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto py-4 px-5 flex flex-col sm:flex-row">
          <p className="text-white text-3xl text-center sm:text-left mt-2">
            ©2023 All designs copyright by Artist. Privacy Policy | Terms of Use
            | Community for Artists | Return and Refund Policy
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-xl">
            <NavLink to={"/"} className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 hover:cursor-pointer hover:bg-blue-700"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </NavLink>
            <NavLink to={"/"} className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 hover:cursor-pointer hover:bg-blue-400"
                viewBox="0 0 24 24"
              >
                hello
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </NavLink>
            <NavLink to={"/"} className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 hover:cursor-pointer hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </NavLink>
            <NavLink to={"/"} className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-10 h-10 hover:cursor-pointer hover:bg-blue-400 hover:text-white"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </NavLink>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
      behavior: "smooth"
    });
  };
 


  return (
    <footer className="text-gray-600 bg-gray-700 body-font">
      <div className="w-full h-16 bg-black justify-center text-center text-white text-2xl py-3">
        <a
          ref={linkRef}
          href="#"
          onClick={handleClick}
          className="scroll-to-top-link hover:text-blue-500 hover:no-underline"
        >Back to Top
          </a>
      </div>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <img src="./images/pay.png" className="w-full h-56  rounded-lg mr-4" ></img> */}
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <div className="flex">
              <img src="./images/Logo.jpeg" className="w-16 h-16 rounded-lg mr-4" alt="logo" />

              <NavLink className=" text-white  text-4xl mt-3" to="/">Artisitc</NavLink>

            </div>
            <nav className="list-none mb-10 text-left">
              <li className="mt-2">
                <a className="text-white hover:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere harum molestias voluptatibus voluptas ea!</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-2">
            <h2 className="title-font font-medium text-center text-white  text-4xl mb-3 ">Shop</h2>
            <nav className="list-none mb-10 text-center">
              <li>
                <a className="text-blue-600  hover:text-blue-800 text-xl" href="#">Tshirts</a>
              </li>
              <li>
                <a className="text-blue-600 hover:text-blue-800 text-xl" href="#">Hoodies</a>
              </li>
              <li>
                <a className="text-blue-600 hover:text-blue-800 text-xl" href="#">Stickers</a>
              </li>
              <li>
                <a className="text-blue-600 hover:text-blue-800 text-xl" href="#">Mugs</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <h2 className="title-font font-medium text-left text-white text-4xl mb-3">Get us to know</h2>
            <nav className="list-none mb-10 text-left">
              <li>
                <NavLink className="text-blue-600  hover:text-blue-800 text-xl"
                  to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink className="text-blue-600  hover:text-blue-800 text-xl" to="/about">About Us</NavLink>
              </li>
              <li>
                <a className="text-blue-600  hover:text-blue-800 text-xl" href="#">Return Policy</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-3">
            <h2 className="title-font font-medium text-white text-left text-4xl mb-3">Policy</h2>
            <nav className="list-none mb-10 text-left">
              <li>
                <a className="text-blue-600 hover:text-blue-800 text-xl" href="#">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blue-600 hover:text-blue-800 text-xl" href="#">Terms and Conditions</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-xl text-center sm:text-left mt-2">©2023 All designs copyright by owner.
            Privacy Policy | Terms of Use | Community Safety & Anti-Hate Policies | Return and Refund Policy
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank"></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-xl">
            <a className="text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 hover:cursor-pointer hover:bg-blue-700" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 hover:cursor-pointer hover:bg-blue-400" viewBox="0 0 24 24">hello
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 hover:cursor-pointer hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-8 h-8 hover:cursor-pointer hover:bg-blue-400 hover:text-white" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>);

};

export default Footer;

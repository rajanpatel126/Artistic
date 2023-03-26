/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function NavBar() {
  const navigation = useNavigate();
  const handleSelect = (e) => {
    if (e.target.value === "Admin") {
      navigation("/AdminLogin");
    } else if (e.target.value === "User") {
      navigation("/login");
    } else if (e.target.value === "Artist") {
      navigation("/ArtistLogin");
    } else if (e.target.value === "Login") {
      navigation("/");
    }
  };

  const [show, setShow] = useState(false);

  const handleUserInfo = () => {
    if (localStorage.getItem("userEmail")?.length > 1) {
      setShow(true);
    }
  };

  const handleLogout = (e) => {
    localStorage.clear();
    console.log("sfhbfedvfde");
    navigation("/login");
  };
  let location = useLocation();
  useEffect(() => {
    handleUserInfo();
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className="bg-[#eabdff] px-2 sm:px-4 py-2.5 mb-4 sticky">
        <div className=" flex flex-wrap  items-center justify-between mx-auto">
          <Link to="/" className="flex items-start">
            <img
              // src={require("../../public/Logo.jpeg")}
              src={"./images/Logo.jpeg"}
              className="h-24 w-24 mr-3 ml-9 rounded-full "
              alt="Artistic Logo"
            />
            <span className="self-center text-5xl font-bold hover:no-underline active:no-underline whitespace-nowrap ">
              Artistic
            </span>
          </Link>
          <div className="flex md:order-2">
            <div className="relative hidden md:flex">
              <input
                name="text"
                type="text"
                placeholder="Search..."
                className="w-[300px] mt-12 p-2.5 text-3xl normal-case text-black outline-none bg-[#f3e1fc] focus:bg-white focus:border-black border-gray-500 border-2 focus:shadow-2xl rounded-xl"
              ></input>
              <AiOutlineSearch className="cursor-pointer text-black h-16 w-20 mt-12 p-1 ml-3 mr-1" />

              {!show && (
                <div className="relative group z-20">
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
                      value="Artist"
                      className=" px-3 py-4 cursor-pointer text-3xl  w-36 h-40 rounded-xl text-black"
                    >
                      Artist
                    </option>
                  </select>
                </div>
              )}
              {show && (
                <div className="flex flex-row my-auto mx-3">
                  <FaRegUserCircle size={30} className="my-auto" />
                  {/* <select
                    onChange={handleSelect}
                    className="cursor-pointer flex flex-row items-center text-5xl w-full px-3 mr-0 py-4 mt-4 text-center bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat "
                  >
                    <option
                      onClick={handleLogout}
                      value="User"
                      className="cursor-pointer px-3 py-4 text-3xl w-36 h-40 rounded-xl text-black"
                    >
                      Logout
                    </option>
                  </select> */}
                  <button className="text-5xl" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
            <AiOutlineShoppingCart className="ml-4 my-auto mt-4 mr-2 cursor-pointer text-6xl" />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden"></div>
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

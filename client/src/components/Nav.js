/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import LogReg from "./UserLogin/LogR";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          font-size: 1.5rem;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #00023d;
        color: white;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <>
      {/* <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div> */}

      <h2 className="text-6xl flex font-bold justify-center bg-white items-center text-center ">
        Artistic
      </h2>
      <Nav className="text-xl">
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists h-8">
            <nav
              aria-label="primary"
              className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
            >
              <div className="relative group">
                <button className="flex flex-row items-center text-3xl w-full px-4 py-4 mt-4 text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat ">
                  <span className="text-4xl text-black flex">
                    Login
                    <IoMdArrowDropdown className=" text-black" />
                  </span>
                  {/* <MdArrowDropDown/> */}
                </button>
                <div className=" z-10 hidden absolute -my-4 ml-10  group-hover:block">
                  <div className="px-3 py-4 pt-2 pb-2 bg-slate-200 w-36 h-40 rounded-xl text-black">
                    {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> */}
                    <ul className="space-y-2">
                      <li>
                        <NavLink
                          to="/UserLogin"
                          className="navbar-link text-xl"
                        >
                          User
                        </NavLink>
                      </li>
                      <hr className="leading-tight" />
                      <li>
                        <NavLink to="/AdminLogin" className="navbar-link">
                          Admin
                        </NavLink>
                      </li>
                      <hr />
                      <li>
                        <NavLink to="/ArtistLogin" className="navbar-link">
                          Artist
                        </NavLink>
                      </li>
                    </ul>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </nav>

            {/* <li>
              <NavLink
                to="/artist"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                <span className="text-3xl">Artist</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Admin"
                className="navbar-link "
                onClick={() => setMenuIcon(false)}
              >
                <span className="text-3xl">Admin</span>
              </NavLink>
            </li> */}

            <li>
              <NavLink to="/cart" className="navbar-link cart-trolley--link">
                <FiShoppingCart className="cart-trolley" />
                <span className="cart-total--item"> 10 </span>
              </NavLink>
            </li>
          </ul>

          {/* two button for open and close of menu */}
          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Nav;

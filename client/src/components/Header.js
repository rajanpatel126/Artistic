import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <MainHeader className="sticky bg-white">
        <NavLink to="/">
          <img
            className="w-24 h-24 rounded-full"
            src="./images/Logo.jpeg"
            alt="my logo img"
          />
        </NavLink>
        <Nav />
      </MainHeader>
    </>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
    border-radius: 10px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Header;

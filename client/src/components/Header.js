import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
      <>
        <MainHeader className="fixed bg-slate-100">
            <NavLink to="/">
                <img className="logo" src="./images/Logo.jpeg" alt="my logo img" />
            </NavLink>
            {/* <p className="title flex text-lg justify-center align-middle">Arttistic</p> */}
          
        <Nav />
        
      </MainHeader>
      <div className="w-screen bg-[#00023D] font-semibold text-white">
			{/* <p className="text-center mb-2">
				Get 50% Off on first 2 orders from different categories
			</p> */}
      </div>
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
    border-radius:10px;
  }

  .title{
    display:flex;
    justify-content: center;
    align-items: center;
  }

`;
export default Header;
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { verifyUser } from "../../api/user";
import { useNavigate } from "react-router-dom";

export const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await verifyUser({ emailAddress: email, password: pass });
    localStorage.setItem("email", email);
    if (data?.user?.isAdmin) {
      navigate("/Admin");
    } else {
    }
    // console.log(data);
  };

  return (
    <>
      <div className="auth-form-container bg-slate-400 bg-opacity-75 md:bg-opacity-75 justify-center w-96">
        <div className="logoimg">
          <img src="./images/logo1.jpeg" className="img1 " alt="hello" />
          <p className="text-white text-4xl mt-1 mb-20">Admin Login</p>
        </div>

        <form className="login-form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-xl h-16"
            type="email"
            placeholder="Username or Email Address"
            id="email"
            name="email"
          ></input>

          <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              console.log(pass);
            }}
            type="password"
            className="text-xl h-16"
            placeholder="Password"
            id="password"
            name="password"
          />
          <NavLink to="/AdminForgotPassword" className="forgot text-2xl">
            Forgot Password?
          </NavLink>
          <button onClick={handleSubmit} className="button1 bg-blue-700 mb-4">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log(email);
  };

  return (
    <div className="Register bg-gradient-to-r from-slate-400 to-blue-300 py-24">
      <div className="auth-form-container mx-auto bg-slate-700  bg-opacity-75 md:bg-opacity-75 justify-center w-96 ">
        <div className="logoimg">
          <img
            src="./images/logo1.jpeg"
            className="w-24 h-24 rounded-full"
            alt="hello"
          />
          <p className=" text-white text-4xl mt-2 mb-4">Register</p>
        </div>

        <form className="register-form " onSubmit={handleSubmit}>
          {/* <label className="text-4xl space-x-3" htmlFor="name">User Name: </label> */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            className="text-3xl normal-case h-20"
            placeholder="Username"
          ></input>
          <label htmlFor="email"></label>
          <input
            value={email}
            className="text-3xl normal-case h-20"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Mobile number or Email"
            id="email"
            name="email"
          ></input>
          <label htmlFor="password"></label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="text-3xl normal-case h-20"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button className="text-3xl mx-auto w-fit p-3 bg-blue-900" type="submit">
            Register
          </button>
        </form>

        <label className="l1-r text-white text-3xl mx-auto">
          Already have an account?
          <NavLink to={"/Login"}>
            <button className="text-3xl focus:outline-none bg-transparent text-[#21deeb] cursor-pointer  hover:text-[#e9a511]">
              Login here.
            </button>
          </NavLink>

        </label>

        <label className="or-r text-2xl">
          OR
        </label>
        <button className="btn-r btn-google-r">
          <span className="icon-r p-1 mb-2">
            <img src="./images/google.png" className="imgc" alt="google" />
            Sign-in with Google
          </span>
        </button>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log(email);
  };

  return (
    <div className="Register bg-gradient-to-r from-slate-400 to-blue-300 py-24">
    <div className="auth-form-container mx-auto bg-slate-700 bg-opacity-75 md:bg-opacity-75 justify-center w-96">
      <div className="logoimg">
        <img
          src="./images/logo1.jpeg"
          className="rounded-full w-24 h-24"
          alt="hello"
        />
        <p className="text-white text-4xl mt-2 mb-4 "> Login</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-3xl normal-case h-20 "
          type="email"
          placeholder="Username or Email Address"
          id="email"
          name="email"
        ></input>

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          className="text-3xl normal-case h-20 "
          placeholder="Password"
          id="password"
          name="password"
        />
        <NavLink to="/Login/forgotPassword" className="text-[#21deeb] mx-2 text-3xl">
          Forgot Password?
        </NavLink>

        <button
          className="text-3xl mx-auto w-fit mt-4 p-3 bg-blue-900 "
          type="submit"
        >
          Login
        </button>
      </form>

      <label htmlFor="" className="l1 mx-auto text-3xl">
        Don't have an account?{" "}
        <NavLink to={"/Register"}>
            <button className="text-3xl focus:outline-none bg-transparent text-[#21deeb] cursor-pointer hover:text-[#e9a511]">
            Register here.
          </button>
        </NavLink>
      </label>

      <label htmlFor="" className="or text-2xl">
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

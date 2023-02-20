import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import logo from "./images/logo1.jpeg";
// import google from "./images/google.png";

export const ArtistLogin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log(email);
  };

  return (
    <div className="auth-form-container bg-slate-400 bg-opacity-75 md:bg-opacity-75 justify-center w-96">
      <div className="logoimg">
        <img src="./images/logo1.jpeg" className="img1 " alt="hello" />
        <p className="text-white text-4xl mt-1 mb-4 ">Artist Login</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
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
          onChange={(e) => setPass(e.target.value)}
          type="password"
          className="text-xl h-16"
          placeholder="Password"
          id="password"
          name="password"
        />
        <NavLink to="/ArtistForgotPassword" className="forgot text-2xl">
          Forgot Password?
        </NavLink>
        <button className="button1 bg-blue-700" type="submit">
          Login
        </button>
      </form>

      <label htmlhtmlFor="" className="l1 text-2xl">
        Don't have an account?
        <button
          className="link-btn hover:text-blue-800"
          onClick={() => props.onFormSwitch("register")}
        >
          Register here.
        </button>
      </label>

      <label htmlhtmlFor="" className="or text-2xl">
        OR
      </label>
      <button className="btn-l btn-google-l">
        <span className="icon-l texting-l">
          <img src="./images/google.png" alt="google" className="imgc" />
          Sign-in with Google
        </span>
      </button>
    </div>
  );
};

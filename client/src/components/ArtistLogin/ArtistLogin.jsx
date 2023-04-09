import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { verifyArtist } from "../../api/artist";

export const ArtistLogin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await verifyArtist({
      emailAddress: email,
      password: pass,
    });
    localStorage.setItem("ArtistEmail", email);
    localStorage.setItem("ArtistId", data?.artist?.id);
    if (data?.artist) {
      navigate("/ArtistPanel");
    }
  };

  return (
    <div className=" bg-gradient-to-r from-blue-300 to-slate-400 py-24">
      <div className="flex justify-center text-7xl mb-2 font-bold">
        Artist login
      </div>
      <div className="auth-form-container mx-auto bg-slate-700 bg-opacity-75 md:bg-opacity-75 justify-center w-96">
        <div className="logoimg">
          <img
            src="./images/logo1.jpeg"
            className="rounded-full w-24 h-24"
            alt="hello"
          />
          <p className="text-white text-4xl mt-2 mb-4 ">Login</p>
        </div>

        <form className="login-form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-3xl normal-case h-20 "
            type="email"
            placeholder="Username or Email Address"
            id="email"
            name="email"
          ></input>

          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="text-3xl normal-case h-20 "
            placeholder="Password"
            id="password"
            name="password"
          />
          <NavLink
            to="/ArtistLogin/ArtistForgotPassword"
            className="text-[#21deeb] mx-2 text-3xl"
          >
            Forget Password?
          </NavLink>
        </form>
        <button
          onClick={handleSubmit}
          className="text-3xl mx-auto w-fit rounded-xl mb-4 mt-4 p-3 bg-blue-400 "
        >
          Login
        </button>

        <label htmlFor="" className="l1 mx-auto text-3xl">
          Don't have an account?{" "}
          <NavLink to={"/ArtistRegister"}>
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

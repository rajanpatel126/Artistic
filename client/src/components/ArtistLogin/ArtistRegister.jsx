import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addArtist } from "../../api/artist";

export const ArtistRegister = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setphoneNo] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addArtist({
      emailAddress: email,
      password: pass,
      name: name,
      phone: phoneNo,
    });
    if (data.success) {
      navigate("/ArtistPanel");
    } else {
      alert(data.errors);
    }
    localStorage.setItem("Artist Email", email);
    localStorage.setItem("Artist Phone No", phoneNo);
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-slate-400 mb-4 py-24">
      <div className="auth-form-container mx-auto bg-slate-700 border-2 border-black md:bg-opacity-75 justify-center">
        <div className="logoimg">
          <img
            src="./images/logo1.jpeg"
            className="w-28 h-28 -mt-7 rounded-full"
            alt="hello"
          />
          <p className=" text-white text-4xl mt-2 mb-4">Register</p>
        </div>

        <form className="register-form" >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            className="text-3xl normal-case h-20"
            placeholder="Name"
          ></input>
          <label htmlFor="email"></label>
          <input
            required
            value={email}
            className="text-3xl normal-case h-20"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          ></input>

          <label htmlFor="Phone no"></label>
          <input
            required
            value={phoneNo}
            className="text-3xl normal-case h-20"
            onChange={(e) => setphoneNo(e.target.value)}
            type="number"
            placeholder="Phone no"
            id="phoneno"
            name="phoneno"
          ></input>
          <label htmlFor="password"></label>
          <input
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="text-3xl normal-case h-20"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button
            onClick={handleSubmit}
            className="text-4xl rounded-xl mx-auto w-fit mt-2 p-3 bg-green-400 "
            type="submit"
          >
            Register
          </button>
        </form>

        <label className="l1-r text-white text-3xl mt-2 mx-auto">
          Already have an account?
          <NavLink to={"/ArtistLogin"}>
            <button className="text-3xl focus:outline-none bg-transparent text-[#21deeb] cursor-pointer  hover:text-[#e9a511]">
              Login here.
            </button>
          </NavLink>
        </label>
        <label className="or-r text-4xl">OR</label>
        <button className="btn-r btn-google-r my-3">
          <span className="icon-r p-1 mb-2">
            <img src="./images/google.png" className="imgc" alt="google" />
            Sign-in with Google
          </span>
        </button>
      </div>
    </div>
  );
};

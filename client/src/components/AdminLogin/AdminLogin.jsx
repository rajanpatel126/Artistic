import React, { useState } from "react";
import { NavLink } from "react-router-dom";



export const AdminLogin = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(email);
    }


    return (

        <div className="auth-form-container bg-slate-400 bg-opacity-75 md:bg-opacity-75 justify-center w-96">

            <div className="logoimg">
                <img src="./images/logo1.jpeg" className="img1 " alt="hello" />
                <p className="text-white text-4xl mt-1 mb-20">Admin Login</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="text-xl h-16" type="email" placeholder="Username or Email Address" id="email" name="email"></input>

                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="text-xl h-16" placeholder="Password" id="password" name="password" />
                <NavLink
                    to="/AdminForgotPassword"
                    className="forgot text-2xl">
                    Forgot Password?
                </NavLink>
                <button className="button1 bg-blue-700 mb-24" type="submit">Login</button>
            </form>

        

            <label htmlFor="" class="or text-2xl">OR</label>
            <button class="btn-l btn-google-l mb-11">
                <span class="icon-l texting-l">
                    <img src="./images/google.png" alt="google" className="imgc" />
                    Sign-in with Google
                </span>

            </button>
        </div>

    );
}
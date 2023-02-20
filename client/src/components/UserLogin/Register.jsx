import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(email);
    }

    return (
        <>
        
        <div className="auth-form-container bg-slate-400 bg-opacity-75 md:bg-opacity-75 justify-center w-96 ">
           
            <div className="logoimg">
                <img src="./images/logo1.jpeg" className="img1" alt="hello" />
                <p className=" text-white text-4xl mt-1 mb-4"> Register</p>
            </div>


            <form className="register-form " onSubmit={handleSubmit}>

                <label htmlFor="name"></label>
                    <input value={name} name="name" id="name" className="text-xl h-16" placeholder="Username"></input>
                <label htmlFor="email"></label>
                    <input value={email} className="text-xl h-16" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Mobile number or Email" id="email" name="email"></input>
                <label htmlFor="password"></label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="text-xl h-16" placeholder="Password" id="password" name="password" />
                <button className="button1 bg-blue-700" type="submit">Register</button>
            </form>


            <label htmlFor="" className="l1-r text-2xl ">Already have an account?<button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login here.</button></label>

            <label htmlFor="" class="or-r text-2xl">OR</label>
            <button class="btn-r btn-google-r">
                <span class="icon-r texting-r">
                    <img src="./images/google.png" className="imgc" alt="google" />
                    Sign-in with Google
                </span>
            </button>

        </div>
    </>
    );


}
import React, { useState } from "react";

 import './logincss.css';
import { AdminLogin } from './AdminLogin';
import { AdminRegister } from './AdminRegister';


function LogrAdmin() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (forname) => {
        setCurrentForm(forname);
    }

    return (
        <div className="App2 bg-[url('https://images.template.net/wp-content/uploads/2015/11/25190558/Plain-Dark-Blue-Background-Images-Download.jpg')]" >
            {
                currentForm === "login" ? <AdminLogin onFormSwitch={toggleForm} /> : <AdminRegister onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default LogrAdmin;

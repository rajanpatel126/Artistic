import React, { useState } from "react";
import { ArtistLogin } from './ArtistLogin';
import { ArtistRegister } from './ArtistRegister';
import './artistcss.css';

function LogrArtist() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (forname) => {
        setCurrentForm(forname);
    }

    return (
        <div className="App1 bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMS1jb25jcmV0ZS1hZXctMzRfNC5qcGc.jpg?s=GB3i4ojlRjxuoNEP15uPOGbZum9HQLYVxseUwGWr10U')]" >
            {
                currentForm === "login" ? <ArtistLogin onFormSwitch={toggleForm} /> : <ArtistRegister onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default LogrArtist;

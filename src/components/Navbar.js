import React from 'react';
import developer from '../images/developer.png';
import sun from '../images/sun-icon.png';
import moon from '../images/moon.png';
import {useState} from 'react';

const Navbar = () =>{

    const [logoImg,setLogoImg] = useState(sun);

    const handleDarkMode = () =>{
        if(logoImg === sun)
        {
            setLogoImg(moon);
        }
        else
        {
            setLogoImg(sun);
        }
    }

    return(
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={developer} alt="logo"/>
                    <span id="logo_text">DevAwesome</span>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">ContactUs</a></li>
                        <li><a href="#">SignUp</a></li>
                        <li><img src={logoImg} alt='dark-mode' onClick={handleDarkMode}/></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
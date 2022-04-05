import React from 'react';
import developer from '../images/developer.png';
import sun from '../images/sun-icon.png';
import moon from '../images/moon.png';
import {useState} from 'react';
import {Link} from 'react-router-dom';

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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">ContactUs</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><img src={logoImg} alt='dark-mode' onClick={handleDarkMode}/></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
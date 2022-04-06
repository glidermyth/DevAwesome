import React from 'react';
import developer from '../images/developer.png';
import sun from '../images/sun-icon.png';
import moon from '../images/moon2.png';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) =>{

    const [logoImg,setLogoImg] = useState(sun);

    const handleDarkMode = () =>{
        if(logoImg === sun)
        {
            setLogoImg(moon);
            props.darkModeHandler(true);
        }
        else
        {
            props.darkModeHandler(false);
            setLogoImg(sun);
        }
    }

    return(
        <div className={props.darkMode?"navbarDarkMode":"navbar"}>
            <nav>
                <div className="logo">
                    <img src={developer} alt="logo"/>
                    <span id={props.darkMode?"logo_textDark":"logo_textLight"}>DevAwesome</span>
                </div>
                <div className="links">
                    <ul>
                        <li className={props.darkMode?"liDarkMode":"liLightMode"}><Link to="/">Home</Link></li>
                        <li className={props.darkMode?"liDarkMode":"liLightMode"}><Link to="/services">Services</Link></li>
                        <li className={props.darkMode?"liDarkMode":"liLightMode"}><Link to="/contact">ContactUs</Link></li>
                        <li className={props.darkMode?"liDarkMode":"liLightMode"}><Link to="/signup">SignUp</Link></li>
                        <li><img src={logoImg} alt='dark-mode' onClick={handleDarkMode}/></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
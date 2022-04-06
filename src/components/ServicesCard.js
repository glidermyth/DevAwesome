import React from 'react';
import searchImg from '../images/searchtwo.png';

const ServicesCard = (props) =>{
    return(
        <div className='servicesCard'>
            <div className={props.darkMode?'servicesCardBody servicesCardBodyDark':'servicesCardBody servicesCardBodyLight'}>
                <div className="servicesCardImage">
                    <img src={props.cardImg} alt="servicesCardImage" />
                </div>
                <div className="servicesCardText">
                    <p className={props.darkMode?"servicesCardTextLight":"servicesCardTextDark"}>{props.cardText}</p>
                </div>
            </div>
            <div className="servicesCardHover">
                <img src={searchImg} alt="searchImage" />
            </div>
        </div>
    );
}

export default ServicesCard;
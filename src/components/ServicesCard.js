import React from 'react';
import searchImg from '../images/searchtwo.png';

const ServicesCard = (props) =>{
    return(
        <div className='servicesCard'>
            <div className='servicesCardBody'>
                <div className="servicesCardImage">
                    <img src={props.cardImg} alt="servicesCardImage" />
                </div>
                <div className="servicesCardText">
                    <p>{props.cardText}</p>
                </div>
            </div>
            <div className="servicesCardHover">
                <img src={searchImg} alt="searchImage" />
            </div>
        </div>
    );
}

export default ServicesCard;
import React from 'react';
import priceTag from '../images/price-tag.png';

const Card = (props) =>{
    return(
        <div className={props.darkMode?"card cardLightMode":"card cardLightMode"}>
            <p className={props.darkMode?"card-p-light":"card-p-dark"}>{props.planName}</p>
            <div className="price">
                <img src={priceTag} alt="price-tag"/>
                <div className="price-text">
                    <p>{props.actualPrice}Rs</p>
                    <p>{props.discountPrice}Rs/month</p>
                </div>
            </div>
            <hr/>
            <div className={props.darkMode?"card-features card-features-light":"card-features card-features-dark"}>
                <ul>
                    <li>{props.cpuCount} vcpu from {props.cpuBrand}</li>
                    <li>{props.ssd}GB ssd storage</li>
                    <li>{props.ram}GB RAM</li>
                    <li>Secure SSL certificate</li>
                    <li>{props.visitors} visitors</li>
                    <li>{props.bandwidth} bandwidth</li>
                    <li>99.9% uptime</li>
                    <li>24 x 7 support</li>
                </ul>
            </div>
            <button>Select</button>
        </div>
    );
}

export default Card;
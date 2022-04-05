import React from 'react';
import builder from '../images/pablita-builder.png';
import arrow from '../images/arrow-two.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

const LowerBody = () =>{
    return(
        <div className="lowerBody">
            <div className='websiteBuilder'>
                <div className="websiteBuilder-text">
                    <p>You can also checkout our website builders</p>
                    <p>for hastle free website development</p>
                    <p>and</p>
                    <p>Services</p>
                    <span>
                        <button>Check Out</button>
                        <img src={arrow} alt="arrow" />
                    </span>
                </div>
                <img src={builder} alt="builder" className='websiteBuilder-image'/>
            </div>
            <div className="footer">
                <div className="footer-text">
                    <p className="footer-comp-text">DevAwesome</p>
                    <div className="footer-desc-text">
                    <p>DevAwesome is a Cloud Hosting Company.</p>
                    <p>We provide the best cloud servers at</p>
                    <p>minimal price.</p>
                    </div>
                </div>
                <div className="footer-links">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
        </div>
    );
}

export default LowerBody;
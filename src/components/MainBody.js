import React from 'react';
import pc_server from '../images/pc_server.png';
import ballon1 from '../images/ballons1.png';
import ballon2 from '../images/ballons2.png';
import Card from './Card';
import LowerBody from './LowerBody';

const MainBody = () =>{
    return(
        <div className="main_body">
            <section className="sidebar">
                
            </section>
            <main>
                <div className="intro">
                    <span>Get Fast Cloud Computing, 
                        <span id="intro_price_text"> At affordable price</span>
                    </span>
                    <img src={pc_server} alt="server"/>
                </div>
                <div className="fancy_text">
                    <p>"Simplicity and Excellence"</p>
                </div>
                <div className="price-section">
                    <div className="price-section-text">
                        <img src={ballon1} alt="ballon1" />
                        <p>Our different plans for various people</p>
                        <img src={ballon2} alt="ballon2" />
                    </div>
                    <div className="price-section-cards">
                        <Card 
                            planName="BASIC" 
                            actualPrice="260"
                            discountPrice="120"
                            cpuCount="1" 
                            cpuBrand="intel" 
                            ssd="25" 
                            ram="1" 
                            visitors="10000" 
                            bandwidth="1000" 
                        />
                        <Card 
                            planName="Premium" 
                            actualPrice="560"
                            discountPrice="360"
                            cpuCount="2" 
                            cpuBrand="intel xeon" 
                            ssd="45" 
                            ram="2" 
                            visitors="Unlimited" 
                            bandwidth="Unlimited" 
                        />
                        <Card 
                            planName="Professional" 
                            actualPrice="999"
                            discountPrice="720"
                            cpuCount="4" 
                            cpuBrand="AMD" 
                            ssd="85" 
                            ram="6" 
                            visitors="Unlimited" 
                            bandwidth="Unlimited" 
                        />
                    </div>
                </div>
                <div className='LowerBody-section'>
                    <LowerBody />
                </div>
            </main>
        </div>
    );
}

export default MainBody;
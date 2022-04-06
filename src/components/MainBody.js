import React from 'react';
import pc_server from '../images/pc_server.png';
import ballon1 from '../images/ballons1.png';
import ballon2 from '../images/ballons2.png';
import Card from './Card';
import LowerBody from './LowerBody';

const MainBody = (props) =>{
    return(
        <div className={props.darkMode?"main_bodyDark main_body":"main_body"}>
            <section className="sidebar">
                
            </section>
            <main>
                <div className="intro">
                    <span className={props.darkMode?'introTestLight':'introTestDark'}>Get Fast Cloud Computing, 
                        <span id="intro_price_text" className={props.darkMode?'introPriceTextLight':'introPriceTextDark'}> At affordable price</span>
                    </span>
                    <img src={pc_server} alt="server"/>
                </div>
                <div className={props.darkMode?"fancy_text fancy_textLight":"fancy_text fancy_textDark"}>
                    <p>"Simplicity and Excellence"</p>
                </div>
                <div className="price-section">
                    <div className={props.darkMode?"price-section-text price-section-text-light":"price-section-text price-section-text-dark"}>
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
                            darkMode={props.darkMode}
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
                            darkMode={props.darkMode}
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
                            darkMode={props.darkMode}
                        />
                    </div>
                </div>
                <div className='LowerBody-section'>
                    <LowerBody darkMode={props.darkMode}/>
                </div>
            </main>
        </div>
    );
}

export default MainBody;
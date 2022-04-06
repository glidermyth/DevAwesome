import React from 'react';
import ServicesCard from './ServicesCard';
import serverImg from '../images/server.jpg';
import domainImg from '../images/domaintwo.jpg';
import seoImg from '../images/seo.jpg';
import smsImg from '../images/messageSenttwo.jpg';
import appImg from '../images/apps.jpg';
import webImg from '../images/web.jpg';

const Services = (props) =>{
    return(
        <div className="Services">
            <div className={props.darkMode?'servicesBody servicesBodyDark':'servicesBody servicesBodyLight'}>
                <ServicesCard cardImg={serverImg} cardText="Best Hosting" darkMode={props.darkMode}/>
                <ServicesCard cardImg={domainImg} cardText="Domain Service" darkMode={props.darkMode}/>
                <ServicesCard cardImg={seoImg} cardText="SEO Service" darkMode={props.darkMode}/>
                <ServicesCard cardImg={smsImg} cardText="Bulk SMS" darkMode={props.darkMode}/>
                <ServicesCard cardImg={appImg} cardText="App Development" darkMode={props.darkMode}/>
                <ServicesCard cardImg={webImg} cardText="Web Development" darkMode={props.darkMode}/>
            </div>
        </div>
    );
}

export default Services;
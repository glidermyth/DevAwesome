import React from 'react';
import ServicesCard from './ServicesCard';
import serverImg from '../images/server.jpg';
import domainImg from '../images/domaintwo.jpg';
import seoImg from '../images/seo.jpg';
import smsImg from '../images/messageSenttwo.jpg';
import appImg from '../images/apps.jpg';
import webImg from '../images/web.jpg';

const Services = () =>{
    return(
        <div className="Services">
            <div className='servicesBody'>
                <ServicesCard cardImg={serverImg} cardText="Best Hosting"/>
                <ServicesCard cardImg={domainImg} cardText="Domain Service"/>
                <ServicesCard cardImg={seoImg} cardText="SEO Service"/>
                <ServicesCard cardImg={smsImg} cardText="Bulk SMS"/>
                <ServicesCard cardImg={appImg} cardText="App Development"/>
                <ServicesCard cardImg={webImg} cardText="Web Development"/>
            </div>
        </div>
    );
}

export default Services;
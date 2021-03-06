import React from 'react';
import emailImg from '../images/email.png';
import emailImgLight from '../images/email-light.png';
import phoneImg from '../images/phone.png';
import phoneImgLight from '../images/phone-light.png';
import messageImg from '../images/message.png';
import messageImgLight from '../images/message-light.png';
import contactUsImg from '../images/contactUs.png';

const ContactUs = (props) =>{
    return(
        <div className={props.darkMode?"contactUs contactUsDark":"contactUs contactUsLight"}>
            <div className="contactUsBody">
                <div className="contactUs-form">
                    <span>
                        <img src={props.darkMode?emailImgLight:emailImg} alt="email" />
                        <label htmlFor='email' className={props.darkMode?"contactUs-span-label-dark":"contactUs-span-label-light"}>Email</label>
                        <input type="text" name="email" />
                    </span>
                
                    <span>
                        <img src={props.darkMode?phoneImgLight:phoneImg} alt="phone" />
                        <label htmlFor='phone' className={props.darkMode?"contactUs-span-label-dark":"contactUs-span-label-light"}>Phone</label>
                        <input type="text" name="phone" />
                    </span>
                
                    <span>
                        <img src={props.darkMode?messageImgLight:messageImg} alt="message" />
                        <label htmlFor='message' className={props.darkMode?"contactUs-span-label-dark":"contactUs-span-label-light"}>Message</label>
                        <input type="text" name="message" />
                    </span>
                    <button className='contactUs-submit-btn'>Send</button>
                </div>
                <div className="contactUs-image">
                    <img src={contactUsImg} alt="contactUsImage" />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
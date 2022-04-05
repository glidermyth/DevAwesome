import React from 'react';
import emailImg from '../images/email.png';
import phoneImg from '../images/phone.png';
import messageImg from '../images/message.png';
import contactUsImg from '../images/contactUs.png';

const ContactUs = () =>{
    return(
        <div className="contactUs">
            <div className="contactUsBody">
                <div className="contactUs-form">
                    <span>
                        <img src={emailImg} alt="email" />
                        <label htmlFor='email'>Email</label>
                        <input type="text" name="email" />
                    </span>
                
                    <span>
                        <img src={phoneImg} alt="phone" />
                        <label htmlFor='phone'>Phone</label>
                        <input type="text" name="phone" />
                    </span>
                
                    <span>
                        <img src={messageImg} alt="message" />
                        <label htmlFor='message'>Message</label>
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
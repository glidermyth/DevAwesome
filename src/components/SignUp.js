import React from 'react';
import {Link} from 'react-router-dom';
import signUpImg from '../images/pablita-success.png';

const SignUp = (props) =>{
    return(
        <div className={props.darkMode?"signUpDark":"signUpLight"}>
            <div className='signUpBody'>
                <div className='signUpForm'>
                    <div className='circle1'></div>
                    <div className={props.darkMode?'signUpFormBody signUpFormBodyDark':'signUpFormBody signUpFormBodyLight'}>
                        <p className={props.darkMode?"textLight":"textDark"}>SignUp</p>
                        <span>
                            <label htmlFor='username' className={props.darkMode?"textLight":"textDark"}>UserName</label>
                            <input type="text" name="username" />
                        </span>
                        <span>
                            <label htmlFor='email' className={props.darkMode?"textLight":"textDark"}>Email</label>
                            <input type="text" name="email" />
                        </span>
                        <span>
                            <label htmlFor='password' className={props.darkMode?"textLight":"textDark"}>Password</label>
                            <input type="password" name="password" />
                        </span>
                        <span>
                            <label htmlFor='phone' className={props.darkMode?"textLight":"textDark"}>Phone</label>
                            <input type="text" name="phone" />
                        </span>
                        <div className={props.darkMode?"textLight signUpButtons":"textDark signUpButtons"}>
                            <Link to="/login">Login</Link>
                            <button className='signUpBtn'>SignUp</button>
                        </div>
                    </div>
                    <div className='circle2'></div>
                </div>
                <div className='signUpImage'>
                    <img src={signUpImg} alt="signUpImage" />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
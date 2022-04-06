import React from 'react';
import securityImg from '../images/security.png';

const SignUp = (props) =>{
    return(
        <div className="login">
            <div className={props.darkMode?'loginBody loginBodyDark':'loginBody loginBodyLight'}>
                <div className='loginForm'>
                    <div className='loginCircle1'></div>
                    <div className={props.darkMode?'loginFormBody loginFormBodyDark':'loginFormBody loginFormBodyLight'}>
                        <p className={props.darkMode?"loginTextLight":"loginTextDark"}>Login</p>
                        <span>
                            <label htmlFor='email' className={props.darkMode?"loginTextLight":"loginTextDark"}>Email</label>
                            <input type="text" name="email" />
                        </span>
                        <span>
                            <label htmlFor='password' className={props.darkMode?"loginTextLight":"loginTextDark"}>Password</label>
                            <input type="password" name="password" />
                        </span>
                        <button className='loginBtn'>Login</button>
                    </div>
                    <div className='loginCircle2'></div>
                </div>
                <div className='loginImage'>
                    <img src={securityImg} alt="signUpImage" />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
import React from 'react';
import securityImg from '../images/security.png';

const SignUp = () =>{
    return(
        <div className="login">
            <div className='loginBody'>
                <div className='loginForm'>
                    <div className='loginCircle1'></div>
                    <div className='loginFormBody'>
                        <p>Login</p>
                        <span>
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" />
                        </span>
                        <span>
                            <label htmlFor='password'>Password</label>
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
import React from 'react';
import signUpImg from '../images/pablita-success.png';

const SignUp = () =>{
    return(
        <div className="signUp">
            <div className='signUpBody'>
                <div className='signUpForm'>
                    <div className='circle1'></div>
                    <div className='signUpFormBody'>
                        <p>SignUp</p>
                        <span>
                            <label htmlFor='username'>UserName</label>
                            <input type="text" name="username" />
                        </span>
                        <span>
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" />
                        </span>
                        <span>
                            <label htmlFor='password'>Password</label>
                            <input type="password" name="password" />
                        </span>
                        <span>
                            <label htmlFor='phone'>Phone</label>
                            <input type="text" name="phone" />
                        </span>
                        <button className='signUpBtn'>SignUp</button>
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
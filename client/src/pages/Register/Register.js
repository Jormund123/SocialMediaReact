import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
    const email = useRef(); //we could also use useState hook here but everytime we wrote sth inside the email box, it would re-render the component and we have to minimize re-rendering
    const password = useRef();
    const username = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords don't match.");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Echoes</h3>
                    <span className='loginDesc'>Connect with friends and the world around on Echoes</span>
                </div>
                <div className='loginRight'>
                    <form className='loginBox' onSubmit={handleClick}>
                        <input placeholder='Username' required ref={username} className='loginInput' />
                        <input placeholder='Email' type='email' required ref={email} className='loginInput' />
                        <input
                            placeholder='Password'
                            type='password'
                            required
                            ref={password}
                            className='loginInput'
                            minLength='6'
                        />
                        <input
                            placeholder='Confirm Password'
                            type='password'
                            required
                            ref={passwordAgain}
                            className='loginInput'
                        />
                        <button className='loginButton' type='submit'>
                            Sign Up
                        </button>
                        <button className='loginRegisterButton'>Log Into Your Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

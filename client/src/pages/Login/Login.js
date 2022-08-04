import React, { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
    const email = useRef(); //we could also use useState hook here but everytime we wrote sth inside the email box, it would re-render the component and we have to minimize re-rendering
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Echoes</h3>
                    <span className='loginDesc'>Connect with friends and the world around on Echoes</span>
                </div>
                <div className='loginRight'>
                    <form className='loginBox' onSubmit={handleSubmit}>
                        <input placeholder='Email' type='email' className='loginInput' ref={email} required />
                        <input
                            placeholder='Password'
                            type='password'
                            minLength='6'
                            className='loginInput'
                            ref={password}
                            required
                            autoComplete='true'
                        />
                        <button className='loginButton' disabled={isFetching}>
                            {isFetching ? <CircularProgress color='info' size='25px' /> : "Log In"}
                        </button>
                        <span className='loginForgot'>Forgot Password</span>
                        <button className='loginRegisterButton'>
                            {isFetching ? <CircularProgress color='info' size='25px' /> : "Create An Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

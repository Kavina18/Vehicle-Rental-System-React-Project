import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import source from './Logo_Gocars.png';

export function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/login');
    };

    return (
        <div className="sign_up">
            <img src={source} alt="GoCars" id="logo" />
            <form className='sign_up_form' onSubmit={handleSubmit}>
                <h2 className='sign_up_heading'>Sign Up</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" required value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label id="lpassword" htmlFor="password">Password:</label>
                    <input id="password" type="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit" className='sign_up_button'>SignUp</button>
                <p className='already_sign_in'>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
};
import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import './Login.css'
import img from '../../images/events.jpeg'
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => setError('Error  ', error));
    }
    return (
        <div className='flex'>
            <div className='w-2/3'>
                <img src={img} alt="" />

            </div>
            <div className='form-container mt-10 w-1/3'>
                <h2 className='form-title text-green-700 pt-10'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <input className='btn-submit bg-green-300' type="submit" value="Login" />
                </form>
                <p className='text-error'>{error}</p>
                <p>New to ema john <Link to='/signup'>Create a New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;
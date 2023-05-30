import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../images/events.jpeg'
import { AuthContext } from '../../contexts/UserContext';

const Signup = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 3) {
            setError('Password should be 4 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => console.error(error));

    }
    return (
        <div className='flex'>
            <div className='w-2/3'>
                <img src={img} alt="" />

            </div>
            <div className='form-container'>
                <h2 className='form-title text-green-700 pt-10'>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mt-10">
                        <label htmlFor="name">Name initial</label>
                        <input type="text" name="Name" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <input className='btn-submit bg-green-400' type="submit" value="Sign Up" />
                </form>
                <p>Already Have an Account <Link to='/login'>Log in</Link></p>
                <p className='text-error'>{error}</p>
            </div>
        </div>
    );
};

export default Signup;
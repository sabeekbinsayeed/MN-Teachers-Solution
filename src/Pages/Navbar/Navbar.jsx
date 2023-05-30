import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-green-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link to='/routine'>Routine</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>



                    {
                        user?.uid ? <>
                            <li><Link to='/yourclass'>Your Class</Link></li>
                            <li><Link to='/recentmessage'>Recent Message</Link></li>
                        </> : <></>
                    }


                    {
                        user?.email == 'admin@gmail.com' &&
                        <>
                            <li><Link to='/recentformmessage'>Give Message</Link></li>

                        </>
                    }

                    <li><Link to='/routine'>Routine</Link></li>
                </ul>
            </div>
            <div className="navbar-end pe-20">

                {
                    user?.uid ?
                        <>
                            <button onClick={logOut} className='mx-5'>Log out</button>
                            <Link className='text-white me-4' to="/addclass">Add Class</Link>
                        </> : <>
                            <Link className='text-white me-4' to="/login">Login</Link>

                            <Link className='text-white' to="/register">Register</Link></>

                }
                <p>{user?.email}</p>
            </div>
        </div >
    );
};

export default Navbar;
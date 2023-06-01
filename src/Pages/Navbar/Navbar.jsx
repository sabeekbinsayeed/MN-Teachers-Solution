import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const currentDate = new Date();

    // Specify the options for formatting the date
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        era: 'long',
        calendar: 'islamic-civil',
        timeZone: 'UTC',
        localeMatcher: 'best fit',
        numberingSystem: 'latn',
    };

    // Format the current date with English month names
    const formatter = new Intl.DateTimeFormat('en', options);
    const formattedDate = formatter.format(currentDate);

    console.log(formattedDate); // Output: Dhuʻl-Qiʻdah 12, 1444 AH (current date in English)






    return (
        <div className="navbar bg-green-400 flex justify-between">
            <div className="navbar-start flex-grow">

                <Link to='/' className="me-[200px] btn btn-ghost normal-case text-xl hover:text-white mr-4">MN  </Link>

                {user?.uid ? (
                    <>
                        <Link to='/yourclass' className="text-black hover:text-white">Your Class</Link>
                        <Link to='/yoursubject' className="text-black hover:text-white ml-8">Your Subject</Link>
                        <Link to='/recentmessage' className="text-black hover:text-white ml-8">Noticeboard</Link>
                    </>
                ) : null}
                {user?.email === 'admin@gmail.com' && (
                    <Link to='/recentformmessage' className="text-black hover:text-white ml-6">Give Message</Link>
                )}
                <Link to='/routine' className="text-black :text-white ml-8">Routine</Link>
                <Link to='/routine' className="text-black :text-white ml-8"> Calender</Link>
            </div>
            <div className="flex items-center">
                {user?.uid ? (
                    <>

                        <div className="dropdown dropdown-bottom">
                            <label tabIndex={0} className="btn m-1 bg-white text-black hover:bg-white">Edit</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link className='text-black me-4' to="/addclass">Add Class</Link></li>
                                <li><Link className='text-black me-4' to="/subjectadd">Add Worksheet</Link></li>
                            </ul>
                        </div>


                        <button onClick={logOut} className='mx-5'>Log out</button>


                    </>
                ) : (
                    <>
                        <Link className='text-white me-4' to="/login">Login</Link>
                        <Link className='text-white me-2' to="/register">Register</Link>
                    </>
                )}
                <p>{user?.email}</p>
                <p className='ps-2 font-bold'>{formattedDate}</p>
            </div>
        </div>
    );
};

export default Navbar;

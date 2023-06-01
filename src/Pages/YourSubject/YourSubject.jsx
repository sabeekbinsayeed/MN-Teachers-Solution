import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import ScienceSyllabusButton from '../Syllabus/ScienceSyllabusButton';
import EnglishSyllabusButton from '../Syllabus/EnglishSyllabusButton';
import syllabus from '../../images/your_lessonplan.JPG'
import worksheet from '../../images/your_worksheet.JPG'
import lessonplon from '../../images/your_lessonplan_real.JPG'
import { Link } from 'react-router-dom';
import RecentMessage from '../RecentMessage/RecentMessage';
const YourSubject = () => {
    const { user } = useContext(AuthContext)
    let components;



    // if (user.displayName == 'Science') { components = <ScienceSyllabusButton></ScienceSyllabusButton> }
    // else if (user.displayName == 'English') { components = <EnglishSyllabusButton></EnglishSyllabusButton> }

    let routelinksyllabus;
    if (user?.displayName == 'Science') { routelinksyllabus = 'sciencesyllabusbutton' }
    else if (user?.displayName == 'English') { routelinksyllabus = 'englishsyllabusbutton' }
    console.log(routelinksyllabus)


    let routelinkworksheet;
    if (user?.displayName == 'Science') { routelinkworksheet = 'scienceworksheetlink' }
    else if (user?.displayName == 'English') { routelinkworksheet = 'englishworksheetlink' }
    console.log(routelinkworksheet)


    let routelinklessonplan;
    if (user?.displayName == 'Science') { routelinklessonplan = 'sciencelessonplan' }
    else if (user?.displayName == 'English') { routelinklessonplan = 'englishlessonplan' }
    console.log(routelinksyllabus)






    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-green-600 mt-16 me-14'>{user?.displayName}</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className=' image-full' src={syllabus} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold mb-2 text-center">Syllabus</h2>
                        {/* <p>Syllabus of </p> */}
                        <div className="card-actions justify-center w-full">
                            <Link className='w-full' to={routelinksyllabus}>   <button className="btn btn-success hover:bg-green-500 w-full">See Details</button></Link>

                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className=' image-full h-[230px]' src={worksheet} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold mb-2 text-center">Worksheet</h2>
                        {/* <p>Syllabus of </p> */}
                        <div className="card-actions justify-center w-full">
                            <Link className='w-full' to={routelinkworksheet}>   <button className="btn btn-success hover:bg-green-500 w-full">See Details</button></Link>

                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className=' image-full h-[230px]' src={lessonplon} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold mb-2 text-center">Lesson plan</h2>
                        {/* <p>Syllabus of </p> */}

                        <div className="card-actions justify-center w-full">
                            <Link className='w-full' to={routelinklessonplan}>   <button className="btn btn-success hover:bg-green-500 w-full">See Details</button></Link>

                        </div>
                    </div>
                </div>


            </div>
            <RecentMessage value={user?.displayName}></RecentMessage>
        </div>
    );
};

export default YourSubject;
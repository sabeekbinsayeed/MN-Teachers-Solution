import React from 'react';
import image1 from '../../images/SuccessfulTeacher.JPG'
import image2 from '../../images/teaching methodology.JPG'

const Courses = () => {
    return (
        <div className='w-full '>
            <h1 className='text-3xl font-bold text-center text-green-600 ms-14 mt-20 me-14 ">'>Free Courses</h1>
            <div className='flex'>
                <div className="card card-compact bg-base-100 shadow-xl w-1/2 ">
                    <figure><img className="transition-transform duration-300 transform-gpu hover:scale-105" src={image1} alt="Shoes" /></figure>
                    <div className="card-body">


                        <div className="card-actions flex justify-center">
                            <button
                                className="mt-3 btn btn-green bg-green-400 hover:bg-green-500 w-3/4"
                                onClick={() => { window.open('https://taibahacademy.com/course/20', '_blank'); }}
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl w-1/2 ">
                    <figure><img className="transition-transform duration-300 transform-gpu hover:scale-105" src={image2} alt="Shoes" /></figure>
                    <div className="card-body">


                        <div className="card-actions flex justify-center">
                            <button
                                className="mt-3 btn btn-green bg-green-400 hover:bg-green-500 w-3/4"
                                onClick={() => { window.open('https://taibahacademy.com/course/21', '_blank'); }}
                            >
                                See Details
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

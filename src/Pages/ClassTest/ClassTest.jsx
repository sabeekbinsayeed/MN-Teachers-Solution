import React from 'react';
import background from '../../images/class_test.JPG'
import { Link } from 'react-router-dom';

import pic1 from '../../images/quran.JPG'
import pic2 from '../../images/arabic.JPG'
import pic3 from '../../images/english.JPG'
import pic4 from '../../images/math.JPG'
import pic5 from '../../images/bangla.JPG'
import pic6 from '../../images/science.JPG'

const ClassTest = () => {
    return (
        <div>

            <div
                className="hero h-[500px]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Lesson plans</h1>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>





            <h1 className='text-2xl text-center mb-6 font-bold text-green-500 mt-12'>Lesson plan</h1>
            <div className='grid lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic1} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Quran</h2>

                        <div className=" justify-center">
                            <button className="btn text-black bg-green-400 hover:bg-green-500">See Details</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Arabic</h2>

                        <div className=" justify-center">
                            <button className="btn text-black bg-green-400 hover:bg-green-500">See Details</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">English</h2>

                        <div className="justify-center">
                            <Link className=" justify-center" to='/englishlessonplan'>
                                <div>
                                    <button className="btn text-black bg-green-400 hover:bg-green-500">See Details</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Math</h2>

                        <div className=" justify-center">
                            <button className="btn text-black bg-green-400 hover:bg-green-500">See Details</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bangla</h2>

                        <div className=" justify-center">
                            <button className="btn text-black bg-green-400 hover:bg-green-500">See Details</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Science and ICT</h2>

                        <div className=" justify-center">
                            <Link to='/sciencelessonplan'>
                                <div className=" justify-center">
                                    <button className="btn text-black bg-green-400 hover:bg-green-500">See Details</button>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};



export default ClassTest;
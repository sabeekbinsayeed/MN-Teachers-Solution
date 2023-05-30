import React from 'react';
import background from '../../images/syllabus.JPG'
import pic1 from '../../images/quran.JPG'
import pic2 from '../../images/arabic.JPG'
import pic3 from '../../images/english.JPG'
import pic4 from '../../images/math.JPG'
import pic5 from '../../images/bangla.JPG'
import pic6 from '../../images/science.JPG'
import { Link } from 'react-router-dom';

const Syllabus = () => {
    return (
        <div>
            <div
                className="hero h-[500px]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Exam Links</h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="mt-20 mx-auto max-w-md mb-40 text-center">
                <table className="table table-zebra w-full border inline-block">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Syllabus</td>
                            <td className="border px-4 py-2">
                                syllabus format for semester exams
                            </td>
                            <td className="border px-4 py-2">
                                <button className="btn btn-success">Click here</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Cover page</td>
                            <td className="border px-4 py-2">
                                Format for cover page
                            </td>
                            <td className="border px-4 py-2">
                                <button className="btn btn-success">Click here</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='grid lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic1} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Quran</h2>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Arabic</h2>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">English</h2>

                        <div className="card-actions justify-end">
                            <Link to='/englishsyllabusbutton'>
                                <button className="btn btn-primary">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Math</h2>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bangla</h2>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pic6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Science and ICT</h2>

                        <div className="card-actions justify-end">
                            <Link to='/sciencesyllabusbutton'>
                                <button className="btn btn-primary">Buy Now</button>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};


export default Syllabus;
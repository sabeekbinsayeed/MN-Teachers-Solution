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
                        <h1 className="mb-5 text-5xl font-bold">Syllabus + booklist</h1>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>

            <div className="mt-20 mx-auto max-w-md mb-10 text-center">

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
                            <td className="border px-4 py-2">C1 Booklist</td>
                            <td className="border px-4 py-2">
                                Booklist link for C1
                            </td>
                            <td className="border px-4 py-2">

                                <a target="_blank" href=" https://docs.google.com/document/d/1HRzzEcp_hnpv8_gsyqFKdEDfBnW_aR_M/edit?rtpof=true&sd=true"> <button className="btn bg-green-400 hover:bg-green-500 text-black">Click here</button></a>



                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">C2 Booklist</td>
                            <td className="border px-4 py-2">
                                Booklist link for C2
                            </td>
                            <td className="border px-4 py-2">

                                <a target="_blank" href="https://docs.google.com/document/d/1oLHQHXU__UJEhr4lhczzr6zF2Wtvszq_F0ZujDxnScY/edit"> <button className="btn bg-green-400 hover:bg-green-500 text-black">Click here</button></a>



                            </td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">C3 Booklist</td>
                            <td className="border px-4 py-2">
                                Booklist link for C3
                            </td>
                            <td className="border px-4 py-2">

                                <a target="_blank" href="https://docs.google.com/document/d/1UK34aXFYhOGFPkcTENbb3XuhlpQ9lLxr/edit?rtpof=true&sd=true"> <button className="btn bg-green-400 hover:bg-green-500 text-black">Click here</button></a>



                            </td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">C4 Booklist</td>
                            <td className="border px-4 py-2">
                                Booklist link for C4
                            </td>
                            <td className="border px-4 py-2">

                                <a target="_blank" href="https://docs.google.com/document/d/1zgfgs4LDx3OQha83NXLFHhQMcSnuxMwT/edit?rtpof=true&sd=true
"> <button className="btn bg-green-400 hover:bg-green-500 text-black">Click here</button></a>



                            </td>
                        </tr>


                        <tr>
                            <td className="border px-4 py-2">C5 Booklist</td>
                            <td className="border px-4 py-2">
                                Booklist link for C5
                            </td>
                            <td className="border px-4 py-2">

                                <a target="_blank" href="https://docs.google.com/document/d/1lRBukL2BcmfJtWzAcfHQ-ZHoomjTI6fU/edit?rtpof=true&sd=true

"> <button className="btn bg-green-400 hover:bg-green-500 text-black">Click here</button></a>



                            </td>
                        </tr>


                        <tr>
                            <td className="border px-4 py-2">M1 Booklist</td>
                            <td className="border px-4 py-2">
                                Booklist link for M1
                            </td>
                            <td className="border px-4 py-2">

                                <a href="https://docs.google.com/document/d/1Q3ZwQfwu7fVA_h-DrQ9GgsEQYMS2Iczz/edit?usp=sharing&ouid=116595746943863309621&rtpof=true&sd=true

" target="_blank"> <button className="btn bg-green-400 hover:bg-green-500 text-black">Click here</button></a>



                            </td>
                        </tr>


                        <tr>
                            <td className="border px-4 py-2">M2 Booklist</td>
                            <td className="border px-4 py-2">
                                Booklist link for M2
                            </td>
                            <td className="border px-4 py-2">

                                <a target="_blank" href="https://docs.google.com/document/d/1Q3ZwQfwu7fVA_h-DrQ9GgsEQYMS2Iczz/edit?usp=sharing&ouid=116595746943863309621&rtpof=true&sd=true

"> <button className="btn bg-green-400 hover:bg-green-500 text-black">Click here</button></a>



                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 className='text-2xl text-center mb-6 font-bold text-green-500'>Syllabus</h1>
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
                            <Link className=" justify-center" to='/englishsyllabusbutton'>
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
                            <Link to='/sciencesyllabusbutton'>
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


export default Syllabus;
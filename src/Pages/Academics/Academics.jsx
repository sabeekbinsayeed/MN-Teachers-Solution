import React from 'react';
import background from '../../images/link1.JPG'

import { Link } from 'react-router-dom';
const Academics = () => {
    return (
        <div>
            <div
                className="hero h-[500px]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Academic links</h1>
                        {/* <button className="btn btn-primary">Get Started</button> */}
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
                            <td className="border px-4 py-2 font-bold">Disturbing students</td>
                            <td className="border px-4 py-2">
                                Disturbing student list
                            </td>
                            <td className="border px-4 py-2">

                                <a href="https://docs.google.com/document/d/1LbhdNQj0YPHVLGbU5qpcKcw48muCkOji/edit


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>

                            </td>
                        </tr>


                        <tr>
                            <td className="border px-4 py-2 font-bold">Marks input tutorial</td>
                            <td className="border px-4 py-2">
                                Marks input tutorial from IT
                            </td>
                            <td className="border px-4 py-2">

                                <a href="https://drive.google.com/file/d/1b5DqFEXPrPib67j0wjzFV_BvuitnQibE/view?usp=sharing


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>

                            </td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2 font-bold">MN logo</td>
                            <td className="border px-4 py-2">
                                Marks input tutorial from IT
                            </td>
                            <td className="border px-4 py-2">

                                <a href="https://drive.google.com/file/d/1b5DqFEXPrPib67j0wjzFV_BvuitnQibE/view?usp=sharing


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>

                            </td>
                        </tr>


                        <tr>
                            <td className="border px-4 py-2 font-bold">Students info</td>
                            <td className="border px-4 py-2">
                                Info of all the MN students
                            </td>
                            <td className="border px-4 py-2">

                                <a href="https://drive.google.com/file/d/1b5DqFEXPrPib67j0wjzFV_BvuitnQibE/view?usp=sharing


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>

                            </td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2 font-bold">Early Leave</td>
                            <td className="border px-4 py-2">
                                Application for early leave. Edit it based on your need
                            </td>
                            <td className="border px-4 py-2">
                                <a href="https://drive.google.com/file/d/1b5DqFEXPrPib67j0wjzFV_BvuitnQibE/view?usp=sharing


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">Leave</td>
                            <td className="border px-4 py-2">
                                Application for leave. Edit it based on your need
                            </td>
                            <td className="border px-4 py-2">
                                <a href="https://drive.google.com/file/d/1b5DqFEXPrPib67j0wjzFV_BvuitnQibE/view?usp=sharing


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>
                            </td>
                        </tr>




                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Academics;
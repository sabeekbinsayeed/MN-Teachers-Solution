import React from 'react';
import background from '../../images/exam.JPG'

const Exams = () => {
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
                            <td className="border px-4 py-2 font-bold">Syllabus</td>
                            <td className="border px-4 py-2">
                                Syllabus format for semester exams
                            </td>
                            <td className="border px-4 py-2">

                                <a href="https://docs.google.com/document/d/1iG72FOqNjM-Wg_KLs3gKw8XaDtb9s8p7wBCiLG0ZR-A/edit
" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>

                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">Cover page</td>
                            <td className="border px-4 py-2">
                                Format for cover page
                            </td>
                            <td className="border px-4 py-2">
                                <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button>
                            </td>
                        </tr>


                        <tr>
                            <td className="border px-4 py-2 font-bold">Class Names</td>
                            <td className="border px-4 py-2">
                                Correct spelling of class names
                            </td>
                            <td className="border px-4 py-2">
                                <a href="https://docs.google.com/document/d/18VDUb060_lU_LSxyepq76P-y7IljXH5XXFnq_AmWfQ4/edit?usp=sharing"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">Syllabus for MT</td>
                            <td className="border px-4 py-2">
                                Syllabus format for class test
                            </td>
                            <td className="border px-4 py-2">

                                <a href="https://docs.google.com/document/d/1lMlzpznZSQIGiMfL6eWaaa3bQFBdzODTWON3N5VrSWk/edit


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>

                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">MT marks input</td>
                            <td className="border px-4 py-2">
                                Format for class test marks input
                            </td>
                            <td className="border px-4 py-2">
                                <a href="https://docs.google.com/document/d/1Mv2SgKNxR3ovNrUq0XKzc94uaDyEEC-r/edit


" target="_blank" rel="noopener noreferrer"> <button className="btn text-black bg-green-400 hover:bg-green-500">Click here</button></a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Exams;
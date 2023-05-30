import React from 'react';
import background from '../../images/events.jpeg'

const Events = () => {
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
        </div>
    );
};

export default Events;
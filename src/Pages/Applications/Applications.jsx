import React from 'react';
import background from '../../images/application.JPG';

const Applications = () => {
    return (
        <div>
            <div
                className="hero h-[500px]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Application Links</h1>
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
                            <td className="border px-4 py-2">Early Leave</td>
                            <td className="border px-4 py-2">
                                Application for early leave. Edit it based on your need
                            </td>
                            <td className="border px-4 py-2">
                                <button className="btn btn-success">Click here</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Leave</td>
                            <td className="border px-4 py-2">
                                Application for leave. Edit it based on your need
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

export default Applications;

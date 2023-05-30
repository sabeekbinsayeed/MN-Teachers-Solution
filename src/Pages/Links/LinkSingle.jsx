import React from 'react';
import { useNavigate } from 'react-router-dom';

const LinkSingle = ({ linksingle }) => {
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        console.log(id)
        if (id == 2) {
            navigate('/exams')
        }

        if (id == 1) {
            navigate('/academics')
        }

        if (id == 3) {
            navigate('/applications')
        }
        if (id == 4) {
            navigate('/classtest')
        }
        if (id == 5) {
            navigate('/syllabus')
        }
        if (id == 6) {
            navigate('/events')
        }

    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={linksingle.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{linksingle.name}</h2>
                <p>{linksingle.description}</p>
                <div className="card-actions justify-center"> {/* Center align the button */}
                    <button onClick={() => { handleNavigate(linksingle.id) }} className="w-full btn btn-green bg-green-400">Details</button> {/* Apply btn-green class for green button */}
                </div>
            </div>
        </div>
    );
};

export default LinkSingle;

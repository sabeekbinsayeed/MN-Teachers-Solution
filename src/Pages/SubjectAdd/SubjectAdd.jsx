import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { useForm } from 'react-hook-form';

const SubjectAdd = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        const subjectInfo = {
            week: data.name,
            subject: data.subject,
            class: data.class,
            link: data.link,
            email: user.email
        };

        fetch('http://localhost:5000/subject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(subjectInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert('Data submitted successfully!');
                navigate('/tabledata');
                // Handle success
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error
            });
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-96 p-7 bg-gray-100 rounded-lg shadow-lg mt-12 mb-12">
                <h1 className="text-2xl mb-4 text-green-500 font-bold text-center">Upload Lesson Plan</h1>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-semibold">Week</label>
                        <select {...register("name")} id="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none">
                            {Array.from({ length: 15 }, (_, index) => (
                                <option key={index} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
                        <input {...register("subject")} id="subject" className="w-full p-2 border border-gray-300 rounded focus:outline-none" value={user?.displayName} placeholder="Subject" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="class" className="block mb-2 font-semibold">Class</label>
                        <select {...register("class")} id="class" className="w-full p-2 border border-gray-300 rounded focus:outline-none">
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                            <option value="C3">C3</option>
                            <option value="C4">C4</option>
                            <option value="C5">C5</option>
                            <option value="M1">M1</option>
                            <option value="M2">M2</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="link" className="block mb-2 font-semibold">Link</label>
                        <input {...register("link")} id="link" className="w-full p-2 border border-gray-300 rounded focus:outline-none" placeholder="Give the link" />
                    </div>

                    <input className="block w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600" value="Submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default SubjectAdd;

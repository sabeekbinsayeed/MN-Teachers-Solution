import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);



        const teacher_info = {
            name: data.name,
            subject: user?.displayName,
            day: data.day,
            time: data.time,
            email: user.email
        }
        console.log(teacher_info)


        fetch('http://localhost:5000/routine', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(teacher_info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('teacher added');
                    // refetch();
                }
                else {
                    // toast.error(data.message);
                    alert('cannot do it')
                }
            })


    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-96 p-7 bg-gray-100 rounded-lg mt-12 mb-12">
                <h1 className="text-2xl mb-4 text-green-500 font-bold text-center">Edit your Routine</h1>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                            Class
                        </label>
                        <select id="name" {...register("name")} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
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
                        <label htmlFor="subject" className="block text-gray-700 font-bold mb-1">
                            Subject
                        </label>
                        <input id="subject" {...register("subject")} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" value={user?.displayName} placeholder="Subject" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="day" className="block text-gray-700 font-bold mb-1">
                            Day
                        </label>
                        <select id="day" {...register("day")} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="time" className="block text-gray-700 font-bold mb-1">
                            Time
                        </label>
                        <select id="time" {...register("time")} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
                            <option value="9.00-9.45 am">9.00-9.45 am</option>
                            <option value="9.45-10.30 am">9.45-10.30 am</option>
                            <option value="10.30-11.15 am">10.30-11.15 am</option>
                            <option value="11.15-12 pm">11.15-12 pm</option>
                            <option value="12-12.40 pm">12-12.40 pm</option>
                            <option value="1-1.40 pm">1-1.40 pm</option>
                            <option value="1.40-2.20 pm">1.40-2.20 pm</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
                            Email
                        </label>
                        <input id="email" {...register("email")} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500" value={user?.email} readOnly placeholder="Email" />
                    </div>

                    <div className="text-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const YourClass = () => {
    const { user } = useContext(AuthContext);
    const today = new Date();
    const dayOfWeek = today.getDay();

    // Mapping dayOfWeek to a day name
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',];
    const currentDay = daysOfWeek[dayOfWeek];

    const [sunday, setSunday] = useState([]);
    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);

    useEffect(() => {
        fetchData('Sunday', setSunday);
        fetchData('Monday', setMonday);
        fetchData('Tuesday', setTuesday);
        fetchData('Wednesday', setWednesday);
        fetchData('Thursday', setThursday);
    }, [user?.email]);

    const fetchData = (day, setter) => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=${day}`)
            .then(res => res.json())
            .then(data => setter(data))
            .catch(error => console.log(error));
    };

    const currentDayClasses = eval(currentDay.toLowerCase());

    return (
        <div>
            <div className='mb-20 mt-4'>
                <h1 className='Text-green-900 text-3xl font-bold text-center mb-4'>Today's Class</h1>
                <div className="overflow-x-auto">
                    <table className="table w-1/2 mx-auto">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Time</th>
                                <th>Class</th>
                                <th>Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentDayClasses.map((teacher, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{teacher.time}</td>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.subject}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <h1 className='Text-green-900 text-3xl font-bold text-center mb-6'>This week</h1>

            {daysOfWeek.map(day => (
                <div className='mb-10' key={day}>
                    <h2 className='text-green-500 text-2xl font-bold text-center'>{day}  (Total class={eval(day.toLowerCase())?.length})</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-1/2 mx-auto">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Time</th>
                                    <th>Class</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eval(day.toLowerCase()).map((teacher, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{teacher.time}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.subject}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default YourClass;

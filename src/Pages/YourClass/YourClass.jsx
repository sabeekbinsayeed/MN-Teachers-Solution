import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const YourClass = () => {
    const { user } = useContext(AuthContext)
    const today = new Date();
    const dayOfWeek = today.getDay();

    // Mapping dayOfWeek to a day name
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[dayOfWeek];





    const [sunday, setSunday] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=Sunday`).then(res => res.json()).then(data => { setSunday(data), console.log(data) })
    }, [user?.email])


    const [monday, setMonday] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=Monday`).then(res => res.json()).then(data => { setMonday(data), console.log(data) })
    }, [user?.email])


    const [tuesday, setTuesday] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=Tuesday`).then(res => res.json()).then(data => { setTuesday(data), console.log(data) })
    }, [user?.email])


    const [Wednesday, setWednesday] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=Wednesday`).then(res => res.json()).then(data => { setWednesday(data), console.log(data) })
    }, [user?.email])



    const [thursday, setThursday] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=Thursday`).then(res => res.json()).then(data => { setThursday(data), console.log(data) })
    }, [user?.email])


    let component;
    if (currentDay == 'Sunday') {
        component = sunday
    }

    else if (currentDay == 'Monday') {
        component = monday
    }
    else if (currentDay == 'Tuesday') {
        component = tuesday
    }
    else if (currentDay == 'Wednesday') {
        component = Wednesday;
    }
    else if (currentDay == 'Thursday') {
        component = thursday
    }






    return (
        <div>
            <div className='mb-20 mt-4'>
                <h1>{currentDay}</h1>
                <h1 className='Text-green-900 text-3xl font-bold text-center mb-4'>Today's Class</h1>
                {/* <h2 className='text-green-500 text-2xl font-bold text-center'>{currentDay}  (Total class={component && component?.length})</h2> */}
                <div className="overflow-x-auto">
                    <table className="table w-1/2 mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Time</th>
                                <th>Class</th>
                                <th>Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}



                            {
                                component && component.map((teacher, index) => (
                                    // <React.Fragment key={index}>
                                    //     {console.log(`${index}: ${teacher.time}`)}
                                    //     <span>{teacher.time}</span>
                                    //     <span>{teacher.subject}</span>
                                    //     <span>{teacher.name}</span>
                                    //     <br></br>

                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{teacher.time}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.subject}</td>
                                    </tr>

                                    // </React.Fragment>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className='Text-green-900 text-3xl font-bold text-center mb-6'>This week</h1>
            <div>

                <div className='mb-10'>
                    <h2 className='text-green-500 text-2xl font-bold text-center'>Sunday  (Total class={sunday && sunday?.length})</h2>
                    {

                        sunday && sunday?.length
                    }

                    <div className="overflow-x-auto">
                        <table className="table w-1/2 mx-auto">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Time</th>
                                    <th>Class</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}



                                {
                                    sunday && sunday.map((teacher, index) => (
                                        // <React.Fragment key={index}>
                                        //     {console.log(`${index}: ${teacher.time}`)}
                                        //     <span>{teacher.time}</span>
                                        //     <span>{teacher.subject}</span>
                                        //     <span>{teacher.name}</span>
                                        //     <br></br>

                                        <tr>
                                            <th>{index + 1}</th>
                                            <td>{teacher.time}</td>
                                            <td>{teacher.name}</td>
                                            <td>{teacher.subject}</td>
                                        </tr>

                                        // </React.Fragment>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>


                </div>



                <div className='mb-10'>
                    <h2 className='text-green-500 text-2xl font-bold text-center'>Monday  (Total class={monday && monday?.length})</h2>
                    {

                        monday && monday?.length
                    }

                    <div className="overflow-x-auto">
                        <table className="table w-1/2 mx-auto">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Time</th>
                                    <th>Class</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}



                                {
                                    monday && monday.map((teacher, index) => (
                                        // <React.Fragment key={index}>
                                        //     {console.log(`${index}: ${teacher.time}`)}
                                        //     <span>{teacher.time}</span>
                                        //     <span>{teacher.subject}</span>
                                        //     <span>{teacher.name}</span>
                                        //     <br></br>

                                        <tr>
                                            <th>{index + 1}</th>
                                            <td>{teacher.time}</td>
                                            <td>{teacher.name}</td>
                                            <td>{teacher.subject}</td>
                                        </tr>

                                        // </React.Fragment>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>


                </div>

                <div>
                    <h2 className='text-green-500 text-2xl font-bold text-center'>Tuesday  (Total class={tuesday?.length})</h2>
                    {

                        tuesday && tuesday?.length
                    }

                    <div className="overflow-x-auto ">
                        <table className="table w-1/2 mx-auto">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Time</th>
                                    <th>Class</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}



                                {
                                    tuesday && tuesday.map((teacher, index) => (
                                        // <React.Fragment key={index}>
                                        //     {console.log(`${index}: ${teacher.time}`)}
                                        //     <span>{teacher.time}</span>
                                        //     <span>{teacher.subject}</span>
                                        //     <span>{teacher.name}</span>
                                        //     <br></br>

                                        <tr>
                                            <th>{index + 1}</th>
                                            <td>{teacher.time}</td>
                                            <td>{teacher.name}</td>
                                            <td>{teacher.subject}</td>
                                        </tr>

                                        // </React.Fragment>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>


                </div>





                <div>
                    <h2 className='text-green-500 text-2xl font-bold text-center mt-10'>Wednesday  (Total class={Wednesday?.length})</h2>


                    {
                        Wednesday && <div className="overflow-x-auto ">
                            <table className="table w-1/2 mx-auto">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Time</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}



                                    {
                                        Wednesday && Wednesday.map((teacher, index) => (
                                            // <React.Fragment key={index}>
                                            //     {console.log(`${index}: ${teacher.time}`)}
                                            //     <span>{teacher.time}</span>
                                            //     <span>{teacher.subject}</span>
                                            //     <span>{teacher.name}</span>
                                            //     <br></br>

                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{teacher.time}</td>
                                                <td>{teacher.name}</td>
                                                <td>{teacher.subject}</td>
                                            </tr>

                                            // </React.Fragment>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    }


                </div>



                <div className='mt-12 mb-12'>
                    <h2 className='text-green-500 text-2xl font-bold text-center mt-10'>Thursday  (Total class={Wednesday?.length})</h2>


                    {
                        thursday && <div className="overflow-x-auto ">
                            <table className="table w-1/2 mx-auto">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Time</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}



                                    {
                                        thursday && thursday.map((teacher, index) => (
                                            // <React.Fragment key={index}>
                                            //     {console.log(`${index}: ${teacher.time}`)}
                                            //     <span>{teacher.time}</span>
                                            //     <span>{teacher.subject}</span>
                                            //     <span>{teacher.name}</span>
                                            //     <br></br>

                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{teacher.time}</td>
                                                <td>{teacher.name}</td>
                                                <td>{teacher.subject}</td>
                                            </tr>

                                            // </React.Fragment>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    }


                </div>


            </div>
        </div>
    );
};

export default YourClass;
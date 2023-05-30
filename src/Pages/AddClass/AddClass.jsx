import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const today = new Date();
    const dayOfWeek = today.getDay();

    // Mapping dayOfWeek to a day name
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[dayOfWeek];




    const { register, handleSubmit } = useForm();
    const [sunday, setSunday] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=Sunday`).then(res => res.json()).then(data => { setSunday(data), console.log(data) })
    }, [user?.email])


    const [tuesday, setTuesday] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/routine?email=${user?.email}&day=Tuesday`).then(res => res.json()).then(data => { setTuesday(data), console.log(data) })
    }, [user?.email])
    // const [data, setData] = useState("");
    // const { signIn } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');

    // const navigate = useNavigate();
    const handleLogin = data => {
        console.log(data);



        const teacher_info = {
            name: data.name,
            subject: data.subject,
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
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center'>Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class</span>
                        </label>

                        <input {...register("name")} className="input input-bordered w-full max-w-xs" placeholder="name" />

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">subject</span>
                        </label>

                        <input {...register("subject")} className="input input-bordered w-full max-w-xs" placeholder="subject" />



                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Day</span>
                        </label>
                        <select {...register("day")} className="select select-bordered w-full max-w-xs">
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                        </select>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">time</span>
                        </label>
                        <select {...register("time")} className="select select-bordered w-full max-w-xs">
                            <option value="9.00-9.45 am">9.00-9.45 am</option>
                            <option value="9.45- 10.30 am">9.45- 10.30 am</option>
                            <option value="10.30-11.15 am">10.30-11.15 am</option>
                            <option value="11.15-12 pm">11.15-12 pm</option>
                            <option value="12-12.40 pm">12-12.40 pm</option>
                            <option value="1-1.40 pm">1-1.40 pm</option>
                            <option value="1.40-2.20 pm">1.40-2.20 pm</option>
                        </select>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input {...register("email")} className="input input-bordered w-full max-w-xs" value={user?.email} readOnly placeholder="email" />
                    </div>








                    <input className='btn btn-accent w-full' value="submit" type="submit" />
                </form>



                <div>

                    <div>
                        <h2>sunday</h2>
                        {

                            sunday && sunday?.length
                        }


                    </div>


                    <div>
                        <h2>Tuesday</h2>
                        {

                            tuesday && tuesday?.length
                        }
                        <br></br>
                        {
                            tuesday && tuesday.map((teacher, index) => (
                                <React.Fragment key={index}>
                                    {console.log(`${index}: ${teacher.time}`)}
                                    <span>{teacher.time}</span>
                                    <span>{teacher.subject}</span>
                                    <span>{teacher.name}</span>
                                    <br></br>

                                </React.Fragment>
                            ))
                        }
                        <br></br>

                        {currentDay}
                    </div>


                </div>
            </div>


        </div>
    );
};

export default AddClass;
import React from 'react';
import { toast } from 'react-hot-toast';

const RecentMessageform = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        // const date = form.date.value;
        const messages = form.recent.value;
        const name = form.name.value;
        const date = form.date.value;
        const forDepartment = form.department.value
        const result = { messages, forDepartment, name, date };
        console.log('result ', result);

        fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // alert('recent added');
                    toast.success('done successfully')
                    form.reset(); // Reset the form to clear the input fields
                } else {
                    toast.error(data.message);
                    alert('cannot do it');
                }
            });
    };



    return (
        <div>
            <div className='form-container mt-10 w-1/3'>
                <h2 className='form-title text-green-700 pt-10 pb-4'>Message </h2>
                <form onSubmit={handleSubmit}>


                    <div className="form-control">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                            Your message
                        </label>
                        {/* <label htmlFor="recent">Message</label> */}
                        {/* <input type="recent" name="recent" required /> */}
                        <textarea name='recent' className="textarea textarea-success" placeholder="type here"></textarea>
                    </div>


                    <div className="form-control">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                            Name
                        </label>
                        {/* <label htmlFor="recent">Message</label> */}
                        {/* <input type="recent" name="recent" required /> */}
                        <input name='name' className="textarea textarea-success" placeholder="type here"></input>
                    </div>

                    <div className="form-control">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                            Date
                        </label>
                        {/* <label htmlFor="recent">Message</label> */}
                        {/* <input type="recent" name="recent" required /> */}
                        <input name='date' className="textarea textarea-success" placeholder="type here"></input>
                    </div>


                    <div className="mb-4">
                        <label htmlFor="department" className="block text-gray-700 font-bold mb-1">
                            For
                        </label>
                        <select id="department" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500">
                            <option value="all">All</option>
                            <option value="QMP">Quran Department</option>
                            <option value="Arabic">Arabic Department</option>
                            <option value="English">English Department</option>
                            <option value="Bangla">Bangla Department</option>
                            <option value="Math">Math Department</option>
                            <option value="Science">Science and ICT</option>
                        </select>
                    </div>


                    <input className='btn-submit bg-green-300' type="submit" value="send" />

                </form>
                {/* <p className='text-error'>{error}</p>
                    <p>New to ema john <Link to='/signup'>Create a New Account</Link></p> */}
            </div>

        </div>
    );
};

export default RecentMessageform;
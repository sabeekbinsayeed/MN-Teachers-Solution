import React from 'react';

const RecentMessageform = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        // const date = form.date.value;
        const messages = form.recent.value;
        const result = { messages };
        console.log(result);

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
                    alert('recent added');
                    form.reset(); // Reset the form to clear the input fields
                } else {
                    // toast.error(data.message);
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
                        {/* <label htmlFor="recent">Message</label> */}
                        {/* <input type="recent" name="recent" required /> */}
                        <textarea name='recent' className="textarea textarea-success" placeholder="type here"></textarea>
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
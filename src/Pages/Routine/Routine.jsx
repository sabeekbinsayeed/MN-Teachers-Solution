import React from 'react';
import routine1 from '../../images/routine1.JPG'
import routine2 from '../../images/routine2.JPG'
import routine3 from '../../images/routine3.JPG'

const Routine = () => {
    return (
        <div className='w-full'>
            <img className='w-full' src={routine1} alt="" />
            <img className='w-full' src={routine2} alt="" />
            <img className='w-full' src={routine3} alt="" />

        </div>
    );
};

export default Routine;
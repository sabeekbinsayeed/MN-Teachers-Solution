import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import TableSubject from './TableSubject';

const ScienceLessonPlan = () => {
    const { user } = useContext(AuthContext)
    console.log('subject', user?.displayName)
    return (
        <div>
            <h1 className='font-bold text-center text-2xl mt-6 mb-4'>Science and ICT C1</h1>
            <TableSubject classes='C1' subject='Science'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>Science and ICT C2</h1>
            <TableSubject classes='C3' subject='Science'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>Science and ICT C3</h1>
            <TableSubject classes='C3' subject='Science'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>Science and ICT C4</h1>
            <TableSubject classes='C4' subject='Science'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>Science and ICT C5</h1>
            <TableSubject classes='C5' subject='Science'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>Science and ICT M1</h1>
            <TableSubject classes='M1' subject='Science'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>Science and ICT M2</h1>
            <TableSubject classes='M1' subject='Science'></TableSubject>


        </div>
    );
};

export default ScienceLessonPlan;
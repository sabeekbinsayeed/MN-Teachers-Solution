import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import TableSubject from './TableSubject';

const EnglishLessonPlan = () => {
    const { user } = useContext(AuthContext)
    console.log('subject', user?.displayName)
    return (
        <div>
            <h1 className='font-bold text-center text-2xl mt-6 mb-4'>English C1</h1>
            <TableSubject classes='C1' subject='English'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>English C2</h1>
            <TableSubject classes='C3' subject='English'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>English C3</h1>
            <TableSubject classes='C3' subject='English'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>English C4</h1>
            <TableSubject classes='C4' subject='English'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>English C5</h1>
            <TableSubject classes='C5' subject='English'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>English M1</h1>
            <TableSubject classes='M1' subject='English'></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>English M2</h1>
            <TableSubject classes='M1' subject='English'></TableSubject>


        </div>
    );
};

// export default ScienceLessonPlan;
export default EnglishLessonPlan;
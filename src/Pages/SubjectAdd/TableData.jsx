import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import TableSubject from './TableSubject';

const TableData = () => {
    const { user } = useContext(AuthContext)
    console.log('subject', user?.displayName)
    return (
        <div>
            <h1 className='font-bold text-center text-2xl mt-6 mb-4'>{user?.displayName} C1</h1>
            <TableSubject classes='C1' subject={user?.displayName}></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>{user?.displayName} C2</h1>
            <TableSubject classes='C3' subject={user?.displayName}></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>{user?.displayName} C3</h1>
            <TableSubject classes='C3' subject={user?.displayName}></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>{user?.displayName} C4</h1>
            <TableSubject classes='C4' subject={user?.displayName}></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>{user?.displayName} C5</h1>
            <TableSubject classes='C5' subject={user?.displayName}></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>{user?.displayName} M1</h1>
            <TableSubject classes='M1' subject={user?.displayName}></TableSubject>
            <h1 className='font-bold text-center text-2xl mb-4'>{user?.displayName} M2</h1>
            <TableSubject classes='M1' subject={user?.displayName}></TableSubject>


        </div>
    );
};

export default TableData;
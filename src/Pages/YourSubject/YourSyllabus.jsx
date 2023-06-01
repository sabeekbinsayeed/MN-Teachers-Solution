import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import ScienceSyllabusButton from '../Syllabus/ScienceSyllabusButton';
import EnglishSyllabusButton from '../Syllabus/EnglishSyllabusButton';

const YourSyllabus = () => {
    const { user } = useContext(AuthContext)
    let components;
    if (user.displayName == 'Science') { components = <ScienceSyllabusButton></ScienceSyllabusButton> }
    else if (user.displayName == 'English') { components = <EnglishSyllabusButton></EnglishSyllabusButton> }
    console.log(components)
    return (
        <div>

            {
                components
            }

        </div>
    );
};
export default YourSyllabus;
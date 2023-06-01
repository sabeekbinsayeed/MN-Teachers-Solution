import React from 'react';
import link1 from '../../images/link1.jpg'
import link2 from '../../images/exam.jpg'
import link3 from '../../images/application.jpg';
import link4 from '../../images/class_test.JPG';
import link5 from '../../images/booklist.JPG';
import link6 from '../../images/1.jpeg';
import LinkSingle from './LinkSingle';

const Links = () => {
    const linksData = [
        {
            id: 1,
            name: 'Academic',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link1
        },
        {
            id: 2,
            name: 'Exam',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link2
        },
        {
            id: 3,
            name: 'Lesson Plan',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link4
        },
        {
            id: 4,
            name: 'Worksheets',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link3
        },

        {
            id: 5,
            name: 'syllabus, book List',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link5
        },
        {
            id: 6,
            name: 'Events',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link6
        },
    ]
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-green-600 mt-16 me-14'>Resources</h1>
            <div className='grid lg:grid-cols-3 mt-6'>
                {
                    linksData.map(linksingle => <LinkSingle linksingle={linksingle}></LinkSingle>)
                }


            </div>
        </div>
    );
};

export default Links;
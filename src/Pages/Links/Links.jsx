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
            name: 'Applications',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link3
        },
        {
            id: 4,
            name: 'Class Test',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: link4
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
        <div className='grid lg:grid-cols-3 mt-16'>
            {
                linksData.map(linksingle => <LinkSingle linksingle={linksingle}></LinkSingle>)
            }


        </div>
    );
};

export default Links;
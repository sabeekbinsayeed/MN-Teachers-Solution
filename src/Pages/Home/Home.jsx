import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../../Routes/Routes';
import Banner from '../Banner/Banner';
import Links from '../Links/Links';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import PinMessage from '../RecentMessage/PinMessage'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Links></Links>
            <PinMessage></PinMessage>
            <Courses></Courses>


        </div>
    );
};

export default Home;
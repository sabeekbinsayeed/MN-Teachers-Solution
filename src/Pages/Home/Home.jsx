import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../../Routes/Routes';
import Banner from '../Banner/Banner';
import Links from '../Links/Links';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Links></Links>

        </div>
    );
};

export default Home;
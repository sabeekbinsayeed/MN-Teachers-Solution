import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}


        </div>
    );
};

export default Main;
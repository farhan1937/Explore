import React from 'react';
import Navbar from '../Nabvar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;
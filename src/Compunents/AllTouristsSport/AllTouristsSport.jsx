import React from 'react';
import { useEffect, useState } from "react";
import AllTouristsSports from "../AllTouristsSports/AllTouristsSports";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Aos from "aos";

const AllTouristsSport = () => {
    const [sport, setSport] = useState([])
    useEffect(() => {
        fetch('place.json')
            .then(res => res.json())
            .then(data => setSport(data))
    }, [])

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-out',
            offset: 200,
            delay: 100,
        });
    }, []);
    return (
        
        <div className="mt-10 mb-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">All Tourists <span className="text-[#6dedf6]">Sports</span> </h2>
        <p className="text-center mb-8">Asia Exploratorium invites you to uncover the heart and soul of Asia. Our travel guides are packed with insider tips, must-visit destinations, and cultural highlights to enhance your travel experiences.</p>
        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            sport.map((cook, idx) => <AllTouristsSports key={idx} cook={cook}></AllTouristsSports>)

        }
        </div>
    </div>


    );
};

export default AllTouristsSport;
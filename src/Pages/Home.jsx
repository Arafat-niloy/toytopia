// src/Pages/Home.jsx

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';
import ExtraSection1 from '../Components/ExtraSection1';
import ExtraSection2 from '../Components/ExtraSection2';

     

const Home = () => {
                 

    return (
        <div>
            <Helmet>
                <title>ToyTopia | Home</title>
            </Helmet>
            
            <Slider/>
            <PopularToys/>
            <ExtraSection1/>
            <ExtraSection2/>
        </div>
    );
};
export default Home;
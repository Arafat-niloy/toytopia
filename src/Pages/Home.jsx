// src/Pages/Home.jsx

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';
import ExtraSection1 from '../Components/ExtraSection1';
import ExtraSection2 from '../Components/ExtraSection2';

import 'aos/dist/aos.css';  
import Aos from 'aos';       

const Home = () => {
    useEffect(() => {        
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);                

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
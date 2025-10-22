import React from 'react';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';
import ExtraSection1 from '../Components/ExtraSection1';

const Home = () => {
    return (
        <div>
            <Slider/>
            <PopularToys/>
            <ExtraSection1/>
        </div>
    );
};

export default Home;
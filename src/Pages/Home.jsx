import React, { useEffect } from 'react';
import Slider from '../Components/Slider';
import PopularToys from '../Components/PopularToys';
import ExtraSection1 from '../Components/ExtraSection1';
import ExtraSection2 from '../Components/ExtraSection2';



const Home = () => {



    return (
        <div>
            <Slider/>
            <PopularToys/>
            <ExtraSection1/>
            <ExtraSection2/>
        </div>
    );
};

export default Home;
import React from 'react';
import Services from './Services';
import Banner from './Banner';
import SpecialServices from './SpecialServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SpecialServices ></SpecialServices>
        </div>
    );
};

export default Home;
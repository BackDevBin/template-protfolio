import React from 'react';
import Banner from '../Banner/Banner';
import MySkill from '../MySkill/MySkill';
import Service from '../Service/Service';
import Protfolio from '../Protfolio/Protfolio';

const Home = () => {
    return (
        <div className='space-y-10 pt-10 pb-10'>
        <Banner></Banner>
        <MySkill></MySkill>
        <Service></Service>
        <Protfolio></Protfolio>
        </div>
    );
};

export default Home;
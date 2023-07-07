import React from 'react';
import Banner from '../Banner/Banner';
import MySkill from '../MySkill/MySkill';
import Service from '../Service/Service';
import Protfolio from '../Protfolio/Protfolio';
import About from '../About/About';

const Home = () => {
    return (
        <div className='text-slate-400 space-y-10 pt-10 pb-10'>
        <Banner></Banner>
        <MySkill></MySkill>
        <Service></Service>
        <Protfolio></Protfolio>
        <About></About>
        </div>
    );
};

export default Home;
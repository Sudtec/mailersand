import React from 'react';

import HomeNavbar from './components/HomeNavbar';
import Intro from './Intro';
import How from './How';
import Why from './Why';
import Properties from './Properties';
const Home = () => {
    return (
        <div className='homeContainer'>
            <HomeNavbar />
            <Intro />
            <How />
            <Why />
            <Properties />
        </div>
    )
}

export default Home
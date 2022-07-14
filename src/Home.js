import React from 'react';

import HomeNavbar from './components/HomeNavbar';
import Intro from './Intro';
import How from './How';
import Why from './Why';
import Properties from './Properties';

import Support from './Support';
import Testimonial from './Testimonial';
import Faq from './Faq';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div className='homeContainer'>
            <HomeNavbar />
            <Intro />
            <How />
            <Why />
            <Properties />
            <Support />
            <Testimonial />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
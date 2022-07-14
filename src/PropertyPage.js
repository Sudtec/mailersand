import React from 'react';
import HomeNavbar from './components/HomeNavbar';
import mainView from './images/Mainview.png';
import leftside from './images/leftside.png';
import rightside from './images/Rightside.png';
import backview from './images/Backview.png';
import Topview from './images/Topview.png';

const PropertyPage = () => {
    return (
        <div className='container propertyPage'>
            <HomeNavbar />
            <section className='propertyPageSection'>
                <div className='mainContainer'>
                    <img src={mainView} alt='Main view'/>
                </div>
            </section>
        </div>
    )
}

export default PropertyPage
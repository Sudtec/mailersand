import React from 'react';
import why from './images/why.png';
import { ReactComponent as Check } from './images/Check.svg';

const Why = () => {
    return (
        <section className='container why'>
            <div className='row'>
                <div className='col-md-6 whyImg'>
                    <div className='whyImgContainer'>
                        <img src={why} alt='Why' className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-6 whyInfo'>
                    <h5>Why you should choose us </h5>
                    <p>Creating quality urban lifestyles, building stronger communities</p>
                    <div className='whyList'>
                        <label><Check />World class</label>
                        <label><Check />Affordable</label>
                    </div>
                    <div className='whyList'>
                        <label><Check />Trusted</label>
                        <label><Check />Amenities</label>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Why
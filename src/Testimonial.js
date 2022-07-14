import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Rate } from 'antd';
import Group1 from './images/Group1.png';
import Group2 from './images/Group2.png';
import Group3 from './images/Group3.png';
import Group4 from './images/Group4.png';




const Testimonial = () => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;

    }

    useWindowDimensions();
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    const datas = [
        {
            name: 'Nicholas  Dirk',
            location: 'New York',
            image: Group4,
            comment: 'I love Mailersand, they make it super easy and convenient to find a home.Thier Customer service is very quick to respond and helpful.Highly recommend!',
            rate: 4
        },
        {
            name: 'Jay Clouse',
            location: 'Canada',
            image: Group2,
            comment: 'Renting with Medisand has been great so far.They make it easy to pay through their app and submit tickets for maintenance and other requests.Would definitely recommend Medisand',
            rate: 5
        },
        {
            name: 'Adewale Yusuf',
            location: 'Nigeria',
            image: Group3,
            comment: 'Quick and fast services.Within 48 hours, I signed the coontract and moved in.They makes finding home more convenient than any other agencies',
            rate: 4
        },
        {
            name: 'Nicholas  Dirk',
            location: 'New York',
            image: Group4,
            comment: 'I love Mailersand, they make it super easy and convenient to find a home.Thier Customer service is very quick to respond and helpful.Highly recommend!',
            rate: 5
        },
        {
            name: 'Jay Clouse',
            location: 'Canada',
            image: Group2,
            comment: 'Renting with Medisand has been great so far.They make it easy to pay through their app and submit tickets for maintenance and other requests.Would definitely recommend Medisand',
            rate: 5
        },
        {
            name: 'Adewale Yusuf',
            location: 'Nigeria',
            image: Group3,
            comment: 'Quick and fast services.Within 48 hours, I signed the coontract and moved in.They makes finding home more convenient than any other agencies',
            rate: 4
        },
        {
            name: 'Nicholas  Dirk',
            location: 'New York',
            image: Group4,
            comment: 'I love Mailersand, they make it super easy and convenient to find a home.Thier Customer service is very quick to respond and helpful.Highly recommend!',
            rate: 5
        },
        {
            name: 'Jay Clouse',
            location: 'Canada',
            image: Group2,
            comment: 'Renting with Medisand has been great so far.They make it easy to pay through their app and submit tickets for maintenance and other requests.Would definitely recommend Medisand',
            rate: 4
        },
        {
            name: 'Adewale Yusuf',
            location: 'Nigeria',
            image: Group3,
            comment: 'Quick and fast services.Within 48 hours, I signed the coontract and moved in.They makes finding home more convenient than any other agencies',
            rate: 4
        },
        {
            name: 'Nicholas  Dirk',
            location: 'New York',
            image: Group4,
            comment: 'I love Mailersand, they make it super easy and convenient to find a home.Thier Customer service is very quick to respond and helpful.Highly recommend!',
            rate: 5
        },
        {
            name: 'Jay Clouse',
            location: 'Canada',
            image: Group2,
            comment: 'Renting with Medisand has been great so far.They make it easy to pay through their app and submit tickets for maintenance and other requests.Would definitely recommend Medisand',
            rate: 5
        },
        {
            name: 'Adewale Yusuf',
            location: 'Nigeria',
            image: Group3,
            comment: 'Quick and fast services.Within 48 hours, I signed the coontract and moved in.They makes finding home more convenient than any other agencies',
            rate: 4
        },
        {
            name: 'Muhammed Badmus',
            location: 'Ghana',
            image: Group1,
            comment: 'This is my second time doing business with medisand.I love the options and how easy they makes finding a home.',
            rate: 5
        }
    ]
    return (
        <section className='testimonial' id='testimonial'>
            <div className='container testimonialInfo'>
                <h2>Testimonial</h2>
                <p>Trusted by millions of people and organisation</p>
            </div>
            <div className='row'>
                {
                    console.log(window.innerWidth, 'gerreee')
                }
                <OwlCarousel className='owl-theme' margin={10}
                    items={window.innerWidth / 400} loop nav autoplay={true}>
                    {
                        datas.map((data, index) => (
                            <div className='item testimonialCard' key={index}>
                                <div className='profile'>
                                    <div className='profileImg'>
                                        <img src={data.image} alt='profile' className='img-fluid' />
                                    </div>
                                    <div className='profileDetails'>
                                        <h6>{data.name}</h6>
                                        <label>{data.location}</label>
                                    </div>
                                </div>
                                <p className='comment'>
                                    {data.comment}
                                </p>
                                <Rate disabled defaultValue={data.rate} />
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Testimonial
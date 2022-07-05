import React from 'react';
import Santorini from './images/Santorini.png';
import Ashbury from './images/Ashbury.png';
import Helen from './images/Helen.png';


const Properties = () => {
    const datas = [
        {
            image: Santorini,
            name: 'Santorini',
            type: 'Duplex',
            location: 'Lekki phase 2',
            price: 700
        },
        {
            image: Ashbury,
            name: 'Ashbury',
            type: 'Duplex',
            location: 'Victoria Island',
            price: 800
        },
        {
            image: Helen,
            name: 'Helen',
            type: 'Detached',
            location: 'River view Estate',
            price: 699
        },
    ]
    return (
        <section className='container properties' id='properties'>
            <div className='socialContainer'>
                <div className='socialBg'>

                </div>
            </div>
            <div className='propertiesHeader'>
                <h5>Our Featured Properties.</h5>
                <p>One of our biggest product to be featured and that has sold out the most</p>
            </div>
            <div className='row'>
                {
                    datas.map((data, index) => (
                        <div className='col-md-4' key={index}>
                            <div className='propertiesCard'>
                                <div className='propertiesCardImgContainer'>
                                    <img src={data.image} alt="card" className='img-fluid propertieImg' />
                                </div>

                                <div className='description1'>
                                    <label className='name'>{data.name}</label>
                                    <label className='type'>{data.type}</label>
                                </div>
                                <div className='description2'>
                                    <label className='location'>{data.location}</label>
                                    <label className='price'>${data.price}</label>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='propertiesButtonContainer'>
                <button className='propertiesButton'>
                    <span className='btnVisible'>View more</span>
                    <span className='btnInvisible'>Expore</span>
                </button>
            </div>

        </section>
    )
}

export default Properties
import React from 'react';
import HomeNavbar from './components/HomeNavbar';
import Footer from './components/Footer';
import Santorini from './images/Santorini.png';
import Ashbury from './images/Ashbury.png';
import Helen from './images/Helen.png';
import Sanitarium from './images/Sanitarium.png';
import LaunchBase from './images/LaunchBase.png';
import Countdown from './images/Countdown.png';
import Outpost from './images/Outpost.png';
import Busstation from './images/Busstation.png';
import Farm from './images/Farm.png';
import Allen from './images/Allen.png';
import Crash from './images/Crash.png';
import BlackMarket from './images/BlackMarket.png';
import Nuclearplant from './images/Nuclearplant.png';
import GRA from './images/GRA.png';
import Kinshasha from './images/Kinshasha.png';
import Wonderland from './images/Wonderland.png';
import Toyin from './images/Toyin.png';
import Agbowo from './images/Agbowo.png';
import Bodija from './images/Bodija.png';
import IbejuLekki from './images/IbejuLekki.png';





const PropertiesPage = () => {
    const datas = [
        {
            propertyTypeName: 'Duplex',
            propertyType: [
                {
                    image: Santorini,
                    name: 'Santorini',
                    type: 'Duplex',
                    location: 'Lekki phase 2',
                    price: 700
                },
                {
                    image: Sanitarium,
                    name: 'Sanitarium',
                    type: 'Duplex',
                    location: 'Victoria Island',
                    price: 800
                },
                {
                    image: LaunchBase,
                    name: 'Launch Base',
                    type: 'Detached',
                    location: 'River view Estate',
                    price: 699
                },
                {
                    image: Outpost,
                    name: 'Outpost',
                    type: 'Detached',
                    location: 'River view Estate',
                    price: 699
                },
                {
                    image: Countdown,
                    name: 'Count Down',
                    type: 'Detached',
                    location: 'River view Estate',
                    price: 699
                },
                {
                    image: Busstation,
                    name: 'Bus station',
                    type: 'Detached',
                    location: 'River view Estate',
                    price: 699
                },
            ]
        },
        {
            propertyTypeName: 'Bungalow',
            propertyType: [
                {
                    image: Farm,
                    name: 'Farm',
                    type: 'Bungalow',
                    location: 'Oshodi phase 2',
                    price: 700
                },
                {
                    image: Allen,
                    name: 'Allen',
                    type: 'Bungalow',
                    location: 'Apapa',
                    price: 830
                },
                {
                    image: Crash,
                    name: 'Crash',
                    type: 'Bungalow',
                    location: 'Allenn Avenue',
                    price: 699
                },
                {
                    image: BlackMarket,
                    name: 'Black Market',
                    type: 'Bungalow',
                    location: 'Magodo Lane 1',
                    price: 299
                },
                {
                    image: Nuclearplant,
                    name: 'Nuclear plant',
                    type: 'Bungalow',
                    location: 'Allenn Avenue',
                    price: 379
                },
            ]
        },
        {
            propertyTypeName: 'Land Propeerties',
            propertyType: [
                {
                    image: GRA,
                    name: 'G.R.A',
                    type: 'Land',
                    location: 'City park',
                    price: 700
                },
                {
                    image: Kinshasha,
                    name: 'Kinshasha',
                    type: 'Land',
                    location: 'Ikorodu',
                    price: 830
                },
                {
                    image: Wonderland,
                    name: 'Wonderland',
                    type: 'Land',
                    location: 'Agege',
                    price: 699
                },
                {
                    image: Toyin,
                    name: 'Toyin',
                    type: 'Land',
                    location: 'Ikeja',
                    price: 299
                },
                {
                    image: Agbowo,
                    name: 'Agbowo',
                    type: 'Land',
                    location: 'Ibadan',
                    price: 379
                },
                {
                    image: Bodija,
                    name: 'Bodija',
                    type: 'Land',
                    location: 'Ibadan',
                    price: 299
                },
                {
                    image: IbejuLekki,
                    name: 'IbejuLekki',
                    type: 'Land',
                    location: 'Lekki phase 2',
                    price: 379
                },
            ]
        },

    ]
    return (
        <div className='propertiesPage'>
            <HomeNavbar />
            <section className='propertiesType container'>
                <div className='propertiesTypeCardContainer'>
                    {
                        datas.map((data, index) => (
                            <div key={index}>
                                <p className='propertyTypeName'>
                                    {data.propertyTypeName}
                                </p>
                                <div>
                                    <div className='row'>
                                        {
                                            data.propertyType.map((type, index) => (
                                                <div className='col-md-4' key={index}>
                                                    <div className='propertiesCard'>
                                                        <div className='propertiesCardImgContainer'>
                                                            <img src={type.image} alt="card" className='img-fluid propertieImg' />
                                                        </div>

                                                        <div className='description1'>
                                                            <label className='name'>{type.name}</label>
                                                            <label className='type'>{type.type}</label>
                                                        </div>
                                                        <div className='description2'>
                                                            <label className='location'>{type.location}</label>
                                                            <label className='price'>${type.price}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default PropertiesPage
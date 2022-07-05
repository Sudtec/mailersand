import React from 'react';
import Wallet from './images/wallet.svg';
import Location from './images/location.svg';
import Lock from './images/lock.svg';

const How = () => {
    const cards = [
        {
            image: Location,
            title: 'set your Location',
            description: 'Our properties are located at prime areas where  there are good and viable roads'
        },
        {
            image: Wallet,
            title: 'Make Payments',
            description: 'Our pricing engine calculates rent based on location, quality of the home, sqft, appliances, amenities, and more.'
        },
        {
            image: Lock,
            title: 'Make it Official',
            description: 'We’ve taken care of the hassles of setting up and moving in, so you can get settled more quickly.'
        }
    ]
    return (
        <section className='container how' id="how">
            <div className='howHeader'>
                <h5>How it works</h5>
                <p>Set up and customize your home in just a few clicks and we will shoulder the remaining burder for you.</p>
            </div>
            <div className='row'>
                {
                    cards.map((card, index) => (
                        <div className='col-md-4' key={index}>
                            <div className='howCard'>
                                <img src={card.image} alt="card" className='img-fluid howImg' />
                                <h5>{card.title}</h5>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default How;
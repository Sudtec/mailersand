import React from 'react'
import introImage from './images/introImage.png';
import introVideo from './video/introVideo.mp4';
const Intro = () => {
    return (
        <section className="introSection container" id='intro'>
            <div className='row'>
                <div className='col-md-6 introInfo'>
                    <h3>Live the way you want</h3>
                    <p>Beautiful homes.  Incredible locations. Custom design for you and
                        pricing that makes sense.</p>
                    <button>
                        Book Consultation
                    </button>
                </div>
                <div className='col-md-6 imgCol'>
                    <img src={introImage} alt="iNTRO img-fluid" />
                </div>
            </div>
            <div className="videoContainer">

                <video autoPlay muted loop={true}>
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

export default Intro
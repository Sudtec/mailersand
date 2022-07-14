import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/RealEstatelogo.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as Twitter } from '../images/twitter.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';


const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container footerContainer">
        <div className='footerBody'>
          <div className='foooterDesc'>
            <Logo />
            <label>1 Letterman Drive</label>
            <label>Victoria Isan, CA 94129</label>
            <label>C-3500</label>
          </div>
          <div className='footerNav'>
            <div className='footerLinks'>
              <ul className='footerLinkContainer'>
                <li><Link to='#'>Find my home</Link></li>
                <li><Link to='#'>Homeowners</Link></li>
                <li><Link to='#'>Community</Link></li>
                <li><Link to='#'>Reviews</Link></li>
              </ul>
              <ul className='footerLinkContainer'>
                <li><Link to='#'>Articles</Link></li>
                <li><Link to='#'>Press</Link></li>
                <li><Link to='#'>Refer</Link></li>
                <li><Link to='#'>Careers</Link></li>
              </ul>
              <ul className='footerLinkContainer'>
                <li><Link to='#'>Privacy Policy</Link></li>
                <li><Link to='#'>Terms of Use</Link></li>
                <li><Link to='#'>Contact us</Link></li>
                <li><Link to='#'>FAQ</Link></li>
              </ul>

            </div>
          </div>

        </div>
        <div className='footerFoot'>
          <p>© 2022  Medisand, Inc. All rights reserved.</p>
          <div className='socials'>
            <Facebook />
            <Twitter />
            <Linkedin />
            <Instagram />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
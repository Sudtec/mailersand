import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/RealEstatelogo.svg';

const OnboardNav = ({ label, linktext, dir }) => {
    return (
        <div className='onboardingHeader'>
            <Link to='/'>
                <Logo />
            </Link>
            <div className='onboardingOthers'>
                <span>{label}</span>
                <Link to={dir}>{linktext}</Link>
            </div>
        </div>
    )
}

export default OnboardNav;
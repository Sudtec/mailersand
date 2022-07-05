import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './images/RealEstatelogo.svg';

const Login = () => {
  return (
    <div className='loginContainer container-fluid'>
      <div className='onboardingHeader'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='onboardingOthers'>
          <span>Not a member?</span>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './images/RealEstatelogo.svg';
import { ReactComponent as GoogleLogo } from './images/Googlelogo.svg';
import { Divider, Input, Button } from 'antd';


const Login = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
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
      <div className='container formContainer'>
        <div className='col-md-6 col-lg-4'>
          <div className='formHeader'>
            <h2>Log into MailerSand</h2>
            <p>Use one of the methods below to continue</p>
          </div>
          <button className='GoogleBtn'>
            <GoogleLogo /> Log in with Google
          </button>
          <div className='dividerContainer'>
            <Divider>OR</Divider>
          </div>


          <form className='form'>
            <div className='formGroup'>
              <label htmlFor="email" className="formLabel">Email address</label>
              <input placeholder='Email address' type="email" className='formInput' />

            </div>
            <div className='formGroup'>
              <label htmlFor="password" className="formLabel">Password</label>
              <Input.Password placeholder='Password' type="password" className='formInput' />
            </div>
            <Button loading={loadings[0]} onClick={() => enterLoading(0)} className='formBtn'>
              Log In
            </Button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { ReactComponent as GoogleLogo } from './images/Googlelogo.svg';
import { Divider, Input, Button } from 'antd';
import FormError from './components/FormError';
import OnboardNav from './components/OnboardNav';

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('submitted');
      setTimeout(() => {
        navigate('/');
      }, 2000);

    }
  })

  const buttonStyle = () => {
    if ((formik.isValid && formik.dirty) || formik.isSubmitting) {
      return 'formBtn active'
    }
    else {
      return 'formBtn'
    }
  }

  // console.log(formik);
  return (
    <div className='loginContainer container-fluid'>
      <OnboardNav label={'Not a member ?'} linktext={'Sign Up'} dir={"/signup"} />
      <div className='container formContainer'>
        <div className='col-md-6 col-lg-4 col-sm-10'>
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


          <form className='form' onSubmit={formik.handleSubmit}>
            <div className='formGroup'>
              <label htmlFor="email" className="formLabel">Email address</label>
              <input placeholder='Email address' type="email"
                className={`formInput ${formik.touched.email && formik.errors.email && 'border-danger'}`}
                id='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <FormError errorMessage={formik.errors.email} />
              )}
            </div>
            <div className='formGroup'>
              <label htmlFor="password" className="formLabel">Password</label>
              <Input.Password placeholder='Password' type="password"
                className={` formInput ${formik.touched.password && formik.errors.password && 'border-danger'}`}
                id='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <FormError errorMessage={formik.errors.password} />
              )}
            </div>
            <Button htmlType='submit' className={buttonStyle()} disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} loading={formik.isSubmitting}>
              Log In
            </Button>
          </form>

          <Link className='fInfo' to='/reset'>
            Forgotten your password?
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login
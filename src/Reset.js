import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'antd';

import OnboardNav from './components/OnboardNav';
import FormError from './components/FormError';
const Reset = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submitted');
            setTimeout(() => {
                navigate('/resetpassword');
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
    return (
        <div className='resetContainer container-fluid'>
            <OnboardNav label={'Not a member ?'} linktext={'Sign Up'} dir={"/signup"} />
            <div className='container formContainer'>
                <div className='col-md-6 col-lg-4 col-sm-12'>
                    <div className='formHeader'>
                        <h2>Reset your password</h2>
                        <p>Enter your email below for password reset</p>
                    </div>
                    <form className='form' onSubmit={formik.handleSubmit}>
                        <div className='formGroup'>
                            <label htmlFor='email' className='formLabel'>Email Address</label>
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
                        <Button htmlType='submit' className={buttonStyle()} disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} loading={formik.isSubmitting}>
                            Recover Password
                        </Button>
                    </form>
                </div>
            </div >
            <p className='formRem'>Remember password ? <Link to='/login'>Log in</Link></p>
        </div >
    )
}

export default Reset;
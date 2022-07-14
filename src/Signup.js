import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import OnboardNav from './components/OnboardNav';
import { ReactComponent as GoogleLogo } from './images/Googlelogo.svg';
import { Divider, Input, Button } from 'antd';
import FormError from './components/FormError';

const Signup = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        fName: Yup.string().required('First Name is required'),
        lName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phNumber: Yup.string().required('Phone Number is required'),
        password: Yup.string().min(8).required('Password is required'),
    })
    const formik = useFormik({
        initialValues: {
            fName: '',
            lName: '',
            email: '',
            phNumber: '',
            password: '',
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
            return 'formBtn signUpBtn active'
        }
        else {
            return 'formBtn signUpBtn'
        }
    }
    return (
        <div className='signupContainer container-fluid'>
            <OnboardNav label={'Already have an account ?'} linktext={'Log In'} dir={"/login"} />
            <div className='container formContainer'>
                <div className='col-md-6 col-lg-4 col-sm-10'>
                    <div className='formHeader'>
                        <h2>Sign up to join MailerSand</h2>
                        <p>Use one of the methods below to continue</p>
                    </div>
                    <button className='GoogleBtn'>
                        <GoogleLogo /> Sign up with Google
                    </button>
                    <div className='dividerContainer'>
                        <Divider>OR</Divider>
                    </div>
                    <form className='form' onSubmit={formik.handleSubmit}>
                        <div className='row formSGroup'>
                            <div className='formRGroup col-md-6'>
                                <label htmlFor="fName" className="formLabel">First Name</label>
                                <input placeholder='First Name' type="text"
                                    className={`formInput ${formik.touched.fName && formik.errors.fName && 'border-danger'}`}
                                    id='fName'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fName}
                                />
                                {formik.touched.fName && formik.errors.fName && (
                                    <FormError errorMessage={formik.errors.fName} />
                                )}
                            </div>

                            <div className='formRGroup col-md-6'>
                                <label htmlFor="lName" className="formLabel">Last Name</label>
                                <input placeholder='Last Name' type="text"
                                    className={`formInput ${formik.touched.lName && formik.errors.lName && 'border-danger'}`}
                                    id='lName'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lName}
                                />
                                {formik.touched.lName && formik.errors.lName && (
                                    <FormError errorMessage={formik.errors.lName} />
                                )}
                            </div>
                        </div>
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
                            <label htmlFor="phNumber" className="formLabel">Phone Number</label>
                            <input placeholder='Phone Number' type="text"
                                className={`formInput ${formik.touched.phNumber && formik.errors.phNumber && 'border-danger'}`}
                                id='phNumber'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phNumber}
                            />
                            {formik.touched.phNumber && formik.errors.phNumber && (
                                <FormError errorMessage={formik.errors.phNumber} />
                            )}
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="password" className="formLabel">Password</label>
                            <Input.Password placeholder='Password(min 8 character)' type="password"
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
                        <p className='policy'>By pressing continue you agree to the MemberHQ <span>terms of service</span> and <span>privacy policy.</span></p>

                        <Button htmlType='submit' className={buttonStyle()} disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} loading={formik.isSubmitting}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
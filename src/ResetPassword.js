import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import OnboardNav from './components/OnboardNav';
import { Button, Input } from 'antd';
import FormError from './components/FormError';


const ResetPassword = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        password: Yup.string().min(8).required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Mismatched Password!")
            .required("Please re-eneter your Password"),
    });

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submitted');
            setTimeout(() => {
                navigate('/login');
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
                        <div className="formGroup">
                            <label htmlFor="confirmPassword" className='formLabel'>Confirm Password</label>
                            <Input.Password
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className={` formInput ${formik.touched.confirmPassword && formik.errors.confirmPassword && 'border-danger'}`}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                            />

                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <FormError errorMessage={formik.errors.confirmPassword} />
                            )}
                        </div>
                        <Button htmlType='submit' className={buttonStyle()} disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} loading={formik.isSubmitting}>
                            Recover Password
                        </Button>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default ResetPassword
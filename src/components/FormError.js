import React from 'react';
import { ReactComponent as ErrorIcon } from '../images/errorIcon.svg';

const FormError = (props) => {
    return (
        <div className='text-danger formError'>
            <ErrorIcon />
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default FormError
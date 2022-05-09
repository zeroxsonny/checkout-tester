import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Input } from './Input';

import styles from './Review.module.css';

export interface ReviewProps {
    onSubmit: (values: ReviewFormFields) => void;
}

export interface ReviewFormFields {
    name: string;
    email: string;
    rating: number;
    comment: string;
}

export const Review: FC<ReviewProps> = ({
    onSubmit,
    ...rest
}) => {
    const formik = useFormik<ReviewFormFields>({
        initialValues: {
            name: '',
            email: '',
            rating: 0,
            comment: '',
        },
        onSubmit: (values: ReviewFormFields) => onSubmit(values),
    });

    const { values, touched, getFieldProps, handleSubmit, dirty, isValid, setFieldValue } = formik;

    return (
        <form
        onSubmit={handleSubmit}
        >
            <Input/>
        </form>
    );
}
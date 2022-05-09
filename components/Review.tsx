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
            <Input 
            type="text"
            id="review-form-name"
            data-testid="review-form-name"
            placeholder="name"
            touched={touched.name}
            label="Name"
            fieldRequired
            {...getFieldProps('name')}
            />

            <Input 
            type="email"
            id="review-form-email"
            data-testid="review-form-email"
            placeholder="Email"
            touched={touched.email}
            label="Email"
            fieldRequired
            {...getFieldProps('email')}
            />

            <Input 
            type="number"
            id="review-form-rating"
            data-testid="review-form-rating"
            placeholder="Rating"
            touched={touched.rating}
            label="Rating"
            fieldRequired
            {...getFieldProps('rating')}
            />

            <Input 
            type="text"
            id="review-form-comment"
            data-testid="review-form-comment"
            placeholder="Email"
            touched={touched.comment}
            label="Email"
            fieldRequired
            {...getFieldProps('comment')}
            />

            <button>Submit</button>          
        </form>
    );
}
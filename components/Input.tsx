import React, { FC } from 'react';
import { BaseFormInputProps, InputType } from '../types';

import styles from './Input.module.css';

export interface InputProps extends BaseFormInputProps {
    placeholder?: string;
    type?: InputType;
    value?: string | number;
}

export const Input: FC<InputProps> = ({
    id,
    name,
    disabled, 
    onChange,
    onBlur,
    value,
    error,
    touched,
    label,
    fieldRequired,
    placeholder,
    type,
    ...rest
}) => {

    return (
        <>
        { label && <label>{label}</label> }
        <input
        className={styles.input}
        />
        </>
    );
}
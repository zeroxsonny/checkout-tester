import { ChangeEventHandler, FocusEventHandler, MouseEvent } from 'react';

export type InputType = 
| 'text'
| 'email'
| 'date'
| 'number';

export interface BaseFormInputProps {
    id: string;
    name: string;
    disabled?: boolean;
    onChange?: ChangeEventHandler;
    onBlur?: FocusEventHandler;
    error?: string;
    touched?: boolean;
    label?: string;
    fieldRequired?: boolean;
    maxLength?: number;
}
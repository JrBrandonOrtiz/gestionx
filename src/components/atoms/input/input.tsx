import React from 'react';

interface InputProps {
    type: string;
    className?: string;
    placeHolder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps> = ({
    type = '',
    className = '',
    placeHolder = '',
    value = '',
    onChange,

}) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
 
        />
    );
};

export default Input;

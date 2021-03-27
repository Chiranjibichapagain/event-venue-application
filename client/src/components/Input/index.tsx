import React from 'react';
import { InputProps } from '../../types';

import './Input.scss';
const Input = ({ handleInputChange, placeholder, type, modifier }: InputProps) => {
  return (
    <input
      onChange={handleInputChange}
      placeholder={placeholder}
      type={type}
      className={`input input--${modifier}`}
    />
  );
};

export default Input;

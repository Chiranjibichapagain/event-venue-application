import React from 'react';
import { InputProps } from '../../types';

import './Input.scss';
const Input = ({
  handleInputChange,
  placeholder,
  type,
  modifier,
  id,
  handleClick,
  minLength,
  maxLength
}: InputProps) => {
  return (
    <input
      id={id}
      onClick={handleClick}
      onChange={handleInputChange}
      placeholder={placeholder}
      type={type}
      className={`input input--${modifier}`}
      min={2020}
      max={2040}
    />
  );
};

export default Input;

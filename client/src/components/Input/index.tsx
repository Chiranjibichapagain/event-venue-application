import React from 'react';
import { InputProps } from '../../types';

import './Input.scss';
const Input = ({
  handleInputChange,
  placeholder,
  type,
  modifier,
  id,
  value,
  handleClick,
  handleFocus,
  handleBlur
}: InputProps) => {
  return (
    <input
      id={id}
      value={value}
      onClick={handleClick}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      type={type}
      required
      className={`input input--${modifier}`}
    />
  );
};

export default Input;

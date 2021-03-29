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
  handleFocus
}: InputProps) => {
  return (
    <input
      id={id}
      onClick={handleClick}
      onChange={handleInputChange}
      onFocus={handleFocus}
      placeholder={placeholder}
      type={type}
      className={`input input--${modifier}`}
    />
  );
};

export default Input;

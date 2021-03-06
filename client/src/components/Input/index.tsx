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
  defaultValue,
  handleClick,
  handleFocus,
  handleBlur,
  required,
  label
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        value={value}
        defaultValue={defaultValue}
        onClick={handleClick}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        type={type}
        required={required}
        className={`input input--${modifier}`}
      />
    </>
  );
};

export default Input;

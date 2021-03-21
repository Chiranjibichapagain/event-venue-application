import React from 'react';
import { ButtonProps } from '../../types';

import './Button.scss';
const Button = ({ text, modifier, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className={`button button--${modifier}`}>
      {text}
    </button>
  );
};

export default Button;

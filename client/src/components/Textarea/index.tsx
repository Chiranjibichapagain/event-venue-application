import React from 'react';
import { TextareaProps } from '../../types';

import './Textarea.scss';

const Textarea = ({ placeholder, handleInputChange, value, id, rows }: TextareaProps) => {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      onChange={handleInputChange}
      value={value}
      id={id}
      rows={rows}
    />
  );
};

export default Textarea;

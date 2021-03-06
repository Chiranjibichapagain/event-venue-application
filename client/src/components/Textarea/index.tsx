import React from 'react';
import { TextareaProps } from '../../types';

import './Textarea.scss';

const Textarea = ({
  placeholder,
  handleInputChange,
  value,
  defaultValue,
  id,
  rows,
  label
}: TextareaProps) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <textarea
        className="textarea"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        defaultValue={defaultValue}
        id={id}
        rows={rows}
      />
    </>
  );
};

export default Textarea;

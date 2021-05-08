import { useState } from 'react';

export const useForm = (initialState: any) => {
  const [fields, setFields] = useState(initialState);

  return [
    fields,
    (event: any) => {
      setFields({ ...fields, [event.target.id]: event.target.value });
    },
    () => {
      setFields(initialState);
    }
  ];
};

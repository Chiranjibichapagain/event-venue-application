import React from 'react';

import { data } from '../../utils/dummydata';
import { useForm } from '../../Hooks/useForm';

import './VenueEditPage.scss';
import Input from '../../components/Input';

const VenueEditPage = ({ match }) => {
  const id = match.params.id;
  const venue = data && data.find((item) => item.id === parseInt(id));

  const [fields, setFields] = useForm({
    name: venue?.venueName
  });

  const { name } = fields;

  return (
    <div className="venue-edit">
      <h1 className="venue-edit__heading">Update Venue Information</h1>
      <div className="venue-edit__form">
        <Input id="name" value={name} handleInputChange={setFields} type="text" />
      </div>
    </div>
  );
};

export default VenueEditPage;

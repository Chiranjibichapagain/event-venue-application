import React from 'react';

import { data } from '../../utils/dummydata';
import { useForm } from '../../Hooks/useForm';

import './VenueEditPage.scss';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

const VenueEditPage = ({ match }) => {
  const id = match.params.id;
  const venue = data && data.find((item) => item.id === parseInt(id));

  const [fields, setFields] = useForm({
    name: venue?.venueName,
    price: venue?.price,
    area: venue?.area,
    address: venue?.address,
    people: venue?.people,
    description: venue?.description
  });

  const { name, price, address, people, area, description } = fields;

  console.log('xxxx--', description);
  return (
    <div className="venue-edit">
      <h1 className="venue-edit__heading">Update Venue Information</h1>
      <div className="venue-edit__form">
        <Input id="name" value={name} handleInputChange={setFields} type="text" />
        <Input id="address" value={address} handleInputChange={setFields} type="text" />
        <Input id="area" value={area} handleInputChange={setFields} type="text" />
        <Input id="people" value={people} handleInputChange={setFields} type="number" />
        <Input id="price" value={price} handleInputChange={setFields} type="number" />
        <Input id="name" value={name} handleInputChange={setFields} type="text" />
        <Textarea
          id="description"
          value={description}
          handleInputChange={setFields}
          type="text"
          rows={4}
        />
      </div>
    </div>
  );
};

export default VenueEditPage;

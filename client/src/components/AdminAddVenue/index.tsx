import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';

import { useForm } from '../../Hooks/useForm';
import { featureOptions } from '../../utils/venueConstants';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import './AdminAddVenue.scss';

const AdminAddVenue = () => {
  const history = useHistory();
  const [featureList, setFeatureList] = useState<string[]>([]);
  const [photoList, setPhotoList] = useState<string[]>([]);

  const [fields, setFields] = useForm({
    name: '',
    price: '',
    area: '',
    address: '',
    people: '',
    description: ''
  });

  const { name, price, address, people, area, description } = fields;

  const handleFeatureListChange = (options) => {
    const feat = options.map((opt) => opt.value);
    setFeatureList(feat);
  };
  const handlePhotoListChange = (options) => {
    const photos = options.map((opt) => opt.value);
    setPhotoList(photos);
  };

  const handleUpdateVenue = () => {
    history.push('/admin');
  };

  console.log('xxx--', photoList, featureList);

  return (
    <div className="new-venue">
      <h1 className="new-venue__heading">Add a new venue</h1>
      <div className="new-venue__form">
        <Input id="name" value={name} handleInputChange={setFields} type="text" />
        <Input id="area" value={area} handleInputChange={setFields} type="text" />
        <Input id="people" value={people} handleInputChange={setFields} type="number" />
        <Input id="address" value={address} handleInputChange={setFields} type="text" />
        <Input id="price" value={price} handleInputChange={setFields} type="number" />
        <Textarea
          id="description"
          value={description}
          handleInputChange={setFields}
          type="text"
          rows={4}
        />

        <p className="new-venue__label">Features</p>
        <CreatableSelect
          options={featureOptions}
          className="new-venue__select"
          isMulti
          id="features"
          placeholder="Select features"
          onChange={handleFeatureListChange}
        />
        <p className="new-venue__label">Venue Photos</p>
        <CreatableSelect
          className="new-venue__select"
          isMulti
          id="features"
          placeholder="Add photo URLs"
          onChange={handlePhotoListChange}
        />

        <Button text="Create" modifier="small" handleClick={handleUpdateVenue} />
      </div>
    </div>
  );
};

export default AdminAddVenue;

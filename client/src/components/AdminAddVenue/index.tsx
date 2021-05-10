import React, { useState, ChangeEvent } from 'react';
import { AxiosResponse } from 'axios';
import CreatableSelect from 'react-select/creatable';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import { useForm } from '../../Hooks/useForm';
import { featureOptions, photoOptions } from '../../utils/venueConstants';
import { useUser } from '../../Hooks/useUser';
import { addVenue } from '../../services/venueServices';

import './AdminAddVenue.scss';
import { FeatureOption } from '../../types';

const AdminAddVenue = ({ setView, setStatus }) => {
  const [featureList, setFeatureList] = useState<string[]>([]);
  const [photoList, setPhotoList] = useState<string[]>([]);
  const [user] = useUser();

  const [fields, setFields] = useForm({
    name: '',
    price: '',
    area: '',
    address: '',
    people: '',
    description: ''
  });

  const { name, price, address, people, area, description } = fields;

  const handleFeatureListChange = (options: FeatureOption[]) => {
    const feat = options.map((opt: FeatureOption) => opt.value);
    setFeatureList(feat);
  };
  const handlePhotoListChange = (options) => {
    const photos = options.map((opt) => opt.value);
    setPhotoList(photos);
  };

  const handleCreateVenue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const venue = {
      venueName: name,
      area,
      people,
      description,
      photos: photoList,
      features: featureList,
      price,
      address
    };
    const config = { headers: { authorization: `bearer ${user?.token}` } };
    addVenue(venue, config)
      .then((response: AxiosResponse) => {
        if (response.data) {
          setView('venues');
          setStatus('created');
          setTimeout(() => {
            setStatus('');
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: 50
    })
  };

  return (
    <div className="new-venue">
      <h1 className="new-venue__heading">Add a new venue</h1>
      <div className="new-venue__form">
        <Input
          placeholder="Name"
          id="name"
          value={name}
          handleInputChange={setFields}
          type="text"
          label="Venue Name"
        />
        <Input
          placeholder="Venue area in sqm"
          id="area"
          value={area}
          handleInputChange={setFields}
          type="text"
          label="Venue size"
        />
        <Input
          placeholder="Max number of people"
          id="people"
          value={people}
          handleInputChange={setFields}
          type="number"
          label="Capacity"
        />
        <Input
          placeholder="Venue Address"
          id="address"
          value={address}
          handleInputChange={setFields}
          type="text"
          label="Address"
        />
        <Input
          placeholder="Price per day"
          id="price"
          value={price}
          handleInputChange={setFields}
          type="number"
          label="Price"
        />
        <Textarea
          placeholder="Venue description"
          id="description"
          value={description}
          handleInputChange={setFields}
          rows={4}
          label="Description"
        />

        <p className="new-venue__label">Features</p>
        <CreatableSelect
          styles={customStyles}
          options={featureOptions}
          className="new-venue__select"
          isMulti
          id="features"
          placeholder="Select features"
          onChange={handleFeatureListChange}
        />
        <p className="new-venue__label">Venue Photos</p>
        <CreatableSelect
          styles={customStyles}
          options={photoOptions}
          className="new-venue__select"
          isMulti
          id="features"
          placeholder="Add photo URLs"
          onChange={handlePhotoListChange}
        />

        <Button text="Create" modifier="small" handleClick={handleCreateVenue} />
      </div>
    </div>
  );
};

export default AdminAddVenue;

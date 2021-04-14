import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { data } from '../../utils/dummydata';
import { featureOptions, images } from '../../utils/venueConstants';
import { useForm } from '../../Hooks/useForm';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import './VenueEditPage.scss';
import Button from '../../components/Button';

const VenueEditPage = ({ match }) => {
  const history = useHistory();
  const id = match.params.id;
  const venue = data && data.find((item) => item.id === parseInt(id));
  const [featureList, setFeatureList] = useState<string[]>([]);
  const [photoList, setPhotoList] = useState<string[]>([]);

  const [fields, setFields] = useForm({
    name: venue?.venueName,
    price: venue?.price,
    area: venue?.area,
    address: venue?.address,
    people: venue?.people,
    description: venue?.description
  });

  const { name, price, address, people, area, description } = fields;

  const defaultFeatures = venue?.features.map((item) => {
    return { value: item, label: item };
  });

  const defaultPhotos = venue?.photos.map((item) => {
    return {
      value: item,
      label: (
        <div>
          <img src={item} height="70px" width="90px" />
        </div>
      )
    };
  });

  const photoOptions = images.map((item) => {
    return {
      value: item,
      label: (
        <div>
          <img src={item} height="70px" width="90px" />
        </div>
      )
    };
  });

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

  console.log('xxx--', photoList);

  return (
    <div className="venue-edit">
      <h1 className="venue-edit__heading">Update Venue Information</h1>
      <div className="venue-edit__form">
        <p className="venue-edit__label">Venue Name</p>
        <Input id="name" value={name} handleInputChange={setFields} type="text" />
        <p className="venue-edit__label">Venue Size</p>
        <Input id="area" value={area} handleInputChange={setFields} type="text" />
        <p className="venue-edit__label">Number of people</p>
        <Input id="people" value={people} handleInputChange={setFields} type="number" />
        <p className="venue-edit__label">Address</p>
        <Input id="address" value={address} handleInputChange={setFields} type="text" />
        <p className="venue-edit__label">Price (€)</p>
        <Input id="price" value={price} handleInputChange={setFields} type="number" />
        <p className="venue-edit__label">Description</p>
        <Textarea id="description" value={description} handleInputChange={setFields} rows={4} />
        <p className="venue-edit__label">Features</p>
        <Select
          options={featureOptions}
          className="venue-edit__select"
          isMulti
          id="features"
          placeholder="Select features"
          defaultValue={defaultFeatures}
          onChange={handleFeatureListChange}
        />
        <p className="venue-edit__label">Venue Photos</p>
        <CreatableSelect
          options={photoOptions}
          className="venue-edit__select"
          isMulti
          id="features"
          placeholder="Select features"
          defaultValue={defaultPhotos}
          onChange={handlePhotoListChange}
        />

        <Button text="Update" modifier="small" handleClick={handleUpdateVenue} />
      </div>
    </div>
  );
};

export default VenueEditPage;

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
import { useOneVenue } from '../../Hooks/useData';
import { editVenue } from '../../services/venueServices';
import { useUser } from '../../Hooks/useUser';

const VenueEditPage = ({ match }) => {
  const history = useHistory();
  const id = match.params.id;
  const [venue] = useOneVenue(id);
  const [user] = useUser();
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

  const { name, price, area, address, people, description } = fields;

  console.log('0000---', venue?.price);

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

  const handleUpdateVenue = (e: any) => {
    e.preventDefault();
    const config = { headers: { authorization: `bearer ${user?.token}` } };
    const updates = {
      name,
      price,
      area,
      address,
      people,
      description,
      features: featureList,
      photos: photoList
    };

    editVenue(id, updates, config)
      .then((response: any) => {
        if (response.data) {
          history.push('/admin');
        }
      })
      .catch((error: any) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="venue-edit">
      <h1 className="venue-edit__heading">Update Venue Information</h1>
      {venue && (
        <form className="venue-edit__form">
          <p className="venue-edit__label">Venue Name</p>
          <Input
            id="name"
            defaultValue={venue.venueName}
            handleInputChange={setFields}
            type="text"
          />
          <p className="venue-edit__label">Venue Size</p>
          <Input id="area" defaultValue={venue.area} handleInputChange={setFields} type="text" />
          <p className="venue-edit__label">Number of people</p>
          <Input
            id="people"
            defaultValue={venue.people}
            handleInputChange={setFields}
            type="number"
          />
          <p className="venue-edit__label">Address</p>
          <Input
            id="address"
            defaultValue={venue.address}
            handleInputChange={setFields}
            type="text"
          />
          <p className="venue-edit__label">Price (€)</p>
          <Input
            id="price"
            defaultValue={venue.price}
            handleInputChange={setFields}
            type="number"
          />
          <p className="venue-edit__label">Description</p>
          <Textarea
            id="description"
            defaultValue={venue.description}
            handleInputChange={setFields}
            rows={4}
          />
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
        </form>
      )}
    </div>
  );
};

export default VenueEditPage;

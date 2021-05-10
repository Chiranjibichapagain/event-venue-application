import React, { useState, ChangeEvent } from 'react';

const ImageUpload = ({ setImage }) => {
  const [loading, setLoading] = useState(false);
  console.log(loading);

  // eslint-disable-next-line no-undef

  const api = 'https://api.cloudinary.com/v1_1/chiranjibi/image/upload';

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const data = new FormData();
    if (files) {
      data.append('file', files[0]);
      data.append('upload_preset', 'preset1');
      setLoading(true);
    }
    const res = await fetch(api, {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    setImage(file.secure_url);
  };

  return (
    <input
      className="image-upload"
      onChange={uploadImage}
      name="file"
      placeholder="Upload an image"
      type="file"
    />
  );
};

export default ImageUpload;

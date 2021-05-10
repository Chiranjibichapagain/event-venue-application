export {};
// const mongoose = require('mongoose');

import mongoose, { Document } from 'mongoose';

export type VenueDocument = Document & {
  venueName: string;
  area: number;
  people: number;
  price: number;
  description: string;
  address: string;
  features: string[];
  photos: string[];
  bookings: string[];
};

const venueSchema = new mongoose.Schema({
  venueName: {
    type: String,
    require: 'Venue Name is required'
  },

  area: {
    type: Number,
    require: 'Area is required'
  },

  people: {
    type: Number,
    require: 'People number is required'
  },

  price: {
    type: Number,
    require: 'Price is required'
  },

  description: {
    type: String,
    require: 'Description is required'
  },

  address: {
    type: String,
    require: 'Address is required'
  },

  features: [
    {
      type: String,
      require: true
    }
  ],

  photos: [
    {
      type: String,
      require: true
    }
  ],

  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }
  ]
});

venueSchema.set('toJSON', {
  transform: (document: VenueDocument, returnedObject: Partial<VenueDocument>) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model<VenueDocument>('Venue', venueSchema);

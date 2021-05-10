// const mongoose = require('mongoose');
import mongoose, { Document } from 'mongoose';
import { ClientInfo, Date } from '../types';

export type BookingDocument = Document & {
  dates: Date[];
  clientInfo: ClientInfo;
  venue: String;
};

const bookingSchema = new mongoose.Schema({
  dates: [
    {
      day: Number,
      month: Number,
      year: Number
    }
  ],
  clientInfo: {
    name: {
      type: String,
      require: 'Name is required'
    },

    email: {
      type: String,
      require: 'Email is required'
    },

    phone: {
      type: String,
      require: 'Phone number is required'
    },

    message: {
      type: String
    }
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venue'
  }
});

bookingSchema.set('toJSON', {
  transform: (document: BookingDocument, returnedObject: Partial<BookingDocument>) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model<BookingDocument>('Booking', bookingSchema);

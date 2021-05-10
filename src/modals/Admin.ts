export {};
// const mongoose = require('mongoose');
import mongoose, { Document } from 'mongoose';

export type AdminDocument = Document & {
  name: string;
  email: string;
  password: string;
};

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: 'Name is required'
  },

  email: {
    type: String,
    require: 'Email is required'
  },

  password: {
    type: String,
    require: 'Password is required',
    minlength: 4
  }
});

adminSchema.set('toJSON', {
  transform: (document: AdminDocument, returnedObject: Partial<AdminDocument>) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model<AdminDocument>('Admin', adminSchema);

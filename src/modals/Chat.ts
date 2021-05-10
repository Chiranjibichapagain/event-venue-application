export {};
// const mongoose = require('mongoose');
import mongoose, { Document } from 'mongoose';

export type ChatDocument = Document & {
  message: string;
  name: string;
  type: 'organize' | 'guest';
  time: string;
  roomId: string;
};

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    require: 'Name is required'
  },

  name: {
    type: String,
    require: 'sender is required'
  },

  time: {
    type: String,
    require: 'time is required'
  },

  type: {
    type: String,
    require: 'type is required'
  },

  room: {
    type: String,
    require: 'Room id is required'
  }
});

chatSchema.set('toJSON', {
  transform: (document: ChatDocument, returnedObject: Partial<ChatDocument>) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model<ChatDocument>('Chat', chatSchema);

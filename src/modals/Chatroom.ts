export {};
// const mongoose = require('mongoose');
import mongoose, { Document } from 'mongoose';

export type ChatroomDocument = Document & {
  name: string;
  email: string;
  chat: string;
};

const chatroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required'
  },

  email: {
    type: String,
    required: 'Email is required'
  },

  chat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat'
    }
  ]
});

chatroomSchema.set('toJSON', {
  transform: (document: ChatroomDocument, returnedObject: Partial<ChatroomDocument>) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model<ChatroomDocument>('Chatroom', chatroomSchema);

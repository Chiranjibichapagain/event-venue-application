export {};
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      require: 'Name is required'
    },

    sender: {
      type: String,
      require: 'Email is required'
    },

    time: {
      type: String
    },

    type: {
      type: String
    }
  },
  { timeStamps: true }
);

chatSchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Chat', chatSchema);

export {};
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
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

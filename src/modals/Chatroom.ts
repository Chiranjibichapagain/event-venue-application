export {};
const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema(
  {
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
  },
  { timeStamps: true }
);

chatroomSchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Chatroom', chatroomSchema);

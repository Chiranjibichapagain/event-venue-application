export {}
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: 'Name is required',
  },
  
  email: {
    type: String,
    require: 'Email is required',
  },

  password: {
    type: String,
    require: 'Password is required',
  },
  
});

adminSchema.set('toJSON', {
  transform: (document:any, returnedObject:any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Admin', adminSchema);

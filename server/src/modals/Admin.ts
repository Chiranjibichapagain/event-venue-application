export {}
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  
  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
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

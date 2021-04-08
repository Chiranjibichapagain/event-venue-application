const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  dates: [
    {
      day: Number,
      month: Number,
      year: Number,
    },
  ],
  clientInfo: {
    name: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,
    },

    phone: {
      type: String,
      require: true,
    },

    message: {
      type: String,
      require: true,
    },
  },
});

bookingSchema.set('toJSON', {
  transform: (document:any, returnedObject:any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Booking', bookingSchema);

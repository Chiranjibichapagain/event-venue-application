export {}
const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  venueName: {
    type: String,
    require: 'Venue Name is required',
  },

  area: {
    type: Number,
    require: 'Area is required',
  },

  people: {
    type: Number,
    require: 'People number is required',
  },

  price: {
    type: Number,
    require: 'Price is required',
  },

  description: {
    type: String,
    require: 'Description is required',
  },

  address: {
    type: String,
    require: 'Address is required',
  },

  features: [
    {
      type: String,
      require: true,
    },
  ],

  photos: [
    {
      type: String,
      require: true,
    },
  ],

  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

venueSchema.set('toJSON', {
  transform: (document:any, returnedObject:any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Venue', venueSchema);

const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  venueName: {
    type: String,
    require: true,
  },

  area: {
    type: Number,
    require: true,
  },

  people: {
    type: Number,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  address: {
    type: String,
    require: true,
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
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Venue', venueSchema);

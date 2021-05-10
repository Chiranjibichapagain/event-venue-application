export {};
import { Request, Response } from 'express';
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');
import { adminRouter } from './routes/adminRouter';
import { bookingRouter } from './routes/bookingRouter';
import { venueRouter } from './routes/venueRouter';

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error: any) => {
    console.log('error connection to MongoDB:', error.message);
  });

app.use('/api/venue', venueRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/admin', adminRouter);

//Heroku---
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.get('/*', (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = app;

export const bookingRouter = require('express').Router();
import {getAllBookings, addNewBooking} from '../controllers/booking'

bookingRouter.get('/', getAllBookings)
bookingRouter.post('/', addNewBooking)
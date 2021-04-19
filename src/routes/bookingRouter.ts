export const bookingRouter = require('express').Router();
import {getAllBookings, addNewBooking, getSingleBooking} from '../controllers/booking'

bookingRouter.get('/', getAllBookings)
bookingRouter.get('/:bookingId', getSingleBooking)
bookingRouter.post('/', addNewBooking)
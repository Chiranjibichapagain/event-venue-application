export const venueRouter = require('express').Router();
import { getAllVenues, addNewVenue, getSingleVenue, updateVenue } from '../controllers/venue'
import { isAuthenticated } from '../helpers/middlewares'


venueRouter.get('/',  getAllVenues)
venueRouter.get('/:venueId',  getSingleVenue)
venueRouter.put('/:venueId', isAuthenticated, updateVenue )
venueRouter.post('/', isAuthenticated, addNewVenue)


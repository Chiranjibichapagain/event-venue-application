export const venueRouter = require('express').Router();
import { getAllVenues, addNewVenue, getSingleVenue, updateVenue, deleteVenue } from '../controllers/venue'
import { isAuthenticated } from '../helpers/middlewares'


venueRouter.get('/',  getAllVenues)
venueRouter.get('/:venueId',  getSingleVenue)
venueRouter.put('/:venueId', isAuthenticated, updateVenue )
venueRouter.delete('/:venueId', isAuthenticated, deleteVenue )
venueRouter.post('/', isAuthenticated, addNewVenue)


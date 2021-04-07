export const venueRouter = require('express').Router();
import {getAllVenues, addNewVenue} from '../controllers/venue'

venueRouter.get('/', getAllVenues)
venueRouter.post('/', addNewVenue)


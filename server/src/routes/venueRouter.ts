export const venueRouter = require('express').Router();
import { getAllVenues, addNewVenue } from '../controllers/venue'
import {isAuthenticated} from '../helpers/middlewares'

venueRouter.get('/',  getAllVenues)
venueRouter.post('/', isAuthenticated, addNewVenue)


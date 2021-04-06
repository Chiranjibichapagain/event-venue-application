export const venueRouter = require('express').Router();
import {getAllVenues} from '../controllers/venue'

venueRouter.get('/', getAllVenues)


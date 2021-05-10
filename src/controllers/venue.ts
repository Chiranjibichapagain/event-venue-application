import { Request, Response, NextFunction } from 'express';
const Venue = require('../modals/Venue');
const Booking = require('../modals/Booking');
const { NotFoundError, BadRequestError } = require('../helpers/apiError');

export const getAllVenues = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const venues = await Venue.find({}).populate('bookings');
    if (venues.length > 0) {
      res.json(venues);
    } else {
      throw Error;
    }
  } catch (error) {
    next(new NotFoundError('No venues found', error));
  }
};

export const getSingleVenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { venueId } = req.params;
    const venue = await Venue.findOne({ _id: venueId }).populate('bookings');
    if (venue) {
      res.json(venue);
    } else {
      throw Error;
    }
  } catch (error) {
    next(new NotFoundError('No venue with the given ID found', error));
  }
};

export const updateVenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { venueId } = req.params;
    const { venueName, area, people, price, description, address, features, photos } = req.body;
    const venue = await Venue.findOne({ _id: venueId });
    if (venue) {
      const updatedVenue = {
        venueName: venueName ? venueName : venue.venueName,
        area: area ? area : venue.area,
        people: people ? people : venue.people,
        price: price ? price : venue.price,
        description: description ? description : venue.description,
        address: address ? address : venue.address,
        features: features.length > 1 ? features : venue.features,
        photos: photos.length > 1 ? photos : venue.photos
      };
      await Venue.findByIdAndUpdate(venueId, updatedVenue, { new: true }).then((updated: any) => {
        res.status(200).json({
          message: `Venue ${venue.venueName} successfully updated`,
          updatedVenue: updated
        });
      });
    } else {
      throw Error;
    }
  } catch (error) {
    next(new NotFoundError('No venue with the given ID found', error));
  }
};

export const deleteVenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { venueId } = req.params;
    const venue = await Venue.findOne({ _id: venueId });
    if (venue) {
      await Venue.findByIdAndDelete(venueId);
      res.status(200).json({ message: `Venue ${venue.venueName} successfully deleted` });
      await Booking.deleteMany({ venue: venueId });
    } else {
      throw Error;
    }
  } catch (error) {
    next(new NotFoundError('No venue with the given ID found', error));
  }
};

export const addNewVenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { venueName, area, people, description, photos, features, price, address } = req.body;
    const newVenue = {
      venueName,
      area,
      people,
      description,
      photos,
      features,
      price,
      address
    };

    const savedVenue = await new Venue(newVenue).save();
    res.json(savedVenue);
  } catch (error) {
    next(new BadRequestError('Failed to add the venue', error));
  }
};

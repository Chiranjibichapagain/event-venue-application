import { Request, Response, NextFunction } from "express"
const Booking = require("../modals/Booking")
const Venue = require("../modals/Venue")
const { NotFoundError, BadRequestError } = require('../helpers/apiError')


export const getAllBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings = await Booking.find({}).populate('venue')
    if (bookings) {
      res.json(bookings)

    } else {
      throw Error
    }
  } catch (error) {
    next(new NotFoundError('No bookings found', error))
  }

}

export const getSingleBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookingId } = req.params
      const booking = await Booking.findOne({_id:bookingId})
      if (booking) {
        res.json(booking)
      } else {
        throw Error
      }
    
  } catch (error) {
     next(new NotFoundError('No booking with given ID found', error))
  }
}

export const updateBooking = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { bookingId } = req.params
        const{clientInfo, dates}= req.body
        const booking = await Booking.findOne({ _id: bookingId })
        if (booking) {
          const updatedBooking = {
            clientInfo: clientInfo ? clientInfo : booking.clientInfo,
            dates: dates ? dates : booking.dates
          }
          await Booking.findByIdAndUpdate(bookingId, updatedBooking, { new: true })
            .then((updated: any) => {
            res.status(200).json({message:`Booking ${booking.id} successfully updated`, updatedBooking:updated})
          })
        } else {
          throw Error
        }
        
    } catch (error) {
        next(new NotFoundError('No booking with the given ID found', error))
    }
}

export const deleteBooking = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const { bookingId } = req.params
        const booking = await Booking.findOne({ _id: bookingId })
        if (booking) {
          await Booking.findByIdAndDelete(bookingId)
    //       Venue.findOneAndUpdate({ _id: venueId }, { $pop: { bookings: 1 } }, { upsert: true })
    //   .then((result: any) => {
    //   console.log(result)
    // }).catch((error:any) => {
    //   console.log(error)
    // })
            res.status(200).json({message:`booking ${booking.id} successfully deleted`})
        } else {
            throw Error
        }
    } catch (error) {
       next(new NotFoundError('No booking with the given ID found', error)) 
    }
}

export const addNewBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { venueId, clientInfo, dates } = req.body
    const newBooking = {
      clientInfo,
      dates,
      venue:venueId
    }
    
    const savedBooking = await new Booking(newBooking).save()
    const bookingID =savedBooking.id
    Venue.findOneAndUpdate({ _id: venueId }, { $push: { bookings: bookingID } }, { upsert: true })
      .then((result: any) => {
      console.log(result)
    }).catch((error:any) => {
      console.log(error)
    })
    

  } catch (error) {
    next(new BadRequestError('Failed to create the booking', error))
  }
}


import { Request, Response } from "express"
const Booking = require("../modals/Booking")


export const getAllBookings = async(req:Request, res:Response) => {
    try {
        const venues = await Booking.find({})
    res.json(venues)
    } catch (error) {
       console.log('errorr--', error) 
    }

}

export const addNewBooking = async (req: Request, res: Response) => {
    try {
        const { clientInfo, dates } = req.body
        const newBooking = {
            clientInfo,
            dates
        }

        const savedBooking = await new Booking(newBooking).save()
        res.json(savedBooking)
        
    } catch (error) {
        console.log('error----', error)
    }
}


import { Request, Response } from "express"
const Venue= require ("../modals/Venue")


export const getAllVenues = async(req:Request, res:Response) => {
    try {
       const venues = await Venue.find({})
    res.json(venues) 
    } catch (error) {
        console.log('errorr---', error)
    }

}

export const addNewVenue = async (req: Request, res: Response) => {
    try {
        const { venueName, area, people, description, photos, features, price, address } = req.body
        const newVenue = {
            venueName,
            area,
            people,
            description,
            photos,
            features,
            price,
            address
        }

        const savedVenue = await new Venue(newVenue).save()
        res.json(savedVenue)
        
    } catch (error) {
        console.log('error----', error)
    }
}


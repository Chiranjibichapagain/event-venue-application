import { Request, Response } from "express"


export const getAllVenues = (req:Request, res:Response) => {
    res.send('These are the venues')
}


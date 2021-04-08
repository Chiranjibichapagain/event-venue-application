import { Request, Response } from "express"
const Admin = require("../modals/Admin")


export const getAllAdmins = async(req:Request, res:Response) => {
    try {
        const venues = await Admin.find({})
    res.json(venues)
    } catch (error) {
       console.log('errorr--', error) 
    }

}

export const addNewAdminUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        const newUser = {
            name,
            email,
            password
        }

        const savedUser = await new Admin(newUser).save()
        res.json(savedUser)
        
    } catch (error) {
        console.log('error----', error)
    }
}
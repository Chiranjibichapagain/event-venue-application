import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

const Admin = require("../modals/Admin")
const {SECRET}= require('../utils/config')


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
        const existingAdmin = await Admin.findOne({ email: email })
        
        if (existingAdmin) {
            res.json({message:'User with given email already exists!'})
        } else {
            const saltRounds = 10;
            const hashedPassword= await bcrypt.hash(password, saltRounds)
            const newUser = {
                name,
                email,
                password:hashedPassword
            }
    
            const savedUser = await new Admin(newUser).save()
            res.json(savedUser)
        }
        
    } catch (error) {
        console.log('error----', error)
    }
}

export const logAdminUser = async (req:Request, res:Response) => {
    try {
        const { email, password } = req.body
        const user = await Admin.findOne({ email: email })
        const correctPassword = !user ? null : await bcrypt.compare(password, user.password)
        if (!(user && correctPassword)) {
            return res.status(401).json({error: 'Invalid username or password!'})
        }

        const tokenInfo = {
            email,
            name:user.name,
            userId: user.id
        }
        const token = await JWT.sign(tokenInfo, SECRET)
        res.status(200).send({token, tokenInfo})

    } catch (error) {
       console.log('error---', error) 
    }
}
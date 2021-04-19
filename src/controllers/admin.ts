import { Request, Response, NextFunction } from "express"
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

const Admin = require("../modals/Admin")
const { SECRET } = require('../utils/config')
const {NotFoundError, BadRequestError}= require('../helpers/apiError')


export const getAllAdmins = async(req:Request, res:Response) => {
    try {
        const venues = await Admin.find({})
    res.json(venues)
    } catch (error) {
       console.log('errorr--', error) 
    }

}

export const addNewAdminUser = async (req: Request, res: Response, next:NextFunction ) => {
    try {
        const { name, email, password } = req.body
        const existingAdmin = await Admin.findOne({ email: email })
        
        if (existingAdmin) {
            throw new Error("Account with the given Email already exists");
            
        } else if(password.length<4) {
            throw new Error('Password must be atleast 4 characters long')
            
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
        res.status(400).json({error:error.message})
    }
}

export const logAdminUser = async (req:Request, res:Response) => {
    try {
        const { email, password } = req.body
        const user = await Admin.findOne({ email: email })
        const correctPassword = !user ? null : await bcrypt.compare(password, user.password)
        if (!(user && correctPassword)) {
            throw new Error('Email and password not matched!')
        }

        const userInfo = {
            email,
            name:user.name,
            userId: user.id
        }
        const token = await JWT.sign(userInfo, SECRET)
        res.status(200).send({token, userInfo})

    } catch (error) {
       res.status(401).json({error:error.message})
    }
}
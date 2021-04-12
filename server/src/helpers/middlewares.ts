import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
const { SECRET }= require('../utils/config')

export const tokenExtractor = (request:Request, response:Response, next:NextFunction) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    return authorization.substring(7);
  }
  return null;

  next();
};

export const isAuthenticated=  async(req: Request, res: Response, next: NextFunction)=> {
  const token = req.get('authorization')
  if (!token) return res.status(401).send('excess denied')
  try {
      const cleanToken= token.substring(7)
      console.log('testt--', SECRET)
      const verified = await jwt.verify(cleanToken, SECRET)
      if (verified) {
        return next()
    }
  } catch (error) {
    res.status(400).send('Token not found or invalid token')
  }
}

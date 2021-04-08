export const adminRouter = require('express').Router();
import {getAllAdmins, addNewAdminUser} from '../controllers/admin'

adminRouter.get('/', getAllAdmins)
adminRouter.post('/', addNewAdminUser)
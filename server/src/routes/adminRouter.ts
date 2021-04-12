export const adminRouter = require('express').Router();
import {getAllAdmins, addNewAdminUser, logAdminUser} from '../controllers/admin'

adminRouter.get('/', getAllAdmins)
adminRouter.post('/', addNewAdminUser)
adminRouter.post('/login', logAdminUser)
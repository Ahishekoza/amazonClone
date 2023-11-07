import express from 'express';
import { registerUser, verifyToken } from '../controller/AuthController.js';
const router =  express.Router()


router.post('/register',registerUser)
router.get('/verify/:token',verifyToken)


export default router
import express from 'express';
import { addAddress, getAllAddress, login, registerUser, verifyToken } from '../controller/AuthController.js';
const router =  express.Router()


router.post('/register',registerUser)
router.get('/verify/:token',verifyToken)
router.post('/login',login)
router.post('/address',addAddress)
router.get('/getAddress/:userId',getAllAddress)


export default router
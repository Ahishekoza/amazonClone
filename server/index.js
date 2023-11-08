import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import AuthRouter from './routes/AuthRouter.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://abhishekoza11:Rupali2906@cluster0.pvpl7be.mongodb.net/')
.then(()=>{
console.log('Connected to MongoDB server Successfully')
})
.catch((error)=>{
    console.log('error connecting to MongoDB server', error)
})

app.use('/api',AuthRouter)

app.listen(8000,()=>{
    console.log('Backend listening on port 8000')
})
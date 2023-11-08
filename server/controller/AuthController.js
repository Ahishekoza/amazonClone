import userModel from '../models/userModel.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import jwtToken from 'jsonwebtoken'

const sendVerificationToken = async (email, verificationToken) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abhishekoza11@gmail.com',
            pass: 'sppk otzj sbps jtvu'
        },
        secure: true, // Use secure TLS connection
        secureOptions: {
            rejectUnauthorized: true, // Enforce strict TLS
            secureProtocol: 'TLSv1_2_method', // Use TLS 1.2
        },
    })

    // compose the email message
    const mailOptions = {
        from: 'amazona@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: `Please click the following link to verify your email : http://localhost:8000/api/verify/${verificationToken}`
    }


    try {
        await transporter.sendMail(mailOptions)
    }
    catch (error) {
        console.log('Error sending email', error);
    }
}



const jsonwebtoken = (user)=>{
    const payload = {
        id:user._id,
        email:user.email,
    }
    const secret_key = 'rupali2906'
    const option={
        expiresIn : '1d'   
    }

    const token = jwtToken.sign(payload,secret_key,option)
    return token
    
}


// --Register
export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        // check if user is already registered
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: 'User already registered'
            })
        }

        // If User is not registered then create a new user in the database
        const newUser = new userModel({ name, email, password })

        // before that generate a verification token
        newUser.verificationToken = crypto.randomBytes(20).toString('hex')

        //  save the new user
        await newUser.save()

        // send the verification token to the users email address
        sendVerificationToken(newUser.email, newUser.verificationToken)
        res.status(201).json({
            message:
                "Registration successful. Please check your email for verification.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration Failed'
        })
    }



}

// --VerficationToken
export const verifyToken = async (req, res) => {

    const token = req.params.token

    const user = await userModel.findOne({ verificationToken: token })
    if (!user) {
        return res.status(404).json({
            message: 'Invalid token'
        })
    }

    user.verified = true
    user.verificationToken = undefined


    await user.save({new: true})


    res.status(200).json({
        message: 'Email verified successfully'
    })

}

// --Login
export const login = async(req, res) => {
    const {email,password}=req.body

    // check if user is present 
    const user = await userModel.findOne({email: email})
    if(!user){
        return res.status(404).json({
            message:'User Not Found'
        })
    }

    if(user.password!==password){
        return res.status(404).json({
            message:'Invalid Incorrect'
        })
    }
    
    const token = jsonwebtoken(user)


    const sendUser = {
        name: user.name,
        email: user.email,
        token: token
    }


    res.status(201).json({
        message:'Successfully Logined',
        user:sendUser,
    })

}


// -- add address to the user address array
export const addAddress =async(req,res)=>{
    const {userId,address} = req.body

    const user = await userModel.findById({_id: userId})
    if(!user){
        return res.status(404).json({
            message: 'User not found'
        })
    }

    user.address.push(address)

    await user.save()

    res.status(200).json({
        message:'Address created successfully'
    })
}

// get all addresses
export const getAllAddress = async()=>{
    const {userId} = req.params

    await userModel.findById({_id: userId}).then((response)=>{
        res.status(200).json({
            address : response.address
        })
    }).catch((err)=>{
        res.status(500).json({
            message:`Error: ${err.message}`
        })
    })
}
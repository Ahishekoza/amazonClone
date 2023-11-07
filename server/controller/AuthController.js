import userModel from '../models/userModel.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

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
        text: `Please click the following link to verify your email : http://localhost:8000/verify/${verificationToken}`
    }


    try {
        await transporter.sendMail(mailOptions)
    }
    catch (error) {
        console.log('Error sending email', error);
    }
}

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
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration Failed'
        })
    }



}


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


    await user.save()


    res.status(200).json({
        message: 'Email verified successfully'
    })

}
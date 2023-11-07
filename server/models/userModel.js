import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        // Once the use is logged in we will send a 
        // email to verify the email , once the email is verified we will make the verified variable true
        type: Boolean,
        false: false
    },
    verificationToken: String,
    address: [
        {
            name: String,
            mobileNo: String,
            houseNo: String,
            street: String,
            landmark: String,
            city: String,
            country: String,
            postalCode: String,
        }
    ],
    // Order have a type Array which will contain the ids of the orders
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Order'
        }
    ]
    , createdAt:{
        type:Date,
        default:Date.now()
    }
})


export default mongoose.model('User', userSchema)
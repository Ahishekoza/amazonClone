import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Type Array
    products: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        },
    ],
    shippingAddress: {
        name: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: String,
            required: true,
        },
        houseNo: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
})


module.exports = mongoose.model('Order',orderSchema)
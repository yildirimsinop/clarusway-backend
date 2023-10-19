"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "firstName": "Test 1",
    "lastName": "Test 1",
    "gerder": "M",
    "email": "test1@site.com",
    "createdId": "652ceaa1bae9cde5e8a97522"
}
/* ------------------------------------------------------- */
// Passenger Model:

const PassengerSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: true,
    },

    lastName: {
        type: String,
        trim: true,
        required: true,
    },

    gender: {
        type: String,
        enum: [null, 'M', 'F'],
        default: null
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required.'],
        unique: [true, 'There is this email. Email field must be unique.'],
        validate: [
            (email) =>  {
                const emailRegexCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return emailRegexCheck.test(email)
            },
            'Email type is not correct.'
        ]
    },

    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, { collection: 'passengers', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Passenger', PassengerSchema)
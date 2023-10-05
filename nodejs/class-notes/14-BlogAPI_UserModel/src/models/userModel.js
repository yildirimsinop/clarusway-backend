"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email field must be required.'],
        validate: [
            (email) => (email.includes('@') && email.includes('.')), // ValidationCheck
            'Error type is incorrect.'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: true,
    },

    firstName: String,

    lastName: String,

}, {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
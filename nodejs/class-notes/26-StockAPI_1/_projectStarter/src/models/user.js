"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema({


    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    
}, 
 password: {
        type: String,
        trim: true,
        required: true
       
}, 
 email: {
        type: String,
        trim: true,
        required: true,
        unique: true
       
}, 

{ collection: 'users', timestamps: true})
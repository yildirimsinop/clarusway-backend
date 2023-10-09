"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const DepartmentShcema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
}, {
    collation: "departments",
    timestamps: true
})
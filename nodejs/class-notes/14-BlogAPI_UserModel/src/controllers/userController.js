"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Catch async-errors and send to errorHandler:
require('express-async-errors')

const User = require('../models/userModel')

// ------------------------------------------
// User
// ------------------------------------------
module.exports.User = {

    list: async (req, res) => {

        const data = await User.find()

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async (req, res) => {

        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            body: req.body,
            result: data,
        })
    },

    read: async (req, res) => {

        // req.params.categoryId
        // const data = await User.findById(req.params.categoryId)
        const data = await User.findOne({ _id: req.params.categoryId })

        res.status(200).send({
            error: false,
            result: data
        })

    },

    update: async (req, res) => {
        
        // const data = await User.findByIdAndUpdate(req.params.categoryId, req.body, { new: true }) // return new-data
        const data = await User.updateOne({ _id: req.params.categoryId }, req.body)

        res.status(202).send({
            error: false,
            body: req.body,
            result: data, // update infos
            newData: await User.findOne({ _id: req.params.categoryId })
        })

    },

    delete: async (req, res) => {
        
        const data = await User.deleteOne({ _id: req.params.categoryId })

        res.sendStatus( (data.deletedCount >= 1) ? 204 : 404 )

    },
}


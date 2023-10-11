"use strict"


// JWT
// npm i jsonwebtoken

const Personnel = require ('../models/personnel.model')
module.exports = {

    login: async (req, res) => {

        const {uername, password} = req.body

        if (username & password)

        const user = await Personnel,findOne({username, password})

    },
    refresh: async (req, res) => {

    },
    logout: async (req, res) => {

    },
}
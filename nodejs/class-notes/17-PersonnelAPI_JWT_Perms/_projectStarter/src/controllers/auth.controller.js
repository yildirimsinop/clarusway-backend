"use strict"


// JWT
// npm i jsonwebtoken

const Personnel = require ('../models/personnel.model')
module.exports = {

    login: async (req, res) => {

        const {uername, password} = req.body

        if (username & password) {

        const user = await Personnel.findOne({username, password})

        if (user) {
            if (user.isActive) {
                // login ok 
            } else {res.errorStatusCode = 401
                throw new Error('Wrong username or password.')

            }
        }else {
            res.errorStatusCode = 401
                throw new Error('Please entry username and password.')
        }
        }
    },
    refresh: async (req, res) => {

    },
    logout: async (req, res) => {

    },
}
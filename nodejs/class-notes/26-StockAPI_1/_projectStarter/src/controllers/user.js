"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

// User Controller:

const User = require ('../models/user')

module.exports = {
    list: async (req, res) => {

        const data = await res.getModelList(User)
        res.status(200).send(data)
    },
     create: async (req, res) => {

    },
     read: async (req, res) => {

    },
     update: async (req, res) => {

    },
     delete: async (req, res) => {

    },
}
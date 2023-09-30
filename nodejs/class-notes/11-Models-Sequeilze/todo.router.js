"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require('express').Router()

const Todo = require('./todo.model')

// LIST:
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll()
    res.send({
        error: false,
        result: data
    })
})

// CREATE:
router.post('/', async (req, res) => {

    const data = await Todo.create(req.body)
    res.send({
        error: false,
        body: req.body, // Send Data
        message: 'Created',
        result: data // Receive Data
    })
})

module.exports = router
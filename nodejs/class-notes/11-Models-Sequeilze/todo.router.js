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

    // const data = await Todo.create({
    //     title: 'Test Title',
    //     description: 'Test Description',
    // })
    // console.log( typeof req.body, req.body )
    const data = await Todo.create(req.body)
    res.send({
        error: false,
        body: req.body, // Send Data
        message: 'Created',
        result: data // Receive Data
    })
})

// READ:
router.get('/:id', async (req, res) => {

    // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
    // const data = await Todo.findOne({ where: { id: req.params.id } })
    
    const data = await Todo.findByPk(req.params.id)
    res.send({
        error: false,
        result: data
    })

})

// UPDATE:
router.put('/:id', async (req, res) => {

    // Model.update({ newData }, { filter })
    // const data = await Todo.update(req.body, )

})

module.exports = router
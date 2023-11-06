"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require('express').Router()

// Call TODO Controller:
const todoTemplate = require('../controllers/todoTemplate')

router.route('/')
    .get(todoTemplate.list) // LIST
    .post(todoTemplate.create) // CREATE

router.route('/:id')
    .get(todoTemplate.read) // READ
    .put(todoTemplate.update) // UPDATE
    .delete(todoTemplate.delete) // DELETE

module.exports = router
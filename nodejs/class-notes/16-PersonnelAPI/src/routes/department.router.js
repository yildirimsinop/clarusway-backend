"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */



const department = require('../controllers/department.controller')

// URL: /departments

router.route('/')
    .get(department.list)
    .post(department.create)


/* ------------------------------------------------------- */
module.exports = router
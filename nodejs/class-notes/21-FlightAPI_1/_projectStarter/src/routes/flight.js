"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/flight:

const permissions = require('../middlewares/permissions')
const flight = require('../controllers/flight')

// URL: /flights

router.use()

router.route('/')
    .get(permissions.isStaff, flight.list)
    .post(permissions.isStaff, flight.create)

router.route('/:id')
    .get(permissions.isStaff,flight.read)
    .put(permissions.isStaff,flight.update)
    .patch(permissions.isStaff,flight.update)
    .delete(permissions.is,flight.delete)

/* ------------------------------------------------------- */
module.exports = router
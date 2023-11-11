"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/topping:

const permissions = require('../../middlewares/permissions')
const topping = require('../../controllers/view/topping')

// URL: /toppings

router.all('/', permissions.isAdmin, topping.list)
router.all('/create', permissions.isAdmin, topping.create)
router.all('/:id', permissions.isAdmin, topping.read)
router.all('/:id/update', permissions.isAdmin, topping.update)
router.all('/:id/delete', permissions.isAdmin, topping.delete)

/* ------------------------------------------------------- */
module.exports = router
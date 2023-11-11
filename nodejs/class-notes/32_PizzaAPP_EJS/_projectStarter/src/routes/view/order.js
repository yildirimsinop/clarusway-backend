"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/order:

const permissions = require('../../middlewares/permissions')
const order = require('../../controllers/view/order')

// URL: /orders

router.all('/', permissions.isLogin, order.list)
router.all('/create', permissions.isLogin, order.create)
router.all('/:id', permissions.isLogin, order.read)
router.all('/:id/update', permissions.isLogin, order.update)
router.all('/:id/delete', permissions.isAdmin, order.delete)

/* ------------------------------------------------------- */
module.exports = router
"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../../middlewares/permissions')
const user = require('../../controllers/view/user')

// URL: /users

router.all('/', permissions.isAdmin, user.list)
router.all('/create', user.create)
router.all('/:id', permissions.isLogin, user.read)
router.all('/:id/update', permissions.isLogin, user.update)
router.all('/:id/delete', permissions.isAdmin, user.delete)

/* ------------------------------------------------------- */
module.exports = router
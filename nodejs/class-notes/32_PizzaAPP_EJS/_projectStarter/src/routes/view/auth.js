"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/auth:

const auth = require('../../controllers/view/auth')

// URL: /auth

router.all('/login', auth.login)
router.all('/logout', auth.logout)

/* ------------------------------------------------------- */
module.exports = router
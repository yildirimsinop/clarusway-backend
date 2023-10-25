"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// app.use(authentication):

const User = require('../models/user')
const Token = require('../models/token')

module.exports = async (req, res, next) => {

    const auth = req.headers?.authorization || null
    const tokenKey = auth ? auth.split(' ')[1] : null

    if (tokenKey) {
        const tokenData = await Token.findOne({ token: tokenKey })
        if (tokenData) req.user = await User.findOne({ _id: tokenData.userId })
    }   

    next()
}
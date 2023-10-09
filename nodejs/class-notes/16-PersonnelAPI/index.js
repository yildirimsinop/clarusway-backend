"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */

// envVaribles to process.env

require('dotenv').config()
const PORT = process.env?.PORT || 8000


require('express-async-errors')




// continue from here...

//Connect to DB:

const {dbConnection} = require ('./src/configs/dbConnection')
dbConnection()

// Middlewares 



// Accept JSON:
app.use(express.json())



// SessionsCookies:
app.use(require('cookie-session')({ secret: process.env.SECRET_KEY }))




// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))



// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PERSONNEL API',
    })
})


/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
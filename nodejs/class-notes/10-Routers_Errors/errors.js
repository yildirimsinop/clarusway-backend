"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 * npm i express-async-handler
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

app.get('/user/:id', (req, res) => {

    try {
        const id = req.params.id ?? 0
        if (isNaN(id)) {
            throw new Error('ID is Not A Number', { cause: 'params.id='+id })
        } else {
            res.send({ id: id })
        }
    } catch (err) {
        res.send({ error: true, message: err.message })
    }

})


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
"use strict";
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 */

/* ExpressJS Start */
const express = require("express"); // Assing expressFramework to express variable.
const app = express(); // run application on express.

/* ENV */
require("dotenv").config();
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Running on ${HOST} : ${PORT}`));

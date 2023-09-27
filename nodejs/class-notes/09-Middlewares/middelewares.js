"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions has must be minimum three parameters.
//? Last parameter for next().

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

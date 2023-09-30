"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

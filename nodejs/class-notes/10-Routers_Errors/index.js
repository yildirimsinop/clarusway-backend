"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? "Router" is special app for URL control in ExpressJS.

app.get("/", (req, res) => {
  res.send({ mesasage: "Home Page" });
});
app.get("/", (req, res) => {
  res.send({ mesasage: "About Page" });
});
app.get("/", (req, res) => {
  res.send({ mesasage: "User Page" });
});

const router = express.Router();

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

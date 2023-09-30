"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// Accept json data:
app.use(express.json());

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});
/* ------------------------------------------------------- */

//* SEQUELIZE

const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite:./db.sqlite3");
const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);

const Todo = sequelize.define("todo", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false, // default: true
  //   unique: true,
  //   field: "custom_column_name",
  //   comment: "Description",
  //   primaryKey: true,
  //   autoIncrement: true,
  // },

  title: {
    type: DataTypes.STRING(64), // varchar(64)
    allowNull: false,
  },

  description: DataTypes.TEXT, //ShortHand Using
  priority: {
    // 1: High, 0: Normal, -1: low
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

sequelize.sync({ alter: true });

sequelize
  .authenticate()
  .then(() => console.log("*DB Connected *"))
  .catch((err) => console.log("* DB Not Connected"));

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler runned.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

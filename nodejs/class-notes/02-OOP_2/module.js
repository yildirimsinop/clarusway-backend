"use strict";

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- *
//? Başka bir JS dosyasını içe aktarma:

require('./module/index.js')
require('./module/index')
require('./module/')

/* ------------------------------------------------------- *

// Import:
const test = require('./module/')
test()

/* ------------------------------------------------------- */

// Shorthand for singleFunction:
// require('./module/')()

/* ------------------------------------------------------- */

// const [ test1, test2, test3 ] = require('./module/')
// test1(), test2(), test3()

// const { test1, test2, test3 } = require('./module/')
// test1(), test2(), test3()

const { test1: newFunc, test2, test3, variable } = require("./module/");
newFunc(), test2(), test3(), console.log(variable);

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

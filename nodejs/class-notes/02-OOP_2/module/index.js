"use strict";

/* -------------------------------------------------------
    MODULES
------------------------------------------------------- *

// console.log('index.js çalıştı.')

const test = function() {
    console.log('index.js çalıştı.')
}

// EXPORT:
module.exports = test

/* ------------------------------------------------------- *

// EXPORT:
module.exports = function () {
    console.log('index.js çalıştı.')
}

/* ------------------------------------------------------- *

const test1 = function() {
    console.log('test1 çalıştı.')
}

const test2 = function() {
    console.log('test2 çalıştı.')
}

const test3 = function() {
    console.log('test3 çalıştı.')
}

// module.exports = [
//     test1,
//     test2,
//     test3
// ]

// module.exports = {
//     test1: test1,
//     test2: test2,
//     test3: test3,
// }

module.exports = {
    test1,
    test2,
    test3,
}

/* ------------------------------------------------------- *

module.exports.test1 = function() {
    console.log('test1 çalıştı.')
}

module.exports.test2 = function() {
    console.log('test2 çalıştı.')
}

module.exports.test3 = function() {
    console.log('test3 çalıştı.')
}

module.exports.variable = 'new-value'

/* ------------------------------------------------------- */

module.exports = {
  test1: function () {
    console.log("test1 çalıştı.");
  },
  test2: function () {
    console.log("test2 çalıştı.");
  },
  test3: function () {
    console.log("test3 çalıştı.");
  },
  variable: "new-value",
};

/* ------------------------------------------------------- */

"use strict";

/* --------------------------------------------

        NODEJS

-------------------------------------------- */
const http = require("node:http"); // builtin: https://nodejs.org/api/http.html
/* -------------------------------------------- *

// http.createServer((req, res) => { ... }
const app = http.createServer((request, response) => {

    response.end('<h1> Welcome to NodeJS Server </h1>')

})

// http://127.0.0.1:8000 
// http://localhost:8000 
app.listen(8000, () => console.log('Server Runned: http://127.0.0.1:8000'))

/* -------------------------------------------- *

const app = http.createServer((req, res) => {

    // console.log( req )
    // console.log( res )
    console.log( req.url )
    if (req.url == '/') {

        res.end('<h1>Main Page')

    } else if (req.url == '/second') {

        res.end('<h1>Second Page')

    } else {

        res.end('<h1>Server is running')
    }

}).listen(8000, () => console.log('Server Runned: http://127.0.0.1:8000'))

/* -------------------------------------------- *

http.createServer((req, res) => {

    if (req.url == '/') {

        res.statusCode = 404 // Default: 200
        res.statusMessage = 'Not Found' // Default: OK

        res.setHeader('Content-Type', 'text/html')
        res.setHeader('another-header', 'another-value')

        res.write('* Satır1')
        res.write('* Satır2')
        res.write('* Satır3')
        res.end()
        
    } else if ( req.url == '/api' ) {

        if (req.method == 'GET') {

            // res.writeHead(200, {
            //     'Content-Type': 'application/json',
            //     'another-header': 'another-value',
            // })

            // OVERLOAD GOOD EXAMPLE:
            res.writeHead(200, "Status Message", {
                'Content-Type': 'application/json',
                'another-header': 'another-value',
            })

            const obj = {
                result: true,
                message: 'İşlem Başarılı.'
            }

            res.end( JSON.stringify(obj) )

        } else {

            res.end('Not supporting different method.')

        }

    } else {
        res.end('Server is running')
    }

}).listen(8000, () => console.log('http://127.0.0.1:8000'))

/* -------------------------------------------- *
// ENV

// $ ENV_NAME=ENV_VALUE node index.js
// console.log( process.env.ENV_NAME )

// get ENV_VARS from .env file:
require("dotenv").config(); // $ npm i dotenv // https://www.npmjs.com/package/dotenv
// console.log(process.env); 
console.log("NODE_ENV:", process.env.NODE_ENV); 
console.log("ENV_HOST:", process.env.ENV_HOST + ':' + process.env.ENV_PORT); 
console.log("ENV_EXAMPLE_STR:", process.env.ENV_EXAMPLE_STR); 
console.log("ENV_EXAMPLE_TXT:", process.env.ENV_EXAMPLE_TXT.split(' ')); 

/* -------------------------------------------- */

// get ENV_VARS from .env file:
require("dotenv").config(); // $ npm i dotenv // https://www.npmjs.com/package/dotenv
// console.log( process.env.PORT )

const PORT = process.env.ENV_PORT ?? 8000;

http
  .createServer((request, response) => {
    response.end("<h1> Welcome to NodeJS Server </h1>");
  })
  .listen(PORT, () => console.log(`Server Runned: http://127.0.0.1:${PORT}`));

/* -------------------------------------------- */

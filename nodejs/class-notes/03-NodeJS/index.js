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

/* -------------------------------------------- */

// const app = http
//   .createServer((req, res) => {
//     // console.log( req )
//     // console.log( res )
//     if (req.url == "/") {
//       res.end("<h1>Main Page");
//     } else if (req.url == "/second") {
//       res.end("<h1>Second Page");
//     } else {
//       res.end("<h1>Server is running");
//     }
//   })
//   .listen(8000, () => console.log("Server Runned: http://127.0.0.1:8000"));

// /* -------------------------------------------- */

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.statusCode = 404;
      res.statusMessage = "Not Found";
      res.write("<p>Satir1</p>");
      res.write("<p>Satir2</p>");
      res.write("<p>Satir3</p>");
      res.write("<p>Satir4</p>");

      res.end();
    } else {
      res.end("Server is runnning");
    }
  })
  .listen(8000, () => console.log("http://127.0.0.1:8000"));

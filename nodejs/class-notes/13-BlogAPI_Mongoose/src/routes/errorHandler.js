"use strict"

// Catch Errors:

module.exports = (err, req, res, next) => {

    const errorStatusCode = res.errorStatusCode ?? 500

    res.status(errorStatusCode).send({
        error: true,
        message: err.jessage,
        cause: err.cause,
        body: req.body
    })
}
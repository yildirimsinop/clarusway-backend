"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// npm i swagger-autogen
// https://swagger-autogen.github.io/docs/

require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

const document = {
	info: {
		version: "1.0.0",
		title: "Personnel API",
		description: "Personnel Management API Service",
		termsOfService: "http://www.clarusway.com",
		contact: { name: "Clarusway", email: "qadir@clarusway.com" },
		license: { name: "BSD License", },
	},
	host: `${HOST}:${PORT}`,
	basePath: '/',
	schemes: ['http', 'https'],
};
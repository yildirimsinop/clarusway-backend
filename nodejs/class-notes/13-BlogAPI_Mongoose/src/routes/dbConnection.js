"user strict"

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/')
.then(() => console.log('* DB Connected'))
.catch ((err)=> console.log(' * DB Not Connected * ', err))
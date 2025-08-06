const mysql = require('mysql2')
require('dotenv').config()

const dbPoll = mysql.createConnection({
    port : process.env.DB_PORT,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : '',
    database : process.env.DB_NAME
})

module.exports =  dbPoll.promise()
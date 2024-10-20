const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host:'localhost',
    user:'azim',
    password: '9291',
    database:'student'
})

module.exports = pool
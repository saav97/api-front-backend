const mysql = require('mysql2');
const config = require('./../config');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'',
    database:'tienda'
})

module.exports = pool.promise()
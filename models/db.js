const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'userdb',
    password: '123456',
    database: 'sakila',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();

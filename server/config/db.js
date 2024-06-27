const mysql2 = require('mysql2/promise');

const mySqlPool = mysql2.createPool({
    host: 'localhost',
    password: 'root',
    user: 'root',
    database: 'news_db'
});

module.exports = mySqlPool;
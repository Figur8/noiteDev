var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'test',
    database: 'cursosDB'
});

const mysql = require('mysql')

module.exports = () => {
    const connection =  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'f8cad56fa9',
        database: 'product'
    });

    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to Database',err);
            return;
        }
        console.log('Connection established');
    });

    return connection;
}
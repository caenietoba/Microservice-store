const mysql = require('mysql')

module.exports = () => {
    const connection =  mysql.createConnection({    
        user: 'root',
        password: 'f8cad56fa9',
        database: 'product',
        host: '0.0.0.0',
        //socketPath: '/var/run/mysqld/mysqld.sock'
    });

    connection.connect((err) => {
        console.log(connection)
        if (err) {
            console.log('Error connecting to Database',err);
            return;
        }
        console.log('Connection established');
    });

    return connection;
}
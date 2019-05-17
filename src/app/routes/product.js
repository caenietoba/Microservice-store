const dbConnection = require('../../config/dbConnection');

module.exports = (app) => {

    const connection = dbConnection();

    app.get('/product', (req, res) => {
        connection.query('SELECT * FROM product', (err, result) => {
            res.send(result);
        });
    });

    app.get('/product/:id', (req, res) => {
        const {id} = req.params;
        connection.query('SELECT * FROM product WHERE id = ?', id, (err, result) => {
            res.send(result);
        });
    });

    app.get('/product/name/:name', (req, res) => {
        const {name} = req.params;
        connection.query('SELECT * FROM product WHERE name = ?', name, (err, result) => {
            res.send(result);
        });
    });

    app.post('/product', (req, res) => {
        const { name, quantity, storeId, cost, description } = req.body;
        connection.query('INSERT INTO product SET?', {
            name, 
            quantity, 
            storeId, 
            cost, 
            description
        }, (err, result) => {
            console.log(result);
            res.send(result);
        });
    });

    app.put('/product/:id', (req, res) => {
        const {id} = req.params;
        const data = req.body;

        const sql = 'UPDATE product SET ? WHERE id = ?'
        connection.query(sql, [data, id], (err, result) => {
            res.send(result);
        });
    });

    app.delete('/product/:id', (req, res) => {
        const {id} = req.params;
        const sql = 'DELETE FROM product WHERE id = ?'
        connection.query(sql, id, (err, result) => {
            res.send(result);
        });
    });
}
const mysql = require('mysql2');
const config = require('../../config');

const pool = mysql.createPool(config.db);

module.exports = {
    getAll: function(callback) {
        pool.query('SELECT * FROM customers', callback);
    },
    getById: function(id, callback) {
        pool.query('SELECT * FROM customers WHERE id = ?', [id], callback);
    },
    create: function(data, callback) {
        pool.query('INSERT INTO customers SET ?', data, callback);
    },
    update: function(id, data, callback) {
        pool.query('UPDATE customers SET ? WHERE id = ?', [data, id], callback);
    },
    delete: function(id, callback) {
        pool.query('DELETE FROM customers WHERE id = ?', [id], callback);
    }
};

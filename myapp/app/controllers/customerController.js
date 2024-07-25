const Customer = require('../models/customer');

exports.index = (req, res) => {
    Customer.getAll((err, customers) => {
        if (err) {
            return res.render('customers/error', { error: err });
        }
        res.render('customers/index', { customers });
    });
};

exports.new = (req, res) => {
    res.render('customers/new');
};

exports.create = (req, res) => {
    const data = req.body;
    Customer.create(data, (err) => {
        if (err) {
            return res.render('customers/error', { error: err });
        }
        res.redirect('/customers');
    });
};

exports.edit = (req, res) => {
    const id = req.params.id;
    Customer.getById(id, (err, results) => {
        if (err) {
            return res.render('customers/error', { error: err });
        }
        res.render('customers/edit', { customer: results[0] });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Customer.update(id, data, (err) => {
        if (err) {
            return res.render('customers/error', { error: err });
        }
        res.redirect('/customers');
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Customer.delete(id, (err) => {
        if (err) {
            return res.render('customers/error', { error: err });
        }
        res.redirect('/customers');
    });
};

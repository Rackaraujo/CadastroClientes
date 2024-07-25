const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/customerController');

router.get('/', customerController.index);
router.get('/new', customerController.new);
router.post('/', customerController.create);
router.get('/:id/edit', customerController.edit);
router.post('/:id', customerController.update);
router.post('/:id/delete', customerController.delete);

module.exports = router;


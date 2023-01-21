const express = require('express');
const homeControllers = require('../controllers/homeControllers');

const router = express.Router();

router.get('/:nombreProducto?', homeControllers.home)

module.exports = router;
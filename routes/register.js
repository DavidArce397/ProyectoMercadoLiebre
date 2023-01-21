const express = require('express');
const registerControllers = require('../controllers/registerControllers');

const router = express.Router();

router.get('/:numeroCualquiera?', registerControllers.register)

module.exports = router;
const express = require('express');
const loginControllers = require('../controllers/loginControllers');

const router = express.Router();

router.get('/:numeroCualquiera?', loginControllers.login)

module.exports = router;
const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validate');

const router = express.Router();

router.post('/', validateUser, userController.addUser);

module.exports = router;
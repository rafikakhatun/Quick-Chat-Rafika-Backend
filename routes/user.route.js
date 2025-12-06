const express = require('express');
const { createUser } = require('../controllers/user.controllers');
const router = express.Router();

router.post('/create', createUser); // POST API ROUTE


module.exports = router;

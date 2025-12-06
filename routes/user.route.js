const express = require('express');
const { createUser } = require('../controllers/user.controllers');
const router = express.Router();

router.post('/create', createUser); // POST API ROUTE
// http://localhost:5001/api/users/create




module.exports = router;

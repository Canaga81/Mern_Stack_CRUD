const express = require('express');
const router = express.Router();
const {getAllCategories} = require('../controllers/category');

router.get('/all', getAllCategories);

module.exports = router;
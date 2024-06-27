const express = require('express');
const router = express.Router();
const {createNews, getAllNews, getNewsByCategoryID} = require('../controllers/news');

router.post('/add', createNews);
router.get('/all', getAllNews);
router.get('/category/:id', getNewsByCategoryID);

module.exports = router;
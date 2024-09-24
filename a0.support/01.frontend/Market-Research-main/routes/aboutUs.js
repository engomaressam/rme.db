const path = require('path');

const express = require('express');

const pagesController = require('../controller/pages');

const router = express.Router();

router.get('/about-us', pagesController.aboutUs); 

module.exports = router;
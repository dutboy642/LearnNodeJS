var express = require('express');
var router = express.Router();
const newsController = require('../app/controller/newsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;

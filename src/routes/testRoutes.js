const app = require('express');
const router = app.Router();

const testController = require('../app/controller/testController');

router.use('/', testController.index);

module.exports = router;

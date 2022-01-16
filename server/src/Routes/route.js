const express = require('express');
const router = express.Router();
const controller = require('../Controller/PostController');

router.post('/create', controller.setpost);
router.get('/', controller.getall);
router.get('/:id', controller.getpost);

module.exports = router;
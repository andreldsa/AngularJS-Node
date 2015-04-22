'use strict';

var express = require('express');
var controller = require('./post.controller');
var auth = require('../../auth/auth.service')

var router = express.Router();

router.get('/',auth.isPermited(), controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isPermited(), auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlBlog = require('../controllers/blog');
const ctrlLogin = require('../controllers/login');
const ctrlAdmin = require('../controllers/admin');

router.get('/', ctrlHome.index);
router.post('/mail', ctrlHome.sendEmail);

router.get('/blog', ctrlBlog.blog);

router.get('/login', ctrlLogin.login);
router.post('/login', ctrlLogin.auth);

router.get('/admin', ctrlAdmin.admin);

module.exports = router;
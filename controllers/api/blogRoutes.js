const router = require('express').Router();
const { blog, User, comment } = require('../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//get all blogs
router.get('/', async (req, res) => {
  res.render('blog',{ blogs: blogs });// name of handlebar view
});

//get one blog
router.get('/:num', async (req, res) => {
  return res.render('blog', blogs[req.params.num - 1]);
});

module.exports = router;

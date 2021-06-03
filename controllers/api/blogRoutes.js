const router = require('express').Router();
const { blog, User, comment } = require('../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//get all blogs
router.get('/', async (req, res) => {
  blog.findAll({
    attributes: [
      'id',
      'bloger_name',
      'blog_header',
      'description',
      'cerated_at'
    ],
    order: [
      ['created_at',
        'DESC']
    ],
    include: [
      {
        model: User,
        attributes: ['name']
      },
      {
        model: Comment,
        attributes: [
          'id',
          'comment_text',
          'blog_id',
          'user_id',
          'created_at'],
        include: {
          model: User,
          attributes: ['name']
        }
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
// res.render('blog',{ blogs: blogs });// name of handlebar view
});

//get one blog
router.get('/:num', async (req, res) => {
  return res.render('blog', blogs[req.params.num - 1]);
});

module.exports = router;

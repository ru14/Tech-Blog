const router = require('express').Router();
const { blog, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//get all blogs
router.get('/', async (req, res) => {
  blog.findAll({
    attributes: [
      'id',
      
      'blog_header',
      'description',
      'created_at'
    ],
    order: [
      ['created_at',
        'DESC']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
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
          attributes: ['username']
        }
      }
    ]
  })
    .then(dbblogData => res.json(dbblogData.reverse()))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // res.render('blog',{ blogs: blogs });// username of handlebar view
});
router.get('/:id', async (req, res) => {
  blog.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      
      'blog_header',
      'description',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: [
          'id',
          'comment_text',
          'blog_id',
          'user_id',
          'created_at'
        ],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
    .then(dbblogData => res.json(dbblogData.reverse()))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // res.render('blog',{ blogs: blogs });// username of handlebar view
});

router.put('/:id', withAuth, (req, res) => {
  Post.update({
    blog_header: req.body.blog_header,
    description: req.body.description,
  }, {
    where: {
      id: req.params.id
    }
  }).then(dbblogData => {
    if (!dbblogData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbblogData);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.post('/:id', withAuth, (req, res) => {
  Post.create({
   
    blog_header: req.body.title,
    description: req.body.content,
    user_id: req.session.user_id
  }).then(dbblogData => {
    if (!dbblogData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbblogData);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbblogData => {
    if (!dbblogData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbblogData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const router = require('express').Router();

//all of post user is not logged in
router.get('/', async (req, res) => {
  Blog.findAll({

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
          'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
    .then(dbblogData => {
      const blogs = dbblogData.map(Blog => Blog.get({ plain: true }));
      res.render('homepage', { blogs, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get login 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
// get signup
router.get('/signup', (req, res) => {
  res.render('signup');
});

//get single post
router.get('/blog/:id', async (req, res) => {
  Blog.findOne({
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
  .then(dbblogData => {
    if (!dbblogData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
    }
    const post = dbblogData.get({ plain: true });
    //console.log(post);
    res.render('single-blog', { post, loggedIn: req.session.loggedIn });


})
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// router.get("/", (req, res)=> {
//     res.send("hello")
// })


router.get('/', async (req, res) => {

  res.render('homepage');
});
module.exports = router;
const router = require('express').Router();
const sequelize = require('../config/connection');
const { blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const { route } = require('./api/blogRoutes');


//all of post with user logged in
router.get('/', async (req, res) => {
    blog.findAll({
        where: {
            user_id: req.session.user_id
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
        .then(dbblogData => {
            const blogs = dbblogData.map(blog => blog.get({ plain: true }));
            res.render('dashbord', { blogs, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    // res.render('blog',{ blogs: blogs });// name of handlebar view
});

//edit blog route
// new blog route
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'blog_header',
            'description',
            'created_at'
        ],
        include: [{
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
        .then(dbblogData => {
            if (!dbblogData) {
                res.status(404).json({ message: 'No blog found with this id' });
                return;
            }

            const blog = dbblogData.get({ plain: true });
            res.render('edit-blog', { blog, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/new', (req, res) => {
    res.render('new-blog');
});

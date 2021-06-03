const sequelize = require('../config/connection');
const { blog, User, comment } = require('../models');
const router = require('express').Router();
//all of post
//get single post
// get login 


// router.get("/", (req, res)=> {
//     res.send("hello")
// })
router.get('/', async (req, res) => {
    
    res.render('homepage');
  });
module.exports = router;
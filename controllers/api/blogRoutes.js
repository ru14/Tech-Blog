const router = require('express').Router();


//get all blogs
router.get('/', async (req, res) => {
  res.render('post',{ postblogs: postblogs });// name of handlebar view
});

//get one blog
router.get('/:num', async (req, res) => {
  return res.render('post', postblogs[req.params.num - 1]);
});

module.exports = router;

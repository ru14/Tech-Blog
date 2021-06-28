const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/blog', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);


module.exports = router;

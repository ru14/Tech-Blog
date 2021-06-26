const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/Blog', blogRoutes);
router.use('/Comment', commentRoutes);
router.use('/Users', userRoutes);


module.exports = router;

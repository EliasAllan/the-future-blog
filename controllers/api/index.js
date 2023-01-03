const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
// const blogRoutes = require("../homeRoutes")

router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);
// router.use('/blogs', blogRoutes);

module.exports = router;

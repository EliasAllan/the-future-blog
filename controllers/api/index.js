const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
// const blogRoutes = require("../homeRoutes")

router.use('/users', userRoutes);
router.use('/projects', postRoutes);
// router.use('/blogs', blogRoutes);

module.exports = router;

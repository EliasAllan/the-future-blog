const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const seedDatabase = require('../../seeds/seed');

router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);
// router.use('/blogs', blogRoutes);

router.post('/seedDatabase', (req, res) => {
    seedDatabase(function(){
      res.json({
        message: "completed seed"
      })
    });
  });


module.exports = router;

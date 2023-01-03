const router = require('express').Router();
const { Module , DataTypes } = require("sequelize");
const path = require('path');
const  {Comment}  = require("../../models")


// Post newcomment
router.post("/", (req, res) => {
  console.log("Pinged create a new comment")
  try {  
  console.log(req.session);
  console.log(req.body);
    const newComment = Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment); 

  } catch (err) {
    res.status(400).json(err);
  }
  });
// router.post("/", (req, res) => {
// console.log("Pinged create a new post")  
// console.log(req.body);
//   Post.create({
//     ...req.body,
//     user_id: req.session.user_id
//   })
//     .then((newBlogpost) => {
//       res.json(newBlogpost);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// // Get posts
// router.get('/api/posts', async (req, res) => {
//     // console.log(req)
//     // console.log(res)
//     // res.render('homepage');

//     try {
//       const userData = await Post.findAll();
//       console.log(userData)
//       res.status(200).json(userData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  module.exports = router;
const router = require('express').Router();
const { Module , DataTypes } = require("sequelize");
const path = require('path');
const  {Post}  = require("../../models/")


// Post newpost
router.post("/", (req, res) => {
console.log("Pinged create a new post")  
console.log(req.body);
  Post.create(req.body)
    .then((newBlogpost) => {
      res.json(newBlogpost);
    })
    .catch((err) => {
      res.json(err);
    });
});

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
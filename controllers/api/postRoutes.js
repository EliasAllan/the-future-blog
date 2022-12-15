const { Module , DataTypes } = require("sequelize");
const router = require('express').Router();
const path = require('path');
const  Post  = require("../../models/Post")


const posts = [
  {
    title: 'post title',
    description: 'post description',
  }
];

// Get posts
router.get('/api/posts', async (req, res) => {
    // console.log(req)
    // console.log(res)
    // res.render('homepage');

    try {
      const userData = await Post.findAll();
      console.log(userData)
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
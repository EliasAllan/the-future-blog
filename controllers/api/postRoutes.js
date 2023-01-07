const router = require('express').Router();
const { Module , DataTypes } = require("sequelize");
const path = require('path');
const  {Post}  = require("../../models/")
const withAuth = require("../../utils/auth");

// Post newpost
router.post("/", (req, res) => {
  console.log("Pinged create a new post")
  try {  
  console.log(req.session);
  console.log(req.body);
    const name = req.session.name
    const newPost = Post.create({
      ...req.body,
      user_id: req.session.user_id,
      name: name,
    });

    res.status(200).json(newPost); 

  } catch (err) {
    res.status(400).json(err);
  }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    console.log(req.params);
  console.log(req.session);
    try {
      // const commentData = await Comment.destroy({
      //   where: {
      //     post_id: req.params.id
      //   },
      // });
      // console.log(commentData)
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
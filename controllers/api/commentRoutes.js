const router = require('express').Router();
const { Module , DataTypes } = require("sequelize");
const path = require('path');
const  {Comment}  = require("../../models")
// const withAuth = require('../../utils/auth');


// Post newcomment
router.post("/", async (req, res) => {
  console.log("Pinged create a new comment")
  try {  
  console.log(req.session);
  // console.log(req.body);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });
    console.log(newComment)
    res.status(200).json(newComment); 

  } catch (err) {
    res.status(400).json(err);
  }
  });


  module.exports = router;
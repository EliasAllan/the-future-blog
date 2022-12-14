
const router = require('express').Router();
const path = require('path');
const { Blogpost } = require("../models")
// Get homepage 
router.get('/', async (req, res) => {
    res.render('homepage');
  });

// Get login page
router.get('/login', async (req, res) => {
  res.render('login');
});

// Get Signup page
router.get('/signup', async (req, res) => {
  res.render('signup');
});

// Get Dashboard
router.get('/dashboard', async (req,res) => {
  res.render("dashboard")
})

// Get newpost
router.get('/newpost', async (req,res) => {
  res.render("newpost")
})

// Post newpost
router.post('/', (req, res) => {
  // create a new category

  Blogpost.create({
    id: req.body.id,
    title: req.body.title,
    content: req.body.content
 })

  .then((newBlogpost) => {
    res.json(newBlogpost);
  })
  .catch((err) => {
    res.json(err);
  })
});

module.exports = router;
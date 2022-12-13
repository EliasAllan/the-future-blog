const router = require('express').Router();
const path = require('path');

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

// Get Create post
router.get('/newpost', async (req,res) => {
  res.render("newpost")
})

module.exports = router;
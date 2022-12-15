const router = require("express").Router();
const Blogpost = require("../models/post.js");
// const withAuth = require('../utils/auth');

const posts = [
  {
    title: "post title",
    description: "post description",
  },
];

// Get homepage
router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogPostData = await Blogpost.findAll({
      include: [
        {
          model: Blogpost,
          attributes: ["title"],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogPosts = blogPostData.map((blogPostData) => blogPostData.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      blogPosts
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get login page
router.get("/login", async (req, res) => {
  res.render("login");
});

// Get Signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Get Dashboard
router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

// Get newpost
router.get("/newpost", async (req, res) => {
  res.render("newpost");
});

// Post newpost
router.post("/", (req, res) => {
  // create a new post
  console.log(req.body);
  Blogpost.create({
    id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  })

    .then((newBlogpost) => {
      res.json(newBlogpost);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

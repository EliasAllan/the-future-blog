const router = require("express").Router();
const { Post , User, Comment} = require("../models");
const withAuth = require("../utils/auth");
// const withAuth = require('../utils/auth');

// Get homepage
router.get("/", async (req, res) => {
  try {
  //   // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    // console.log(postData)

    // Serialize data so the template can read it
    const blogPosts = postData.map((post) => post.get({ plain: true })).reverse();
    console.log(blogPosts)
    // Pass serialized data and session flag into template
    res.render("homepage", {
      logged_in: req.session.logged_in,
      blogPosts,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Get login page
router.get("/login", async (req, res) => {
  // if they're logged in, then redirect them to the dashboard
  res.render("login");
});

// Get Signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Get Dashboard
router.get("/dashboard", async (req, res) => {
  try {
    //   // Get all projects and JOIN with user data
    console.log(req.session)
      const postData = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
        include: [
          {
            model: User,
            attributes: ["name"],
          },
        ],
      });
      // console.log(postData)
  
      // Serialize data so the template can read it
      const blogPosts = postData.map((post) => post.get({ plain: true })).reverse();
      console.log(blogPosts)
      // Pass serialized data and session flag into template
      res.render("dashboard", {
        logged_in: req.session.logged_in,
        blogPosts,
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});

// Get newpost
router.get("/newpost", async (req, res) => {
  res.render("newpost");
});

router.get("/posts/:singlePost", withAuth, async(req,res) => {
  console.log("Pinging single post")
 
  try{
  const postData = await Post.findByPk(req.params.singlePost,{
    include: [
      {
        model: User,
        attributes: ['name']
      },
      {
        model: Comment,
        include:[
          {
            model:User,
          }
        ]
      }
      
    ],
  })
  let post = postData.get({ plain: true });
  console.log(post)
    post.comments = post.comments.map(comment => {
      console.log(comment.user)
      comment.user = comment.user.name || "Anonymous"
      return comment
    }).reverse();
    
  console.log(post)

  console.log(JSON.stringify(post, null, 2));

 

      res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



module.exports = router;

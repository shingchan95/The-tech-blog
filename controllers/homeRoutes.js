const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      order: [['id','DESC']],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
            include: [
              {
                model: User,
                attributes: ['name'],
              },
              ]
        }
      ]  
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create_post', async (req, res) => {
  res.render('create_post')
});


router.get('/post/:id', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findByPk (req.params.id, ({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
            include: [
              {
                model: User,
                attributes: ['name'],
              },
              ]
        }
      ]  
    }));

    //const posts = postData.map((post) => post.get({ plain: true }));
    const posts = postData.get({ plain: true });

    res.render('post', { 
      posts,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

 // Use withAuth middleware to prevent access to route
 router.get('/profile', withAuth, async (req, res) => {
   try {
     // Find the logged in user based on the session ID
     const userData = await User.findByPk(req.session.user_id, {
       
       attributes: { exclude: ['password'] },
       include: [{ model: Post }] 
      });
      console.log(req.session)
      

     const user = userData.get({ plain: true });
     res.render('profile', {
       ...user,
       logged_in: req.session.logged_in,
     });
   } catch (err) {
     res.status(500).json(err);
   }
 });


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

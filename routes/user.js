const express = require('express');
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const User = require('../models/user.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

const userController = require('../controllers/users.js');


// Render signup page
router.get("/signup",userController.rendersignup );

//signup route
router.post("/signup",wrapAsync(userController.signup));

// render login page
router.get("/login",userController.renderlogin);

// login route
router.post("/login",saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
    userController.login
);

// logout route
router.get("/logout",userController.logout);    

module.exports = router;



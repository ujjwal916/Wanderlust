const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing'); // import the model
const Review = require('../models/review');
const{validateReview, isLoggedIn, isReviewAuthor} = require('../middleware.js')

const reviewController = require('../controllers/reviews.js');

// POst Reviews  route
router.post("/",
  isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// delete reviews
router.delete("/:reviewId",
  isReviewAuthor,wrapAsync(reviewController.deleteReview));


module.exports  = router;  
const Listing = require('../models/listing'); 
const Review = require('../models/review');

module.exports.createReview=async(req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id; // Set the author to the current user
  // console.log(newReview);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success", "Successfully created a review!");
  res.redirect(`/listings/${listing._id}`)
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    // 1. Delete the review
    await Review.findByIdAndDelete(reviewId);
    // 2. Pull reference from the listing , delete from database too. 
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    req.flash("success", "Successfully deleted the review!");
    res.redirect(`/listings/${id}`);
  }
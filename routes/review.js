const express = require("express");
const router = express.Router({mergeParams: true}); 
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isreviewAuthor} = require("../middleware.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const reviewController = require("../controllers/reviews.js");



//Post Route
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));


//DELETE REview ROute
router.delete(
   "/:reviewId",
   isLoggedIn,
   isreviewAuthor,
   wrapAsync(reviewController.destroyReview) );

module.exports = router;
const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing'); // import the model
const{isLoggedIn, isOwner, validateListing} = require('../middleware.js'); // Import the isLoggedIn middleware
const listingController = require('../controllers/listings.js'); 
const multer  = require('multer')
const { storage } = require('../cloudConfig.js'); // Import cloudinary configuration
const upload = multer({ storage })

// Index Route
console.log("Registering /listings route");
router.get("/",wrapAsync(listingController.index)); 

// New Route
router.get("/new",isLoggedIn, listingController.new);

// Show Route
router.get("/:id",wrapAsync(listingController.show)); ;

// Create Route
router.post("/", isLoggedIn, 
  upload.single('listing[image]'), // Use multer to handle file upload
  validateListing, 
  wrapAsync(listingController.create)); 



// Edit Route
router.get("/:id/edit",
  isLoggedIn, isOwner, wrapAsync(listingController.edit));

// Update Route
router.put("/:id",isLoggedIn,
 isOwner,
 upload.single('listing[image]'),
 validateListing, wrapAsync(listingController.update));

// Delete Route 
router.delete("/:id",
  isLoggedIn,isOwner, wrapAsync(listingController.delete));

module.exports  = router;   
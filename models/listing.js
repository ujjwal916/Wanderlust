const mongoose = require('mongoose');  // import mongoose
const Schema = mongoose.Schema; // create a schema constructor
const Review = require('./review.js');

// create a schema for the listing
const listingSchema  = new Schema({
    title:{
        type: String,
        required: true  
    }, 
    description: String, 
image: {

  url: String, 
  filename : String,
  // default: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  // set: function (v) {
  //   if (!v || v.trim() === "") {
  //     return "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D";
  //   }
  //   return v;
  // }
},
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
  },
    location: String, 
    country: String,
  reviews:[
    {
        type: Schema.Types.ObjectId, // reference to the Review model
        ref: 'Review' // name of the model to reference
    }
  ],
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', // reference to the User model
  }

});
//It then deletes all reviews if listing get deleted 
  listingSchema.post('findOneAndDelete', async  (listing) => {
  if (listing) {
    await Review.deleteMany({_id: { $in: listing.reviews }});
  }
});


const Listing = mongoose.model('Listing', listingSchema); // create a model
module.exports = Listing;      // export the model

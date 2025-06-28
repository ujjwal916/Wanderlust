const mongoose = require('mongoose');  // import mongoose
const Schema = mongoose.Schema; // create a schema constructor

const reviewSchema = new Schema({
    comment: String, 
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now,      
    }  , 
    author: {
        type: Schema.Types.ObjectId, // reference to the User model
        ref: 'User', // name of the User model
    },      

    
});

module.exports = mongoose.model('Review', reviewSchema); // create a model and export it

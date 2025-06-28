const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 
const passportLocalMongoose = require('passport-local-mongoose');

// create a schema for the user      
const userSchema = new Schema({
    email: {
        type: String, 
        required:true,
    }
});
// Add passport-local-mongoose plugin to the user schema
// This plugin adds username and password fields, and handles hashing and authentication
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
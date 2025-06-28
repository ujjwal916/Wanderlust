const mongoose = require('mongoose');
const initData = require('./data');
const Listing = require('../models/listing');

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";
main()
  .then( () => {
    console.log("Connected to MongoDB");        
   })
  .catch((err) => {
    console.log(err);
   })   

async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
    await Listing.deleteMany({}); // delete all listings
    initData.data = initData.data.map((obj)=>({
      ...obj, owner: "68551e6761bcf8fa3fc9360a" // set owner to a default user ID
    }));
    await Listing.insertMany(initData.data); // insert data
    console.log("Database initialized");    
}   
initDB();
if(process.env.NODE_ENV != "production") {
require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js'); 



const listingRouter  = require("./routes/listings.js");
const reviewRouter = require("./routes/reviews.js");
const usersRouter = require("./routes/user.js");

//connect to mongodb
 const dburl = process.env.ATLASDB_URL;
main()
  .then( () => {
    console.log("Connected to MongoDB");        
   })
  .catch((err) => {
    console.log(err);
   })

async function main(){
  await mongoose.connect(dburl);
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// Use MongoStore to store session data in MongoDB
const store = MongoStore.create({
  mongoUrl: dburl,
  crypto:{
    secret: process.env.SECRET, 
  }, 
  touchAfter: 24 * 60 * 60, // 24 hours
});
store.on("error", () =>{
  console.log("Session store error", err);
} );

// Session configuration 
const sessionOptions = { store, 
  secret : process.env.SECRET, 
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires : Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7, 
    httpOnly: true, // prevents client-side JavaScript from accessing the cookie
  }
};



app.use(session(sessionOptions));
app.use(flash());

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
// Use the authenticate method from passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate())); 
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/", (req, res) => {
//   res.send("hi, i am on root");
// });

// Middleware to set flash messages in res.locals
app.use((req, res, next )=> {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user; // current user
  next();
});


app.get('/', (req, res) => {
  res.send('Wanderlust Server is Live 🚀');
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", usersRouter);


// Error-handling middleware
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  // res.status(statusCode).send(message);
  res.render("error.ejs", { err });  
});

app.listen(8080, () => {
  console.log('Server is listening  on port 8080');
}); 

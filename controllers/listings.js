const Listing = require('../models/listing'); // import the model

module.exports.index =async (req, res ) => {
  const allListings = await Listing.find({});
  res.render("listings/index", {listings: allListings});
}

module.exports.new =(req, res) => {
 res.render("listings/new");
}

module.exports.show =async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
  .populate({path:"reviews", 
    populate: {path: "author"}}) // Populate the reviews and their authors
  .populate("owner");
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  // console.log(listing,listing.owner);
  res.render("listings/show.ejs", {listing});
}

module.exports.create=async (req, res) =>{
  let url = req.file.path;
  let filename = req.file.filename;
  console.log("File uploaded:", url, filename);

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id; // Set the owner to the current user

  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "Successfully created a new listing!");
  res.redirect("/listings");
}

 module.exports.edit=async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
    if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/edit", {listing});
}

module.exports.update=async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

  if(typeof req.file !== 'undefined') {
  let url = req.file.path;
  let filename = req.file.filename;
  listing.image = { url, filename };
  await listing.save();
  }

  req.flash("success", "Successfully updated!");
  res.redirect(`/listings/${id}`);
}

module.exports.delete=async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted listing!");
  res.redirect("/listings");
} 
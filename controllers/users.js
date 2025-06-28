const User = require('../models/user.js');


module.exports.rendersignup = (req, res) => {
    res.render("users/signup");
}

module.exports.signup=async (req, res) => { 
    try{
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        // console.log(registeredUser);
        // log the user in after registration
        req.login(registeredUser, (err) => {
            if(err){
                return next();
            }
        req.flash("success", "Welcome to Wonderlust!");
        res.redirect("/listings");
        });
     }catch (e) {
        console.log(e);
        req.flash("error", e.message);
        res.redirect("/signup");
     }
}

module.exports.renderlogin =  (req, res) => {
    res.render("users/login");
}
 module.exports.login =  async (req, res) => {
        req.flash("success", "Welcome back!");
        res.redirect(res.locals.redirectUrl || "/listings");
     }

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Goodbye!");
        res.redirect("/listings");
    });
}
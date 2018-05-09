var mongoose = require("mongoose");
//allows the plugins to be used. 
var passportLocalMongoose = require("passport-local-mongoose");


//sets up schema for users
var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

//adds in methods for use on app.js to add functionality to the users
UserSchema.plugin(passportLocalMongoose);
//exports
module.exports = mongoose.model("User", UserSchema);
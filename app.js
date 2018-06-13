var express         = require("express"), 
app                 = express(), 
mongoose            = require("mongoose"), 
bodyParser          = require("body-parser"),
methodOverride      = require("method-override"),
// flash               = require("connect-flash"),
// passport            = require("passport"),
// LocalStrategy       = require("passport-local"),
// create tenant model
Tenant             	= require("./models/tenants"),
//Create user model
// User                = require("./models/users"),
seedDB              = require("./seeds"),
request				= require("request"),
// weather				= requre("./weather"),
port                = process.env.PORT;
// var url = (DATABASEURL);
console.log(process.env.DATABASEURL);

//require routes
//These are the routes under routes folder. This is so that we can separate our routes for each portion into separate files so that  app.js isn't humungous.
<<<<<<< HEAD

var tenantRoutes = require("./routes/tenants");
// var commentRoutes   = require("./routes/comments"),
//     camproundRoutes = require("./routes/campgrounds"),
//     indexRoutes     = require("./routes/index");

//seedDB is commented out so that it doesn't generate data for us since we have real working data running on the site. 
// seedDB();
=======
//for use with router
// var tenantRoutes = require("./routes/tenants");
//seedDB();
>>>>>>> non-routed
// This does something to add all the directories into a the express system so that oyu don't have to explicitly say which folder it is in. I think 
app.use(express.static(__dirname + "/public"));
//Method over ride allows us to use server commands that don't work in the current http environmnet. 
app.use(methodOverride("_method"));
// mongoose.Promise = global.Promise;
//connects to database
// mongoose.connect(process.env.DATABASEURL);
mongoose.connect(process.env.DATABASEURL);
//sets up parsing to read req.body
app.use(bodyParser.urlencoded({extended: true}));
//sets up no need for .ejs after filenames
app.set("views",__dirname + "/views/");
app.set("view engine", "ejs");
//adds the middleware to all the routes without explicitly adding it. 
// app.use(flash());

//passport Configuration
// app.use(require("express-session")({
//     secret: "What is life's greatest illusion?",
//     resave: false,
//     saveUnitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// //Passes user and message to all views
// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     // res.locals.error = req.flash("error");
//     // res.locals.success = req.flash("success");
//     next();
// });

//Sets up the actual routes for each of the index pages. 
// app.use(indexRoutes);
app.use("/", tenantRoutes);

//sets up server to start with app.

app.listen(port, function(){
<<<<<<< HEAD
   console.log("Directory Server Started"); 
});
=======
   console.log("Directory Server Started listing on " + port);
});
>>>>>>> non-routed

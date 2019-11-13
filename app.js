var express         = require("express"), 
app                 = express(), 
mongoose            = require("mongoose"), 
bodyParser          = require("body-parser"),
methodOverride      = require("method-override"),
// flash               = require("connect-flash"),
// passport            = require("passport"),
// LocalStrategy       = require("passport-local"),
Tenant             	= require("./models/tenants"),
// User                = require("./models/users"),
seedDB              = require("./seeds"),
request				= require("request"),
port                = 30495;


//These are the routes under routes folder. This is so that we can separate our routes for each portion into separate files so that  app.js isn't humungous.
//for use with router
// var tenantRoutes = require("./routes/tenants");
//seedDB();
// This does something to add all the directories into a the express system so that oyu don't have to explicitly say which folder it is in. I think 
app.use(express.static(__dirname + "/public"));
//Method over ride allows us to use server commands that don't work in the current http environmnet. 
app.use(methodOverride("_method"));
//connects to database
mongoose.connect("mongodb://localhost/directory");
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
app.get("/", function(req, res){ 
	var url = "http://api.openweathermap.org/data/2.5/weather?q=West+Des+Moines&units=imperial&appid=8deb9186ad62ba1d2113ab0ba186c3a1";
	request(url, function(error, response, body){
		if(!error && response.statusCode === 200){
			var weatherData = JSON.parse(body);
			console.log(weatherData.weather[0].id);
			Tenant.find({}).sort('name').exec(function(err, allTenants){
        		if(err){
            	console.log(err);
        		} else {
            		res.render("tenants/index", {tenants: allTenants, currentUser: req.user, page: 'display', weather: weatherData});
        		}
    		});
		} else {
			console.log(err);
		}
	});
});

//Tenant Index area for admins add in middleware
app.get("/tenants", function(req, res){
	Tenant.find({}).sort('name').exec(function(err, allTenants){
		if(err){
			console.log(err);
		} else {
			res.render("tenants/adminindex", {tenants: allTenants, currentUser: req.user, page: 'adminindex'});
		}
	});
});

//New Tenants
app.get("/tenants/new", function(req, res){
	res.render("tenants/new", {page: 'new'});
});

//Create Tenants
app.post("/tenants", function(req, res){
	var name 		= req.body.name;
	var suite 		= req.body.suite;
	var column 		= req.body.column;
	var subname1 	= req.body.subname1;
	var subname2 	= req.body.subname2;
	var subname3 	= req.body.subname3;
	var subname4 	= req.body.subname4;
	var subname5 	= req.body.subname5;
	var subname6 	= req.body.subname6;
	var subname7 	= req.body.subname7;
	var subname8 	= req.body.subname8;
	var subname9 	= req.body.subname9;
	var subname10 	= req.body.subname10;
	var newTenant 	= {name:name, suite:suite, column:column, subname1:subname1,
		subname2:subname2, subname3:subname3, subname4:subname4, subname5:subname5, subname6:subname6,
		subname7:subname7, subname8:subname8, subname9:subname9, subname10:subname10};
	//New tenant logic to add into database	
	Tenant.create(newTenant, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			console.log(newlyCreated);
			res.redirect("/tenants");
		}
	});
});
//Show Tenants
app.get("/tenants/:tenant_id", function(req, res){
	Tenant.findById(req.params.tenant_id).exec(function(err, foundTenant){
		if(err){
			console.log(err);
		} else {
			console.log(foundTenant);
			res.render("tenants/show", {tenant: foundTenant, page: 'show'});
		}
	});
});
//Edit Tenants
app.get("/tenants/:tenant_id/edit", function(req, res){
	Tenant.findById(req.params.tenant_id, function(err, foundTenant){
		if(err){
			console.log(err);
		} else {
			console.log(foundTenant);
			res.render("tenants/edit", {tenant: foundTenant, page: 'edit'});
		}
	});
});
//Update Tenants
app.put("/tenants/:tenant_id", function(req, res){
	Tenant.findByIdAndUpdate(req.params.tenant_id, req.body.tenant, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/tenants/" + req.params.tenant_id);
		}
	});
});
//Delete Tenants
app.delete("/tenants/:tenant_id", function(req, res){
	Tenant.findByIdAndRemove(req.params.tenant_id, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/tenants");
		}
	});
});

//Sets up the actual routes for each of the index pages. for use with router 
//app.use("/", tenantRoutes);

//sets up server to start with app.
app.listen(port, function(){
   console.log("Directory Server Started listing on " + port);
});

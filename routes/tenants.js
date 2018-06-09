var 
express         = require("express"),
router          = express.Router(),
Tenant 			= require("../models/tenants");
request			= require("request");
// User 			= require("../models/users");

// console.log("hello world! this is from the tenant.js route");
// router.get("/", function(req, res){
// 	res.send("hello world 2!");
// });
router.get("/", function(req, res){ 
	var url = "http://api.openweathermap.org/data/2.5/weather?q=West+Des+Moines&units=imperial&appid=8deb9186ad62ba1d2113ab0ba186c3a1"
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
router.get("/tenants", function(req, res){
	Tenant.find({}).sort('name').exec(function(err, allTenants){
		if(err){
			console.log(err);
		} else {
			res.render("tenants/adminindex", {tenants: allTenants, currentUser: req.user, page: 'adminindex'});
		}
	});
});

//New Tenants
router.get("/tenants/new", function(req, res){
	res.render("tenants/new", {page: 'new'});
});

//Create Tenants
router.post("/tenants", function(req, res){
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
router.get("/tenants/:tenant_id", function(req, res){
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
router.get("/tenants/:tenant_id/edit", function(req, res){
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
router.put("/tenants/:tenant_id", function(req, res){
	Tenant.findByIdAndUpdate(req.params.tenant_id, req.body.tenant, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/tenants/" + req.params.tenant_id);
		}
	});
});
//Delete Tenants
router.delete("/tenants/:tenant_id", function(req, res){
	Tenant.findByIdAndRemove(req.params.tenant_id, function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/tenants");
		}
	});
});

module.exports = router;
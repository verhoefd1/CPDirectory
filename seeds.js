var mongoose = require("mongoose");
var Tenant = require("./models/tenants");
// var User = require("./models/users");

var data = [
    {
        letter: "A",
        name: "All Spice",
        suite: 100,
        column: 1,
        subname1: "Dude One",
        subname2: "Dude Two",
        subname3: "Dude Three",
        subname4: "Dude Four",
        subname5: "Dude Five",
        subname6: "Dude Six",
    },
    {
        letter: "C",
        name: "California",
        suite: 340,
        column: 2,
        subname1: "Dude One",
        subname2: "Dude Two",
        subname3: "Dude Three",
        subname4: "Dude Four",
        subname5: "Dude Five",
        subname6: "Dude Six",
    },
    {
        letter: "F",
        name: "Foxtrot",
        suite: 600,
        column: 3,
        subname1: "Dude One",
        subname2: "Dude Two",
        subname3: "Dude Three",
        subname4: "Dude Four",
        subname5: "Dude Five",
        subname6: "Dude Six",
    },
    {
        letter: "B",
        name: "Baby Backs Ribs",
        suite: 200,
        column: 1,
        subname1: "Dude One",
        subname2: "Dude Two",
        subname3: "Dude Three",
        subname4: "Dude Four",
        subname5: "Dude Five",
        subname6: "Dude Six",
    },
    {
        letter: "D",
        name: "Delta",
        suite: 460,
        column: 2,
        subname1: "Dude One",
        subname2: "Dude Two",
        subname3: "Dude Three",
        subname4: "Dude Four",
        subname5: "Dude Five",
        subname6: "Dude Six",
    }
];

function seedDB(){
    Tenant.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed all tenants");
        }
        data.forEach(function(seed){
            Tenant.create(seed, function(err, tenant){
                if(err){
                    console.log(err);
                } else {
                    console.log("Created a new tenant!");
                    tenant.save();
                }
            });
        });
    });
}
module.exports = seedDB;
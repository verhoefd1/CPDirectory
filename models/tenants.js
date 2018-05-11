var mongoose = require("mongoose");

//schema setup
var tenantSchema = new mongoose.Schema({
    // letter: String,
    name: String,
    suite: Number,
    column: Number,
    subname1: String,
    subname2: String,
    subname3: String,
    subname4: String,
    subname5: String,
    subname6: String,
    subname7: String,
    subname8: String,
    subname9: String,
    subname10: String,
});

//converts Schema to a model. 
module.exports = mongoose.model("Tenant", tenantSchema);
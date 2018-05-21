# CPDirectory
A scalable interface for the Colony Park Directory that will eventually be interactive - This was mostly just a personal project that I'll build on over time and a chance for me to get my feet wet in using Git and some of the other technologies I've been learning. I just finished deploying the initial version on the 21st of May 2018. Not sure how much more I'll do to it. I have several goals in mind for future versions but at the moment it's where I need it to be so we'll see. 

# Installation - Ubuntu - this is what I built it on then deployed it to a Raspberri Pi attached to a public TV to display tenant informaiton and locations as well as weather. The insructions are fairly similar for initial installation. Deployment instructions will assume it's on a Raspberri Pi. 

Install MongoDB - Keep an eye on what version you end up with as it will change which Mongoose version you can use. On Raspbian which is what this was deployed on, the release for MongoDB was: 2.4.14 which means Mongoose had to be downgraded to 4.0. More on the version compatibility here: http://mongoosejs.com/docs/compatibility.html

I recommend following the documentation for MongoDB installation in their docs to prevent issues. 

sudo apt-get install MongoDB

Test to make sure that MongoDB is up and running when it's done installing by type mongo into your terminal. It should start the MongoDB Shell and you can use commands like show dbs. There should only be one currently called Local. CTRL+C to exit the shell

mongo

You can find version by type mongodb --version

Install NPM

sudo apt install npm -y

Install Packages

sudo npm install express ejs connect-flash express-session express-sanitizer method-override mongoose passport passport-local passport-local-mongoose request forever nodemon -g --save

Once that is finished installing, you should be able to run the app assuming your Mongoose version lines up with the MongoDB and find the page at localhost:8080

Use this command to start the server (Make sure you're in the directory containing app.js)

nodemon app.js - auto restarts after saves to server side files

or sudo nodejs app.js - basic start

or forever start app.js - will be used later to run upon startup of computer

Test the connection to MongoDB by uncommenting seedDB(); and restarting the node server or by adding a tenant at localhost:8080/tenants and click add a tenant.










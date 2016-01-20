var express = require('express');
var config = require('./config');
var path = require('path');
var cors = require('cors'); //package to allow CORS requests

var app = express();

app.use(cors());

app.use(express.static(__dirname + '/public')); // set the public folder to serve public assets

var electionRoutes = require('./app/routes/election.js')(app, express); // import routes/api.js file

// set up our one route to the index.html file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/index.html'))
});

// start the local server on port 8080 (http://localhost:8080)
app.listen(config.port);
console.log('Election App launched.');
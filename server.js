// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
//require mongoose\\
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

// Connect monggoDB \\
mongoose.connect('mongodb://localhost/omega3Studio');

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
    
	res.sendFile('html/applicants.html', {root : './public'});
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
   
    console.log(req.body);
	// from the post body and store it in the database
	res.send('Success!');
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
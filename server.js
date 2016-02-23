// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
//require mongoose\\
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

// Connect monggoDB \\
mongoose.connect('mongodb://localhost/omega3Studio');

// Application Configuration \\
app.use(logger('dev'));
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

// require controller - put functions in one controller for applicants

var applicantsCtrl = require('./controllers/applicantsCtrl.js')

// creates an applicant - calls ng-submit function

app.post('/applicant', applicantsCtrl.createApplicant)

app.get('/applicants', applicantsCtrl.getApplicants)

//app.post('/applicant', function(req, res){
//	// Here is where you need to get the data
//   
//    console.log(req.body);
//	// from the post body and store it in the database
////	res.send('Success!');
//    //redirect  after submitted \\
//    res.redirect('Success!');
//});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
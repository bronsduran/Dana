var express = require('express');
var router = require('./routes');
var app = express();
var airtableConfig = require('./secret');
var Airtable = require('airtable');

//Configure the Airtable API
Airtable.configure({
	endpointUrl: 'http://localhost:5000', 
	apikey: airtableConfig["AIRTABLE_API_KEY"]
});
var base = Airtable.base('appfroa8YN4yjSWIk');

app.set('view engine', 'html');
app.use('/', router);
app.use(express.static('public'));
app.get('/', function (req, res) {
	res.sendFile( __dirname + "/views" + "/index.html" );
});


//To list records in Beneficiaries. 
base('Beneficiaries').select({
	//Selecting the first 3 records in Main View:
	maxRecords: 3,
	view: "Main View"
}).eachPage(function page(records, fetchNextPage) {

	//This function will get called for each page of records.
	records.forEach(function(record) {
		console.log('Retreived', record.get('Name'));
	});
	fetchNextPage();

}, function done(error) {
	if(error) {
		console.log(error);
	}
});


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});

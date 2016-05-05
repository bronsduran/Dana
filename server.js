var express = require('express');
var router = require('./routes');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var airtableConfig = require('./secret');
var Airtable = require('airtable');
var path = require('path');

var app = express();

var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// app.set('view engine', 'html');
// app.use('/', router);
// app.use(express.static('public'));
// app.get('/', function (req, res) {
// 	res.sendFile( __dirname + "/views" + "/index.html" );
// });


//Configure the Airtable API
var base = new Airtable({
	apikey: airtableConfig["AIRTABLE_API_KEY"]
}).base('appfroa8YN4yjSWIk');

//To list records in Beneficiaries. 
base('Projects').select({
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



new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
  	"*": "http://localhost:5000"
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Webpack server listening at http://localhost:3000/');
});


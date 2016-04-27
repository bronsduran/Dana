var express = require('express');
var router = require('./routes');
var app = express();

app.set('view engine', 'jade');
app.use('/', router);
app.use(express.static('public'));
app.get('/', function (req, res) {
	res.sendFile( __dirname + "/views" + "/index.jade" );
});


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});

var express = require('express');
var router = require('./routes');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

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

app.use(express.static(path.join(__dirname, 'public')));

//Configure the Airtable API
module.exports = Airtable.base('appfroa8YN4yjSWIk');


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

var express = require('express');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');
var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var awsConfig = require('./secrets');

var app = express();




var transporter = nodemailer.createTransport(sesTransport({
  accessKeyId: awsConfig.AWS_Client_ID,
  secretAccessKey: awsConfig.AWS_Client_Secret,
  region: 'us-west-2'
}));

var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var mailOptions = {
  from: '"Stephanie Wang" <steph17@stanford.edu>', 
  to: 'steph17@stanford.edu',
  subject: 'Node Mailer works!',
  text: 'If you see this, this works.',
  html: '<b> Hello World </b>'
};

transporter.sendMail(mailOptions, function (error, info) {
  if(error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});

app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});

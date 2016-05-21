var React = require('react');
import {ButtonToolbar, Button, Thumbnail, Panel, PageHeader} from 'react-bootstrap'
var ReactDOM = require('react-dom');
var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');

var transporter = nodemailer.createTransporter(sesTransport({
  ses: ses
}));

var leftButtonStyle = {
  display: 'inline',
  marginRight: '30px',
  marginBottom: '0px',
  bottom: '0'
};

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};


var style = {
  width: '100%',
  height: '100vh'
};

var mailOptions = {
  from: '"Stephanie Wang" <stephhwangg@gmail.com>', 
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

module.exports = React.createClass({

  render: function() {
      return(

        <div className="donorList">
          <PageHeader><small> Donors </small></PageHeader>
          <Thumbnail style={style}>
              {this.props.donors}
            <Button
              style={leftButtonStyle}
              bsStyle="primary"
              bsSize="small">Send Update
            </Button>
          </Thumbnail>
        </div>
      );
    }
  });

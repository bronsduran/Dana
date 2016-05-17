var React = require('react');
import {ButtonToolbar, Button, Thumbnail} from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var ReactDOM = require('react-dom');



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

module.exports = React.createClass({

  render: function() {
      return(

        <div className="donorList">
          <Thumbnail style={style}>
            <ul>
              {this.props.donors}
            </ul>
            <Button
              style={leftButtonStyle}
              bsStyle="primary"
              bsSize="large">Send Update
            </Button>
          </Thumbnail>
        </div>
      );
    }
  });

var React = require('react');
import {ButtonToolbar, Button} from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var ReactDOM = require('react-dom');



var leftButtonStyle = {
  display: 'inline',
  marginRight: '30px'
};

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};


module.exports = React.createClass({

  render: function() {

      return(
        <div>
        <div className="donorList">
        <ul>
           {this.props.donors}
        </ul>
        </div>

        </div>
      )
    }
  });

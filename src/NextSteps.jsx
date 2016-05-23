var React = require('react');
import {ButtonToolbar, Button} from 'react-bootstrap'
var ReactDOM = require('react-dom');



var leftButtonStyle = {
  display: 'inline',
  marginRight: '30px'
};

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};

var style = {
  textAlign: "center",
};

module.exports = React.createClass({

  render: function() {

      return(
        <div style={style} className="center-align row donorStats">
          <Button
            style={leftButtonStyle}
            onClick={this.handleModalOpen}
            bsStyle="primary"
            bsSize="large">Share this story
          </Button>

          <Button
            style={leftButtonStyle}
            onClick={this.handleModalOpen}
            bsStyle="primary"
            bsSize="large">Donate more
          </Button>

        </div>
      )
    }
  });

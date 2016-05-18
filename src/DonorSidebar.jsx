var React = require('react');
import {ButtonToolbar, Button, Thumbnail} from 'react-bootstrap'
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
              {this.props.donors}
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

var React = require('react');
var ReactDOM = require('react-dom');
import { Thumbnail, Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap'

var style = {
  
};
module.exports = React.createClass({


    render() {

      return (
        <div>
          <Thumbnail src={this.props.img} alt="242x200" style={style}>
            <h5>
              Campaign Name: {this.props.name}
            </h5>
            <h6>
            <p>Location: {this.props.location} </p>
            <p>Status: {this.props.stage}</p>
            </h6>
          </Thumbnail>
        </div>
      );
    }
  });

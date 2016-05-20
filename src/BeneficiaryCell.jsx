var React = require('react');
var ReactDOM = require('react-dom');
import { Thumbnail, Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap'


module.exports = React.createClass({


    render() {

      return (
        <div>
          <Thumbnail src={this.props.img} alt="242x200">
            <h5>
              Campaign Name: {this.props.name}
            </h5>
            <h6>
            <p>Status: {this.props.stage}</p>
            <p>Amount To Go :{this.props.donation_grand_total}</p>
            </h6>
          </Thumbnail>
        </div>
      );
    }
  });

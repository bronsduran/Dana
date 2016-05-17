var React = require('react');
var ReactDOM = require('react-dom');
import { Thumbnail, Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap'


module.exports = React.createClass({

    render() {
      return (
        <div>
          <Thumbnail src={this.props.img} alt="242x200">
            <h3>
              {this.props.name}
            </h3>
            <h4>
              {this.props.stage}
            </h4>

            <h4>
              {this.props.donorList}
            </h4>
            <h4>
              {this.props.stage}
            </h4>
          </Thumbnail>

        </div>
      );
    }
  });

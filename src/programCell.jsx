var React = require('react');
var ReactDOM = require('react-dom');
import { Thumbnail, Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
var Dashboard = require('./Dashboard.jsx');


var style = {
  borderRadius: '0 !important'
};
module.exports = React.createClass({

    handleDashboardOpen() {
      ReactDOM.render(<Dashboard pollInterval={3000}/>, document.getElementById('main'));
    },

    render() {

      return (
        <div onClick={this.handleDashboardOpen}>
          <Thumbnail src={this.props.program.image} alt="242x200" style={style}>
            <h5>
              Program Name: {this.props.program.programName}
            </h5>
            <h6>
              <p>Location: {this.props.program.programLocation} </p>
              <p>Number of Beneficiaries: {this.props.program.numProjects}</p>
              <p>Cost per project: {this.props.program.averageCostPerProject}</p>
            </h6>
          </Thumbnail>
        </div>
      );
    }
  });

var React = require('react');
var ReactDOM = require('react-dom');
import { Thumbnail, Button, Modal, Popover, Tooltip, OverlayTrigger, Panel } from 'react-bootstrap';
var Dashboard = require('./Dashboard.jsx');


var style = {
  borderRadius: '0 !important'
};


module.exports = React.createClass({


    handleDashboardOpen() {
      ReactDOM.render(<Dashboard pollInterval={3000}/>, document.getElementById('main'));
    },
    render() {
      var title = (
        <h3> {this.props.program.programName} </h3>
      );
      return (
        <div onClick={this.handleDashboardOpen}>
          <Panel header={title}>
            <p>Location: {this.props.program.programLocation} </p>
            <p>Number of Beneficiaries: {this.props.program.numProjects}</p>
            <p>Cost per project: {this.props.program.averageCostPerProject}</p>
          </Panel>
        </div>
      );
    }
  });

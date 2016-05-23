var React = require('react');
var ReactDOM = require('react-dom');
import { Thumbnail, Button, Modal, Popover, Tooltip, OverlayTrigger, Panel } from 'react-bootstrap';
var Dashboard = require('./Dashboard.jsx');


var style = {
  
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
        <div onClick={this.handleDashboardOpen} >
          <Panel header={title} style={style} bsStyle="primary">
            <p>Number of Beneficiaries: {this.props.program.numProjects}</p>
            <p>Number of Donors: {this.props.program.numDonors}</p>
            <p>Total Donations: {this.props.program.totalDonations}</p>
          </Panel>
        </div>
      );
    }
  });

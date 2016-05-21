var React = require('react');
var ReactDOM = require('react-dom');
var AirtableData = require('./AirtableData.jsx');
import { Button } from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var Navbar = require('./Navbar.jsx');
var DonorStats = require('./DonorStats.jsx');


var leftButtonStyle = {
  display: 'inline',
  marginRight: '30px'
};

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};

module.exports = React.createClass({

	handleDashboardOpen() {
    ReactDOM.render(<Dashboard pollInterval={3000}/>, document.getElementById('main'));
  },
  handleAirtableOpen() {
    ReactDOM.render(<AirtableData iframe='iframe' src="https://airtable.com/embed/shrHQgGYJfY1XScnK?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" />, document.getElementById('container'));
  },

	render() {

		return (
      <div className="homepage">
        <Navbar />
        <div id="main">
          <h1> Welcome back!</h1>
          <DonorStats />
            <br/>
            <div className="center" style={{
              paddingTop: '30px',
              width: 'auto',
              margin: 'auto',
            }}>
              <Button
                style={leftButtonStyle}
                onClick={this.handleDashboardOpen}
                bsStyle="primary"
                bsSize="large">Enter Dashboard
              </Button>
              <Button
                style={rightButtonStyle}
                onClick={this.handleAirtableOpen}
                bsStyle="primary"
                bsSize="large">View Data
              </Button>
            </div>
          </div>
      </div>

		)
	}
});

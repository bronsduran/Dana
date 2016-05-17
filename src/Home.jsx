var React = require('react');
var ReactDOM = require('react-dom');
var EmailTemplate = require('./emailTemplate.jsx');
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
    ReactDOM.render(<Dashboard pollInterval={3000}/>, document.getElementById('container'));
  },
  handleAirtableOpen() {
    ReactDOM.render(<AirtableData iframe='iframe' src="https://airtable.com/embed/shrHQgGYJfY1XScnK?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" />, document.getElementById('container'));
  },

	render() {

		return (
      <div className="homepage">
        <Navbar />
        <h1> Welcome back!</h1>
        

        <DonorStats />

          <br/>

          <div style={{
            paddingTop: '30px',
            width: '440px',
            margin: '0 auto',
          }}>
            <Button
              style={leftButtonStyle}
              onClick={this.handleModalOpen}
              bsStyle="primary"
              bsSize="large">Create New Program
            </Button>
            <Button
              style={rightButtonStyle}
              onClick={this.handleAirtableOpen}
              bsStyle="success"
              bsSize="large">Enter Dashboard
            </Button>
          </div>
      </div>

		)
	}
});

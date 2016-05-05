var React = require('react');
var ReactDOM = require('react-dom');
var EmailTemplate = require('./emailTemplate.jsx');
var AirtableData = require('./AirtableData.jsx');
var Button = require('react-bootstrap').Button;
var Dashboard = require('./Dashboard.jsx');

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
    ReactDOM.render(<Dashboard />, document.getElementById('container'));
  },
  handleAirtableOpen() {
    ReactDOM.render(<AirtableData iframe='iframe' src="https://airtable.com/embed/shrHQgGYJfY1XScnK?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" />, document.getElementById('container'));
  },

	render() {

		return (
			<div>
				<Button
					style={leftButtonStyle}
					onClick={this.handleDashboardOpen}
					bsStyle="primary"
					bsSize="large"> Donor Management Dashboard </Button>
				<Button
					style={rightButtonStyle}
					onClick={this.handleAirtableOpen}
					bsStyle="primary"
					bsSize="large"> View All Data </Button>
			</div>
		)
	}
});

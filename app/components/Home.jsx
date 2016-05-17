var React = require('react');
var ReactDOM = require('react-dom');
var EmailTemplate = require('./emailTemplate.jsx');
var AirtableData = require('./AirtableData.jsx');
import { Button } from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var Navbar = require('./Navbar.jsx');
var DonorStats = require('./DonorStats.jsx');


var ButtonStyle = {
  display: 'inline',
  marginRight: '30px'
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
<<<<<<< HEAD:app/components/Home.jsx
=======
      <div className="homepage">
        <Navbar />
        <h1> Welcome back :)</h1>
>>>>>>> 1a540635c5fd22ba62c8ef825b21b7f03b1e7a85:src/Home.jsx
        <DonorStats />

          <div style={{
            paddingTop: '30px',
            width: 'auto',
            margin: '0 auto',
          }}>
            <Button
              style={ButtonStyle}
              onClick={this.handleModalOpen}
              bsStyle="primary"
              bsSize="large">Create New Program
            </Button>
            <Button
              style={ButtonStyle}
              onClick={this.handleDashboardOpen}
              bsStyle="primary"
              bsSize="large">Enter Dashboard
            </Button>
            <Button
            style={ButtonStyle}
            onClick={this.handleAirtableOpen}
            bsStyle="primary"
            bsSize="large">View All Data
            </Button>
         </div>
        </div>
    );
  }
});

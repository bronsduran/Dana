var React = require('react');
var ReactDOM = require('react-dom');
var AirtableData = require('./AirtableData.jsx');
import { Button, Grid, Row, Col, PageHeader } from 'react-bootstrap'
var Navbar = require('./Navbar.jsx');
var ProgramCell = require('./programCell.jsx');

var addProgramButtonSytle = {
  float: 'right',
  borderRadius: '100'
};


var gridStyle = {
  clear: 'left'
};

var rowStyle = {
  display:'flex',
  flexWrap: 'wrap'
};

module.exports = React.createClass({

	handleDashboardOpen() {
    ReactDOM.render(<Dashboard pollInterval={3000}/>, document.getElementById('main'));
  },
  handleAirtableOpen() {
    ReactDOM.render(<AirtableData iframe='iframe' src="https://airtable.com/embed/shrHQgGYJfY1XScnK?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" />, document.getElementById('container'));
  },

	render() {

    var programData = [
                        {programName: 'Treatment Abroad' , numProjects: '45', programLocation: 'Middle East', averageCostPerProject: 'Unknown', image: 'URL'},
                        {programName: 'Medical Missions', numProjects: '107' , programLocation: 'Middle East', averageCostPerProject: 'Unknown', image: 'URL'},
                      ]
    var programs = [];

    programData.forEach(function(program) {
        programs.push(
          <Col xs={12} md={6} >
            <ProgramCell program={program}/>
          </Col>
          );
        });

		return (
      <div className="homepage">
        <Navbar />
        <div id="main">
          <Grid className="container-fluid" style={gridStyle}>
          <PageHeader>
            <small> Programs </small>
              <Button style={addProgramButtonSytle} bsStyle="primary">
                +
              </Button>
          </PageHeader>
            <Row style={rowStyle}>
              {programs}
            </Row>
          </Grid>
        </div>
    </div>

		)
	}
});

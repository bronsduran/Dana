var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');
import { Tabs, Tab, Badge, Button, Nav, NavItem } from 'react-bootstrap';



var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'
};

module.exports = React.createClass({


  loadDataFromAirtable: function() {
    var base = new Airtable({ apiKey: 'keyJoo0QH6ip5yH4S' }).base('appfroa8YN4yjSWIk');
    var beneficiaries = [];

    base('UOI').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 5,
        view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {

            beneficiaries.push(
              {
              name: record.get('Name'),
              stage: record.get('Stage'),
              description: record.get('Description'),
              imageUrl: record.get('Photo')[0].url
            }
          )
        });
        console.log('beneficiaries1',beneficiaries);
        fetchNextPage();
        this.setState({data: beneficiaries})
    }.bind(this),
    function done(error) {
        if (error) {
            console.log(error);
        }
    });
  },


  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadDataFromAirtable();
  },

  handleSelect(eventKey) {

  },

  render: function() {

    var stage2data = [
      {name: 'Arushi', stage: 'Stage 2', description: 'Project Funded'},
      {name: 'Bronson', stage: 'Stage 2', description: 'Project Funded'},
      {name: 'Nathan', stage: 'Stage 2', description: 'Project Funded'}
    ]

      return(
        <div className="dashboard">
          <Nav bsStyle="tabs" activeKey={1} justified onSelect={this.handleSelect}>
            <NavItem eventKey={1}> Stage 1 <span className="badge">24</span> </NavItem>
            <NavItem eventKey={2}> Stage 2 <span className="badge">24</span> </NavItem>
            <NavItem eventKey={3}> Stage 3 <span className="badge">24</span> </NavItem>
            <NavItem eventKey={4}> Stage 4 <span className="badge">24</span> </NavItem>
          </Nav>
          <BeneficiaryGrid beneficiaries={this.state.data}/>
  	    </div>
    );
  }
});

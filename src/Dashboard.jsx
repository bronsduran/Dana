var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');
import { Tabs, Tab, Badge, Button, Nav, NavItem } from 'react-bootstrap';
var Email = require('./Email.jsx');
var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'
};

module.exports = React.createClass({


  loadDataFromAirtable: function() {
    var base = new Airtable({ apiKey: 'keyJoo0QH6ip5yH4S' }).base('appfroa8YN4yjSWIk');
    var donors = {};
    var campaigns = {};
    base('PCRF').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 50,
        view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
            var donation_campaign =  record.get('Donation Campaign Name');
            donors[donation_campaign] =
              {
                donor_email: record.get('Email'),
                donation_date: record.get('Donation Date'),
                donor_first_name: record.get('First Name'),
                donor_last_name: record.get('Last Name'),
                donation_campaign : record.get('Donation Campaign Name')

            }
        });
        fetchNextPage();

        this.setState({"donors": donors});

    }.bind(this),
    function done(error) {
        if (error) {
            console.log(error);
        }
    });


  base('PCRF_Campaigns').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 50,
        view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
          var campaign_name = record.get('Name');

            campaigns[campaign_name] =
              {
                campaign_name: record.get('Name'),
                donation_amount: record.get('Donation Date'),
                donation_grand_total: record.get('Grand Total'),
                campaign_goal: record.get('Goal'),
                campaign_status: record.get('Status')
            }
        });
        fetchNextPage();
        this.setState({"campaigns": campaigns});

    }.bind(this),
    function done(error) {
        if (error) {
            console.log(error);
        }
    });

  },


  getInitialState: function() {
    return {

      "campaigns": [],
      "donors": []
    };
  },

  componentDidMount: function() {
    console.log(this.state)
    console.log("loadDataFromAirtable")

    this.loadDataFromAirtable();
  },

  handleSelect(eventKey) {
    var keys = Object.keys(this.state.campaigns);
    console.log("keys ", keys);
    console.log("stages");

    var stages = {};
    for (var i= 0; i <= 4; i++){
      stages[i] = []
    }
    for (var key in keys){
      var campaign = this.state.campaigns[keys[key]];
      var donor = this.state.donors[keys[key]];
      var stage  = campaign.stage
        stages[stage].push(donor)


    }

    ReactDOM.render(<BeneficiaryGrid key={eventKey} donors={this.state.donors} campaigns={this.state.campaigns}/>, document.getElementById('BeneficiaryGrid'));
  },

  handleEmailTemplateOpen() {
    ReactDOM.render(<Email />, document.getElementById('container'));
  },

  render: function() {
      return(
        <div className="dashboard">
        <Nav bsStyle="tabs" activeKey={1} justified onSelect={this.handleSelect}>
            <NavItem eventKey={1}> Stage 1 <span className="badge">42</span> </NavItem>
            <NavItem eventKey={2}> Stage 2 <span className="badge">42</span> </NavItem>
            <NavItem eventKey={3}> Stage 3 <span className="badge">42</span> </NavItem>
            <NavItem eventKey={4}> Stage 4 <span className="badge">42</span> </NavItem>
        </Nav>
          <div id="BeneficiaryGrid">
            <BeneficiaryGrid donors={this.state.donors} campaigns={this.state.campaigns}/>
          </div>
  	    </div>
    );
  }
});

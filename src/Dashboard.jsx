var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');
import { Tabs, Tab, Badge, Button, Nav, NavItem, PageHeader, Grid, Row, Col } from 'react-bootstrap';
var Email = require('./Email.jsx');
var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'
};

var stageCounts = {
  "Transportation to Treatment Location": 0,
  "Surgery Completed": 0,
  "Recovery Period": 0,
  "Treatment Completed": 0
};
var gridStyle = {
  clear: 'left'
};

var rowStyle = {
  display:'flex',
  flexWrap: 'wrap'
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


  base('Beneficiaries(Dummy)').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 400,
        view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {

          stageCounts[record.get('Stage')] += 1;

          var campaign_name = record.get('Name');
            campaigns[campaign_name] =
              {
                campaign_name: record.get('Name'),
                campaign_condition: record.get('Condition'),
                campaign_stage: record.get('Stage'),
                campaign_treatment: record.get('Treatment'),
                campaign_photo: record.get('Photo')[0].url,
                campaign_location: record.get('Home Location')
            }
        });
        fetchNextPage();
        this.setState({"campaigns": campaigns});
        console.log("stageCounts: ", stageCounts);

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
      "donors": [],
    };
  },

  componentDidMount: function() {
    console.log(this.state)
    console.log("loadDataFromAirtable")

    this.loadDataFromAirtable();
  },

  handleSelect(eventKey) {

    ReactDOM.render(<BeneficiaryGrid stageKey={eventKey} donors={this.state.donors} campaigns={this.state.campaigns}/>, document.getElementById('BeneficiaryGrid'));
  },

  handleEmailTemplateOpen() {
    ReactDOM.render(<Email />, document.getElementById('container'));
  },

  render: function() {
      return(
        <Grid className="container-fluid" style={gridStyle}>
          <PageHeader>
            <small> Treatment Abroad </small>
          </PageHeader>
          <Row style={rowStyle}>
            <Nav bsStyle="tabs" ActiveKey={1} justified onSelect={this.handleSelect}>
                <NavItem eventKey={1}> Transported <span className="badge">{stageCounts["Transportation to Treatment Location"]}</span> </NavItem>
                <NavItem eventKey={2}> Surgery Completed <span className="badge">{stageCounts["Surgery Completed"]}</span> </NavItem>
                <NavItem eventKey={3}> Recovery Period <span className="badge">{stageCounts["Recovery Period"]}</span> </NavItem>
                <NavItem eventKey={4}> Treatment Completed <span className="badge">{stageCounts["Treatment Completed"]}</span> </NavItem>
            </Nav>
            <div id="BeneficiaryGrid">
              <BeneficiaryGrid stageKey="1" donors={this.state.donors} campaigns={this.state.campaigns}/>
            </div>
          </Row>
        </Grid>
    );
  }
});

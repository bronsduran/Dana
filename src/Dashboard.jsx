var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');
import { Tabs, Tab, Badge, Button } from 'react-bootstrap';
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
        maxRecords: 10,
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
        maxRecords: 5,
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
    console.log(this.state)

  },

  handleEmailTemplateOpen() {
    ReactDOM.render(<Email />, document.getElementById('main'));
  },

  render: function() {


      return(
        <div className="dashboard">
          <Tabs defaultActiveKey={1} justified animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="Stage 1"><BeneficiaryGrid donors={this.state.donors} campaigns={this.state.campaigns}/> </Tab>
            <Tab eventKey={2} title="Stage 2"><BeneficiaryGrid donors={this.state.donors} campaigns={this.state.campaigns}/> </Tab>
            <Tab eventKey={3} title="Stage 3"><BeneficiaryGrid donors={this.state.donors} campaigns={this.state.campaigns}/> </Tab>
            <Tab eventKey={4} title="Stage 4"><BeneficiaryGrid donors={this.state.donors} campaigns={this.state.campaigns}/> </Tab>
          </Tabs>
          <Button
            style={rightButtonStyle}
            onClick={this.handleEmailTemplateOpen}
            bsStyle="primary"
            bsSize="large">Update Donors
          </Button>
  	    </div>
    );
  }
});

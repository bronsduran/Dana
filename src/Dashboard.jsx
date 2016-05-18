var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');
import { Tabs, Tab, Badge } from 'react-bootstrap';


module.exports = React.createClass({


  loadDataFromAirtable: function() {
    var base = new Airtable({ apiKey: 'keyJoo0QH6ip5yH4S' }).base('appfroa8YN4yjSWIk');
    var donations = [];
    var campaigns = [];
    base('PCRF').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 5,
        view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {

            beneficiaries.push(
              {
                donor_email: record.get('Email'),
                donation_date: record.get('Donation Date'),
                first_name: record.get('First Name'),
                last_name: record.get('Last Name'),
                donation_campaign: record.get('Donation Campaign')
            }
          )
        });
        fetchNextPage();
        this.setState({data: donations})
    }.bind(this),
    function done(error) {
        if (error) {
            console.log(error);
        }
    });
  },

  base('PCRF').select({
      // Selecting the first 3 records in Main View:
      maxRecords: 5,
      view: "Main View"
  }).eachPage(function page(records, fetchNextPage) {

      // This function (`page`) will get called for each page of records.
      records.forEach(function(record) {

          beneficiaries.push(
            {
              donor_email: record.get('Email'),
              donation_date: record.get('Donation Date'),
              first_name: record.get('First Name'),
              last_name: record.get('Last Name'),
              donation_campaign: record.get('Donation Campaign')
          }
        )
      });
      fetchNextPage();
      this.setState({data: donations})
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
    setInterval(this.loadDataFromAirtable, this.props.pollInterval);
  },


  render: function() {
      return(
        <div className="dashboard">
          <Tabs defaultActiveKey={1} justified animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="Stage 1"><BeneficiaryGrid beneficiaries={this.state.data}/> </Tab>
            <Tab eventKey={2} title="Stage 2"><BeneficiaryGrid beneficiaries={this.state.data}/> </Tab>
            <Tab eventKey={3} title="Stage 3"><BeneficiaryGrid beneficiaries={this.state.data}/> </Tab>
            <Tab eventKey={4} title="Stage 4"><BeneficiaryGrid beneficiaries={this.state.data}/> </Tab>
          </Tabs>


  	    </div>
    );
  }
});

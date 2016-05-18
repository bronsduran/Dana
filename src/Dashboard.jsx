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

  handleEmailTemplateOpen() {
    ReactDOM.render(<Email />, document.getElementById('main'));
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

var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');

var base = new Airtable({ apiKey: 'keyJoo0QH6ip5yH4S' }).base('appfroa8YN4yjSWIk');


var records = [];
base('Projects').select({
    // Selecting the first 3 records in Main View:
    maxRecords: 3,
    view: "Main View"
}).eachPage(function page(records, fetchNextPage) {

    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        records.push(record);
        console.log('Retrieved ', record.get('Name'));

    });
    console.log(records);
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(error) {
    if (error) {
        console.log(error);
    }
});

module.exports = React.createClass({


  render: function() {


    var beneficiaries = [
      { id: 0, name: 'Name1', imageUrl: '', description: 'Description1', stage: '0', duration: '1 week'},
      { id: 1, name: 'Name2', imageUrl: '', description: 'Description2', stage: '0', duration: '1 week'},
      { id: 2, name: 'Name3', imageUrl: '', description: 'Description3', stage: '1', duration: '1 week'},
      { id: 3, name: 'Name4', imageUrl: '', description: 'Description4', stage: '2', duration: '1 week'},
      { id: 4, name: 'Name5', imageUrl: '', description: 'Description5', stage: '3', duration: '1 week'},
    ]

      return(
        <div className="dashboard">
  	    	<Navbar />
      		<BeneficiaryGrid beneficiaries={beneficiaries} />
  	    </div>
    );
  }
});

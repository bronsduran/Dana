var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');


module.exports = React.createClass({


  loadCommentsFromServer: function() {
    var base = new Airtable({ apiKey: 'keyJoo0QH6ip5yH4S' }).base('appfroa8YN4yjSWIk');
    var beneficiaries = [];

    base('Projects').select({
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
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },


  render: function() {

    // var beneficiaries = [
    //   { id: 0, name: 'Fatima', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Description1', stage: 'Needs Funding', duration: '1 week'},
    //   { id: 1, name: 'Bronson', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Description2', stage: 'Needs Funding', duration: '1 week'},
    //   { id: 2, name: 'Belce', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Description3', stage: 'Training Recieved', duration: '1 week'},
    //   { id: 3, name: 'Nathan', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Description4', stage: 'Graduated', duration: '1 week'},
    //   { id: 4, name: 'Arushi', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Description5', stage: 'Graduated', duration: '1 week'},
    //   { id: 4, name: 'Stephanie', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Description5', stage: 'Graduated', duration: '1 week'}
    // ]
      return(
        <div className="dashboard">
  	    	<Navbar />
      		<BeneficiaryGrid beneficiaries={this.state.data} />
  	    </div>
    );
  }
});

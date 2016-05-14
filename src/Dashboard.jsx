var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');
var Airtable = require('airtable');


module.exports = React.createClass({


  loadDataFromAirtable: function() {
    var base = new Airtable({ apiKey: 'keyJoo0QH6ip5yH4S' }).base('appfroa8YN4yjSWIk');
    var beneficiaries = [];

    base('UOI').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 100,
        view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {

            beneficiaries.push(
              {
              id: record.get('Id'),
              name: record.get('Name'),
              location: record.get('Location'),
              cost: record.get('Cost'),
              description: record.get('Description'),
              donorList: ['Arushi', 'Bronson', 'Avarna'],
              emailStatus: "Stage 3",
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

   loadData: function() {
    var beneficiaries = [];
  },

  getInitialState: function() {
      

    var data = $.getJSON( "./src/data/uoi.json", function() {
      console.log( "success" );
    })
      .done(function() {
        console.log( "second success" );
      })
      .fail(function() {
        console.log( "error" );
      })
      .always(function() {
        console.log(data);
      });


    return {data: [{
              id: 1,
              name: 'Arushi Jain',
              location: 'Delhi',
              cost: '$10',
              description: 'Middle school student in India',
              donorList: ['Arushi', 'Bronson', 'Avarna'],
              emailStatus: "Stage 3",
              imageUrl: 'NULL'
            }, 

            {
              id: 2,
              name: 'Avarna Jain',
              location: 'Delhi',
              cost: '$10',
              description: 'Middle school student in India',
              donorList: ['Arushi', 'Bronson', 'Avarna'],
              emailStatus: "Stage 3",
              imageUrl: 'NULL'
              }

      ]};


  },

  componentDidMount: function() {
    this.loadData();
    setInterval(this.loadData, this.props.pollInterval);
  },


  render: function() {
      return(
        <div className="dashboard">
        <BeneficiaryGrid beneficiaries={this.state.data}/>

  	    </div>
    );
  }
});

var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');

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

var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');



module.exports = React.createClass({

  render: function() {

    var beneficiaries = [
            { name: 'Name1', description: 'Description1', state: 'needs funding', duration: '1 week'},
            { name: 'Name2', description: 'Description2', state: 'needs funding', duration: '1 week'},
            { name: 'Name3', description: 'Description3', state: 'needs funding', duration: '1 week'},
            { name: 'Name4', description: 'Description4', state: 'needs funding', duration: '1 week'},
            { name: 'Name5', description: 'Description5', state: 'needs funding', duration: '1 week'},
    ]

      return(
        <div className="dashboard">
  	    	<Navbar />
      		<BeneficiaryGrid beneficiaries={beneficiaries} />
  	    </div>
    );
  }
});

var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');
var SearchBar = require('./SearchBar.jsx');



module.exports = React.createClass({

  render: function() {

    var beneficiaries = [
            { id: 0, name: 'Name1', description: 'Description1', stage: 'needs funding', duration: '1 week'},
            { id: 1, name: 'Name2', description: 'Description2', stage: 'needs funding', duration: '1 week'},
            { id: 2, name: 'Name3', description: 'Description3', stage: 'needs funding', duration: '1 week'},
            { id: 3, name: 'Name4', description: 'Description4', stage: 'needs funding', duration: '1 week'},
            { id: 4, name: 'Name5', description: 'Description5', stage: 'needs funding', duration: '1 week'},
    ]

      return(
        <div className="dashboard">
  	    	<Navbar />
      		<BeneficiaryGrid beneficiaries={beneficiaries} />
  	    </div>
    );
  }
});

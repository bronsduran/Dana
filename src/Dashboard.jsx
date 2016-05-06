var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Navbar.jsx');
var BeneficiaryGrid = require('./BeneficiaryGrid.jsx');

module.exports = React.createClass({

  render: function() {

      return(
        <div className="dashboard">

  	    	<Navbar />

      		<BeneficiaryGrid />


  	    </div>
    );
  }
});

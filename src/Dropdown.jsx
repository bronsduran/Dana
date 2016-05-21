var React = require('react');
var ReactDOM = require('react-dom');
import { Grid, Row, Col , Modal, Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

module.exports = React.createClass({

    render() {

    var options_values = ["Needs Funding", "Training", "Seedfunding", "Graduation" ];
    var options = [];

    options_values.forEach(function(option) {
        options.push(
          	<MenuItem eventKey="1">{option}</MenuItem>
          );
        });

      return (
		  <ButtonGroup>
		    <Button>See Donor List</Button>
		    <Button>See Beneficiary List</Button>
		    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
		    	{options}
		    </DropdownButton>
		  </ButtonGroup>
      );
    }
  });

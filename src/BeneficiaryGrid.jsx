var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var BeneficiaryCell = require('./BeneficiaryCell.jsx');


module.exports = React.createClass({

  render: function() {
    var rows = [];
    this.props.beneficiaries.forEach(function(beneficiary) {
        rows.push(
          <Col xs={12} md={3}>
            <BeneficiaryCell name={beneficiary.name} stage={beneficiary.stage}/>
          </Col>
          );
        });
    return (
      <Grid>
        <Row>
          {rows}
        </Row>
      </Grid>
    );
  }
});

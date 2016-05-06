var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var BeneficiaryCell = require('./BeneficiaryCell.jsx');



module.exports = React.createClass({


  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <BeneficiaryCell data={this.props.data} />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
          <Col xs={12} md={3}>
            <BeneficiaryCell />
          </Col>
        </Row>
      </Grid>
    );
  }
});

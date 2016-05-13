var React = require('react');
var ReactDOM = require('react-dom');
import { Grid, Row, Col } from 'react-bootstrap'
var BeneficiaryCell = require('./BeneficiaryCell.jsx');


module.exports = React.createClass({

  render: function() {
    var rows = [];
  //  console.log('this.props =', this.props);
    this.props.beneficiaries.forEach(function(beneficiary) {
        rows.push(
          <Col xs={12} md={3}>
            <BeneficiaryCell beneficiary={beneficiary} name={beneficiary.name} stage={beneficiary.stage} img={beneficiary.imageUrl} key={beneficiary.id}/>
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

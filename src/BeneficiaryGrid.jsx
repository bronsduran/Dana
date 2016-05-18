var React = require('react');
var ReactDOM = require('react-dom');
import { Button, Grid, Row, Col } from 'react-bootstrap'
var BeneficiaryCell = require('./BeneficiaryCell.jsx');
var Email = require('./Email.jsx');
var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};
module.exports = React.createClass({

  handleEmailTemplateOpen() {
    ReactDOM.render(<Email />, document.getElementById('main'));
  },

  render: function() {
    var rows = [];
    this.props.beneficiaries.forEach(function(beneficiary) {
        rows.push(
          <Col xs={12} md={3}>
            <BeneficiaryCell beneficiary={beneficiary} name={beneficiary.name} stage={beneficiary.stage} img={beneficiary.imageUrl} key={beneficiary.id}/>
          </Col>
          );
        });

    return (
      <div style={{
        paddingTop: '10px'

      }}>
        <Grid>
          <Row>
            {rows}
          </Row>
        </Grid>
        <Button
          style={rightButtonStyle}
          onClick={this.handleEmailTemplateOpen}
          bsStyle="primary"
          bsSize="large">Update Donors
        </Button>
      </div>
    );
  }
});

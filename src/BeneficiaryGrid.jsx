var React = require('react');
var ReactDOM = require('react-dom');
import { Button, Grid, Row, Col, Clearfix } from 'react-bootstrap'
var BeneficiaryCell = require('./BeneficiaryCell.jsx');
var Email = require('./Email.jsx');

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};


module.exports = React.createClass({

  handleEmailTemplateOpen() {
    ReactDOM.render(<Email emailKey={this.props.stageKey}/>, document.getElementById('main'));
  },

  render: function() {

    console.log("campaigns",this.props.campaigns);
    console.log("Key", this.props.thing);
    var rows = [];
    var keys = Object.keys(this.props.campaigns);
    for (var key in keys){
      var campaign = this.props.campaigns[keys[key]];
      var donor = this.props.donors[keys[key]];
        if (campaign.campaign_stage == this.props.stageKey) {
          rows.push(
            <Col xs={12} md={3}>
              <BeneficiaryCell
                campaign={campaign}
                name={campaign.campaign_name}
                donation_amount={campaign.donation_amount}
                donation_grand_total={campaign.donation_grand_total}
                status={campaign.campaign_stage}
                img={campaign.imageUrl}
                campaign_goal={campaign.campaign_goal}
                stage={campaign.campaign_stage}
                />
            </Col>
        );
      }
    }

    return (
      <div style={{
        paddingTop: '10px'

      }}>
        <Clearfix>
          <Grid>
            <Row>
              {rows}
            </Row>
          </Grid>
        </Clearfix>
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

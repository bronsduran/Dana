var React = require('react');
var ReactDOM = require('react-dom');
import { Button, Grid, Row, Col, Clearfix } from 'react-bootstrap'
import { AutoAffix } from 'react-overlays'
var BeneficiaryCell = require('./BeneficiaryCell.jsx');
var Email = require('./Email.jsx');

var gridStyle = {
  clear: 'left'
};

var rowStyle = {
  display:'flex',
  flexWrap: 'wrap'
}
var buttonStyle = {

}

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};


var stageMap = {
  1: "Transportation to Treatment Location",
  2: "Surgery Completed",
  3: "Recovery Period",
  4: "Treatment Completed"
}

module.exports = React.createClass({

  handleEmailTemplateOpen() {
    ReactDOM.render(<Email emailKey={this.props.stageKey} campaigns={this.props.campaigns}  donors={this.props.donors}/>, document.getElementById('main'));
  },

  render: function() {
    var rows = [];
    var keys = Object.keys(this.props.campaigns);
    for (var key in keys){
      var campaign = this.props.campaigns[keys[key]];
      var donor = this.props.donors[keys[key]];
        if (campaign.campaign_stage == stageMap[this.props.stageKey]) {
          rows.push(
            <Col xs={12} md={3}>
              <BeneficiaryCell
                campaign={campaign}
                name={campaign.campaign_name}
                stage={campaign.campaign_stage}
                img={campaign.campaign_photo}
                treatment={campaign.campaign_treatment}
                condition={campaign.campaign_condition}
                location={campaign.campaign_location}
                />
            </Col>
        );
      }
    }


    return (
      <div style={{
        paddingTop: '10px'

      }}>
       <Button
        style={rightButtonStyle}
        onClick={this.handleEmailTemplateOpen}
        bsStyle="primary"
        bsSize="large">Update Donors
      </Button>
          <Grid className="container-fluid" style={gridStyle}>
            <Row style={rowStyle}>
              {rows}
            </Row>
          </Grid>
      </div>
    );
  }
});

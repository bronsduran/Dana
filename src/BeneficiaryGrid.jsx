
var React = require('react');
var ReactDOM = require('react-dom');
import { Button, Grid, Row, Col } from 'react-bootstrap'
var BeneficiaryCell = require('./BeneficiaryCell.jsx');

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};

var cellStyling = {
  height: '200px !important'
}

module.exports = React.createClass({
  render: function() {
    var rows = [];
    var keys = Object.keys(this.props.campaigns);
    console.log("KEYS", keys)
    for (var key in keys){
      var campaign = this.props.campaigns[keys[key]];
      var donor = this.props.donors[keys[key]];
      console.log(key)
        if ((rows.length + 1) % 4 == 0){
          rows.push(
            <div className="row">
            <Col xs={12} md={3}>
              <BeneficiaryCell style={cellStyling}
                campaign={campaign}
                name={campaign.campaign_name}
                donation_amount={campaign.donation_amount}
                donation_grand_total={campaign.donation_grand_total}
                status={campaign.campaign_status}
                img={campaign.imageUrl}
                campaign_goal={campaign.campaign_goal}
                stage={Math.floor((Math.random() * 4) + 1)}
                />
          </Col>
          </div>
        );
        } else {
          rows.push(
            <Col xs={12} md={3}>
              <BeneficiaryCell style={cellStyling}
                campaign={campaign}
                name={campaign.campaign_name}
                donation_amount={campaign.donation_amount}
                donation_grand_total={campaign.donation_grand_total}
                status={campaign.campaign_status}
                img={campaign.imageUrl}
                campaign_goal={campaign.campaign_goal}
                stage={Math.floor((Math.random() * 4) + 1)}
                />
            </Col>
          )
        }
    }

    // this.props.campaigns.forEach(function(campaign) {
    //     rows.push(
    //       <Col xs={12} md={3}>
    //       {/*<BeneficiaryCell beneficiary={beneficiary} name={beneficiary.name} stage={beneficiary.stage} img={beneficiary.imageUrl} key={beneficiary.id}/>*/}
    //       <BeneficiaryCell beneficiary={campaign} name={campaign.campaign_name} stage={campaign.campaign_status} img={campaign.imageUrl} key={campaign.campaign_goal}/>
    //       </Col>
    //       );
    //     });

      //   for (var key in this.props.donors.keys()){
      //     console.log(Object.keys(this.props.donors));
      //   }
      //   console.log(this.props.donors);


    return (
      <div style={{
        paddingTop: '10px'

      }}>
        <Grid>
          <Row>
            {rows}
          </Row>
        </Grid>
      </div>
    );
  }
});

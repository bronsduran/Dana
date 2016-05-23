var React = require('react');
import {Grid, Row, Col, ButtonToolbar, Button, Checkbox, Thumbnail, PageHeader, Panel} from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var ReactDOM = require('react-dom');
var EmailTemplate = require('./EmailTemplate.jsx');
var Navbar = require('./Navbar.jsx');
var DonorTable = require('./DonorTable.jsx');
var Airtable = require('airtable');
var leftButtonStyle = {
  display: 'inline',
  marginRight: '30px'
};

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




  render: function() {

    var StageDonors = {};

    console.log("donors: ", this.props.donors);
    console.log("Beneficiaries: ", this.props.campaigns);

    var DonorsObject = this.props.donors;
    var BeneficiariesObject = this.props.campaigns;
    var stage = this.props.emailKey;

    var BeneficiaryKeys = Object.keys(this.props.campaigns);
    var DonorKeys = Object.keys(this.props.donors);

    BeneficiaryKeys.forEach(function(Bkey) {
      console.log("Bkey", Bkey);
      var Beneficiary = BeneficiariesObject[Bkey];
      console.log("Beneficiary", Beneficiary);

    })




    var variables = [];
    var donorsData = [];
    var keys = Object.keys(this.props.campaigns);
    console.log("keys", keys)
    var count = 0;
    var campaign_keys;
    for (var key in keys){
      var campaign = this.props.campaigns[keys[key]];
      campaign_keys = Object.keys(campaign);
    }
    keys = Object.keys(this.props.donors);
    //  console.log("keys", keys);
    var donor_keys;
    for (var key in keys){
      //console.log("keys[key]", keys[key]);
      var donor = this.props.donors[keys[key]];
    //  console.log("donor", donor);
      donor_keys = Object.keys(donor);
    }

    var html_variables = [];

    var donorsData = ['arushij@stanford.edu', 'bduran@stanford.edu', 'belce@stanford.edu', 'arushij@stanford.edu', 'bduran@stanford.edu', 'belce@stanford.edu']
    var donors = []
    //  console.log('this.props =', this.props);
      donorsData.forEach(function(donor) {
          donors.push(
              <Checkbox checked inline>
                {donor}
              </Checkbox>
            );
          });


      campaign_keys.forEach(function(key) {
          html_variables.push(
              <h6>
                [{key}]
              </h6>
            );
          });

          donor_keys.forEach(function(key) {
              html_variables.push(
                  <h6>
                    [{key}]
                  </h6>
                );
              });

      return(
        <div>
          <Grid>
          <PageHeader> <small> Email Creation </small> </PageHeader>
          <h5> In the text box below, we have provided a email template based upon the stage of the beneficiaries selected.</h5>
          <h5> You are currently in <b> Stage {this.props.emailKey} </b></h5>
          <h5> Any text inside [ ] will be replced with the correct information when the email is sent </h5>
          <h5> The available replacement options are located below. </h5>
            <Row>
              <Col xs={12} md={9} >
                <PageHeader> <small> Email Template </small> </PageHeader>
                <Panel>
                  <EmailTemplate emailKey={this.props.emailKey}  campaigns={this.props.campaigns} donors={this.props.donors}/>
                </Panel>
              </Col>

              <Col xs={12} md={3} >
                  <PageHeader> <small> Variable Options </small> </PageHeader>
                    {html_variables}
                  <DonorTable donors={donors} />
              </Col>
            </Row>
          </Grid>
        </div>

      );
    }
  });

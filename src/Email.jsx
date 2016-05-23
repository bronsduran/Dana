var React = require('react');
import {Grid, Row, Col, ButtonToolbar, Button, Checkbox, Thumbnail, PageHeader, Panel} from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var ReactDOM = require('react-dom');
var EmailTemplate = require('./EmailTemplate.jsx');
var Navbar = require('./Navbar.jsx');
var DonorSidebar = require('./DonorSidebar.jsx');
var leftButtonStyle = {
  display: 'inline',
  marginRight: '30px'
};

var rightButtonStyle = {
  display: 'inline',
  marginLeft: '30px'

};


module.exports = React.createClass({

  render: function() {

    var variables = [];
    var donorsData = [];
    var keys = Object.keys(this.props.campaigns);
    var count = 0;
    var campaign_keys;
    for (var key in keys){
      var campaign = this.props.campaigns[keys[key]];
      campaign_keys = Object.keys(campaign);
    }
    keys = Object.keys(this.props.donors);
    var donor_keys;
    for (var key in keys){
      var donor = this.props.donors[keys[key]];
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
            <Row>
              <Col xs={12} md={9} >
                <PageHeader> Email Preview</PageHeader>
                <h5> In the text box below, we have provided a email template based upon the stage of the beneficiaries selected.</h5>
                <h5> You are currently in <b> Stage {this.props.emailKey} </b></h5>
                <h5> Any text inside [ ] tags is a  variable that will be rendered based upon the donor who is emailed. </h5>
                <h5> The following variables are available for insertion in this email: </h5>
                {html_variables}
                <Panel>
                  <EmailTemplate emailKey={this.props.emailKey}  campaigns={this.props.campaigns} donors={this.props.donors}/>
                </Panel>
              </Col>
              <Col xs={12} md={3} >
                <DonorSidebar donors={donors} />
              </Col>
            </Row>
          </Grid>
        </div>

      );
    }
  });

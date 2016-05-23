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

    var donorsData = []
    var keys = Object.keys(this.props.campaigns);
    var count = 0;
    for (var key in keys){
      var campaign = this.props.campaigns[keys[key]];
      if (campaign.campaign_stage == this.props.stageKey){
          var donor = this.props.donors[keys[key]];
          count += 1;
          console.log('Donor is :')
          console.log(donor)
          if (this.props.donors[keys[key]] != undefined){
            donorsData.push(donor);
            console.log("pushed donor data")
        }
      }
    }
    console.log("number of donors in the current campaigns")
    console.log(count)


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
      console.log("emailKey", this.props.emailKey);
      return(
        <div>
          <Grid>
            <Row>
              <Col xs={12} md={9} >
                <PageHeader> Email Preview</PageHeader>

                <Panel>
                  <EmailTemplate emailKey={this.props.emailKey} />
                </Panel>
              </Col>

            </Row>
          </Grid>
        </div>

      );
    }
  });

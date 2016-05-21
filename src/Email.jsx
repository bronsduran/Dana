<<<<<<< HEAD
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

      return(
        <div>
          <Grid>
            <Row>
              <Col xs={12} md={9} >
                <PageHeader><small> Email Preview </small></PageHeader>
                <Panel>
                  <EmailTemplate />
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

var React = require('react');
import {Col, ButtonToolbar, Button, Checkbox, Thumbnail, PageHeader, Panel} from 'react-bootstrap'
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
              <Checkbox inline>
                {donor}
              </Checkbox>
            );
          });

      return(
        <div>
          <div className="row">
            <Col xs={12} >
              <PageHeader><small> Email Preview </small></PageHeader>
            </Col>
          </div>
          <div className="row" >
            <Col xs={12} md={10} >
              <Panel>
                <EmailTemplate />
              </Panel>
            </Col>
            <Col xs={12} md={2} >
              <DonorSidebar donors={donors} />
            </Col>
          </div>
        </div>


      );
    }
  });

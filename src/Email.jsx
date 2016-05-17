var React = require('react');
import {Col, ButtonToolbar, Button, Checkbox} from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var ReactDOM = require('react-dom');
var EmailTemplate = require('./EmailTemplate.jsx');
var Navbar = require('./Navbar.jsx');
var DonorSidebar = require('./DonorSidebar.jsx')
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
    for (var donor in donorsData) {
        donors.push(
          <li>
            <Checkbox inline onChange={console.log(this)} className={donor}>
              {donorsData[donor]}
            </Checkbox>
            </li>
          );
      }


      return(
        <div className="row" >
          <Col xs={12} md={10} >
            <EmailTemplate />
          </Col>
          <Col xs={12} md={2} >
            <ul>
              <DonorSidebar donors={donors} />
            </ul>

          </Col>
        </div>

      )
    }
  });

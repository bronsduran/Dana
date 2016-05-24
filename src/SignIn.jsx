var React = require('react');
var ReactDOM = require('react-dom');
import { Button, Grid, Row, Col, Clearfix, Panel, Form, FormGroup, Checkbox, ControlLabel, FormControl } from 'react-bootstrap'
var Home = require('./Home.jsx');

var style = {
  width: '50%',
  margin: 'auto',
  position: 'absolute',
  top: '35%',
  left: '0',
  bottom: '0',
  right: '0',
  textAlign: 'center'
};

var titleStyle = {
  width: '50%',
  margin: 'auto',
  position: 'absolute',
  top: '15%',
  left: '0',
  bottom: '0',
  right: '0',
  textAlign: 'center',
  textColor: 'dark-grey'
};

var title = {
  color: 'dark-grey'
};

var ButtonStyle = {
  paddingRight: '10px',
  marginRight: '10px'
};

var loginStyle = {
  backgroundColor: "#86A0BE"
};

module.exports = React.createClass({

  handleDashboardOpen() {
    ReactDOM.render(<Home />, document.getElementById('container'));
  },

  render() {
    return (
      <div style={loginStyle}>
        <div style={titleStyle}>
            <h1 style={title}> DANA </h1>
        </div>

        <div style={style}>
          <Panel header="User Login" bsStyle="primary">
            <p></p>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col className="center-align" >
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col className="center-align">
                  <Button onClick={this.handleDashboardOpen} ButtonStyle={ButtonStyle}>
                    Sign in
                  </Button>
                  <Button >
                    Sign Up
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel>

        </div>
      </div>
    );
  }
});

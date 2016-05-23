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
  textAlign: 'center'
}



module.exports = React.createClass({

  handleDashboardOpen() {
    ReactDOM.render(<Home />, document.getElementById('container'));
  },

  render() {
    return (
      <div>
        <div style={titleStyle}>
          <h1>
            Dana
          </h1>
        </div>

        <div style={style}>
          <Panel>
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
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={this.handleDashboardOpen}>
                    Sign in
                  </Button>
                  <Button justified >
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

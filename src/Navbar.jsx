var React = require('react');
var ReactBootstrap = require('react-bootstrap');
import { Navbar, Nav, NavItem, NavDropdown, Button, MenuItem } from 'react-bootstrap'

/*
 *  ========================== Navbar ==========================
 */

var headerStyle = {
  position: 'absolute',
  left: '46%',
  display: 'block',
  width: 'auto',
  'textAlign': 'center',
  fontSize: '25px'
};


module.exports = React.createClass({

  render() {
    return (
      <div>
        <Navbar>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" style={headerStyle}>DANA</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav pullRight>
            <NavDropdown>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }

});

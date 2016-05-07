var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var Button = require('react-bootstrap').Button;
var MenuItem = require('react-bootstrap').MenuItem;
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
          <NavDropdown>
            <MenuItem> Add Program</MenuItem>
          </NavDropdown>

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

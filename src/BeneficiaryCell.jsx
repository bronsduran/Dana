var React = require('react');
var ReactDOM = require('react-dom');
var Thumbnail = require('react-bootstrap').Thumbnail;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var Popover = require('react-bootstrap').Popover;
var Tooltip = require('react-bootstrap').Tooltip;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var EmailTemplate = require('./emailTemplate.jsx');

module.exports = React.createClass({

    getInitialState() {
      return { showModal: false };
    },

    close() {
      this.setState({ showModal: false });
    },

    open() {
      this.setState({ showModal: true });
    },

    render() {
      let popover = <Popover title="popover">very popover. such engagement</Popover>;
      let tooltip = <Tooltip>wow.</Tooltip>;

      return (
        <div>
          <Thumbnail src='/assets/stageOneImage.png' alt="242x200">
            <h3>
              {this.props.name}
            </h3>
            <Button bsStyle="primary" onClick={this.open}>
              Update Donors
            </Button>
          </Thumbnail>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title> Email Preview </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EmailTemplate />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button bsStyle="primary"> Send </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  });

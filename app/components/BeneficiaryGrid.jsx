var React = require('react');
var ReactDOM = require('react-dom');
import { Grid, Row, Col , Modal, Button} from 'react-bootstrap'
var BeneficiaryCell = require('./BeneficiaryCell.jsx');
var EmailTemplate = require('./emailTemplate.jsx');
var EmailEditable = require('./EmailEditable.jsx');
var EmailModal = require('./EmailModal.jsx');
var Dropdown = require('./Dropdown.jsx');


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



  render: function() {
    var rows = [];
  //  console.log('this.props =', this.props);

    this.props.beneficiaries.forEach(function(beneficiary) {
        rows.push(
          <Col xs={12} md={3}>
            <BeneficiaryCell beneficiary={beneficiary} name={beneficiary.name} stage={beneficiary.stage} donorList={beneficiary.donorList} emailStatus={beneficiary.emailStatus} img={beneficiary.imageUrl} key={beneficiary.id}/>
          </Col>
          );
        });

    return (

      <div>
      <Grid>
      
        <Dropdown />

        <h1> "Donors to be updated in the coming week" </h1>
        <Row>
          {rows}
        </Row>
      
        <Button bsStyle="primary" onClick={this.open}>
          Email Donors
        </Button>


        <h1> All Donors</h1>

        <Row>
          {rows}
        </Row>


        <Modal show={this.state.showModal} onHide={this.close}>
        <input type="text" />
            <Modal.Header closeButton>
              <Modal.Title> Email Preview </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EmailEditable />

              <EmailTemplate name={this.props.name}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button bsStyle="primary"> Send </Button>
            </Modal.Footer>
          </Modal>

      </Grid>
      </div>

       
    );
  }
});

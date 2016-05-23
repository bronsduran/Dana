var React = require('react');
import {Col, ButtonToolbar, Button, Thumbnail, Panel, PageHeader} from 'react-bootstrap'
var ReactDOM = require('react-dom');



var ButtonStyle = {

};


var style = {
  width: '100%',
  height: 'Auto'
};

module.exports = React.createClass({

  render: function() {
      return(

        <div className="donorList">
          <PageHeader><small> Donors </small></PageHeader>
            <Col xs={12}>
              {this.props.donors}
            </Col>
            <Button justified
              style={ButtonStyle}
              bsStyle="primary"
              bsSize="small">Send Email
            </Button>

        </div>
      );
    }
  });

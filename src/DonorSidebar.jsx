var React = require('react');
import {ButtonToolbar, Button, Thumbnail, Panel, PageHeader} from 'react-bootstrap'
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
          <Thumbnail style={style}>
              {this.props.donors}
            <Button justified
              style={ButtonStyle}
              bsStyle="primary"
              bsSize="small">Preview Email
            </Button>
            <Button justified
              style={ButtonStyle}
              bsStyle="primary"
              bsSize="small">Send Email
            </Button>
          </Thumbnail>
        </div>
      );
    }
  });

var React = require('react');
var ReactDOM = require('react-dom');
import { Jumbotron } from 'react-bootstrap'

var style = {
  backgroundImage: 'url(' + '/src/assets/PCRF_Logo.jpg' + ')',
  paddingBottom: '30px',
};


module.exports = React.createClass({
  render: function() {

    return (
      <Jumbotron style={style} responsive>

      </Jumbotron>
    )
  }
});

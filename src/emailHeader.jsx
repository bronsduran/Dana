var React = require('react');
var ReactDOM = require('react-dom');
import { Jumbotron } from 'react-bootstrap'



module.exports = React.createClass({
  render: function() {
    var style = {
      backgroundImage: 'url(' + '/src/assets/PCRF_Logo.jpg' + ')',
    };
    return (
      <Jumbotron style={style}>

      </Jumbotron>
    )
  }
});

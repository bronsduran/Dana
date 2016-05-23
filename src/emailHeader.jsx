var React = require('react');
var ReactDOM = require('react-dom');
import { Jumbotron } from 'react-bootstrap'

var style = {
  backgroundImage: 'url(' + '/src/assets/PCRF_Logo1.jpg' + ')',
  "min-height": "300px",
  "background-size": "cover",
};

module.exports = React.createClass({
  render: function() {

    return (
      <Jumbotron style={style} responsive>

      </Jumbotron>
    )
  }
});

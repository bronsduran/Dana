var React = require('react');
var ReactDOM = require('react-dom');
import { Jumbotron } from 'react-bootstrap'



module.exports = React.createClass({
  render: function() {
    var style = {
      'backgroundImage': 'url(' + './assets/thankYouHeader.jpg' + ')'
    };
    return (
      <Jumbotron style={style}>
        <h1>
          Your beneficary is now a the next stage!
        </h1>

      </Jumbotron>
    )
  }
});

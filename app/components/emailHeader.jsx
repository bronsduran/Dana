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
          Thank You!
        </h1>
        <p>
            Your $20 gets us one step closer to reaching the $500 needed to help start a small business!
        </p>
      </Jumbotron>
    )
  }
});

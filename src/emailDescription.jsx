var React = require('react');
var ReactDOM = require('react-dom');


module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h5>
          {this.props.uoi_name} is now at {this.props.stage}!

          Thank you for your support :)
          
        </h5>
      </div>
    );
  }
});

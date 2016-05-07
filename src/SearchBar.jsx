var React = require('react');
var ReactDOM = require('react-dom');



module.exports = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..."  />
        <p>
          <input type="checkbox"  />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});

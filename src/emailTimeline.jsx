var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'

var style = {
  width: '25%',
  display: 'inline-block'
};

module.exports = React.createClass({

  render: function() {
    var cells = [];
    this.props.stages.forEach(function(stage) {
        cells.push(
          <Thumbnail src={stage.imageUrl} alt="242x200" style={style}>
            <h5> {stage.name} </h5>
            <h4> {stage.description} </h4>
          </Thumbnail>
        );
      });

    return (
      <div>
        {cells}
      </div>
    );
  }
});

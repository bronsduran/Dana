var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron, Panel } from 'react-bootstrap'

var style = {
  width: '25%',
  display: 'inline-block',
  height: '250px',
  margin: 'auto',
};
var timelineStyle = {
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px'
}
module.exports = React.createClass({

  render: function() {
    var cells = [];
    this.props.stages.forEach(function(stage) {
        cells.push(
          <Panel header={stage.description} style={style}>
            <p> Test </p>
          </Panel>
        );
      });

    return (
      <div style={timelineStyle}>
        {cells}
      </div>
    );
  }
});

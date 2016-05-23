var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron, Panel } from 'react-bootstrap'

var style = {
  width: '100%',
  display: 'inline-block',
  height: '200px',
  float: 'bottom',
  padding: '20px'
};
var timelineStyle = {
  textAlign: 'center',
};


module.exports = React.createClass({

  render: function() {
    var cells = [];
    var emailKey = this.props.emailKey;
    this.props.stages.forEach(function(stage) {
      if(stage.id < emailKey){
        cells.push(
          <Col xs={12} md={3}>
          <Thumbnail src="src/assets/checkmark.png" alt="242x200" style={style}>
            <h5> {stage.description} </h5>

          </Thumbnail>
          <p> {stage.description_detail}</p>
          </Col>

        );
      } else{
        cells.push(
          <Col xs={12} md={3}>
          <Thumbnail src="src/assets/waiting.png" alt="242x200" style={style}>
            <h5> {stage.description} </h5>
          </Thumbnail>
          <p> {stage.description_detail}</p>
          </Col>

        );

      }


      });

    return (
      <div className="row" style={timelineStyle}>
        {cells}
      </div>
    );
  }
});

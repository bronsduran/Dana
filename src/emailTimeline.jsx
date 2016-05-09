var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'

module.exports = React.createClass({

  render: function() {
    var cells = [];
    this.props.stages.forEach(function(stage) {
        cells.push(
          <Col xs={3} md={3}>
            <Thumbnail src='' alt="242x200">
              <h5> {stage.name} </h5>
              <h4> {stage.description} </h4>
            </Thumbnail>
          </Col>
        );
      });

    return (
      <div>
        <Grid>
          <Row>
            {cells}
          </Row>
        </Grid>
      </div>
    );
  }
});

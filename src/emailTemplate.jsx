var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Thumbnail = require('react-bootstrap').Thumbnail;
var Jumbotron = require('react-bootstrap').Jumbotron;




var TimelineCell = React.createClass({
  render: function() {
    return (
      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      </Thumbnail>
    );
  }
});

var TimeLine = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <TimelineCell />
          </Col>
          <Col xs={12} md={3}>
            <TimelineCell />
          </Col>
          <Col xs={12} md={3}>
            <TimelineCell />
          </Col>
          <Col xs={12} md={3}>
            <TimelineCell />
          </Col>
        </Row>
      </Grid>
    );
  }
});

var Description = React.createClass({
  render: function() {
    return (
      <h5>
        Once your project is fully funded, you’ll recieve updates as your small business is formed and reaches the milestones below. Share on social media to get your buisiness off the ground quicker!
      </h5>
    );
  }
});

var JumboTron = React.createClass({
  render: function() {
    return (
      <Jumbotron>
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

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <JumboTron />
        <Description  />
        <TimeLine />
      </div>
    );
  }
});

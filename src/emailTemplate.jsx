var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Thumbnail = require('react-bootstrap').Thumbnail;
var Jumbotron = require('react-bootstrap').Jumbotron;



var TimeLine = React.createClass({
  render: function() {
    return (
      <div>
        <Thumbnail src="Dana/src/assets/thumbnaildiv.png" alt="242x200">
          <h4> Stage One: </h4>
          <h3> Project Funded </h3>
          <p>Description</p>
        </Thumbnail>
        <Thumbnail src="Dana/src/assets/thumbnaildiv.png" alt="242x200">
          <h3> Stage Two </h3>
          <p>Description</p>
        </Thumbnail>
        <Thumbnail src="Dana/src/assets/thumbnaildiv.png" alt="242x200">
          <h3> Stage Three </h3>
          <p> Description </p>
        </Thumbnail>
        <Thumbnail src="Dana/src/assets/thumbnaildiv.png" alt="242x200">
          <h3> Stage Four </h3>
          <p> Description </p>
        </Thumbnail>
      </div>
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

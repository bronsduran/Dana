var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'



var TimeLine = React.createClass({
  render: function() {
    return (
      <div>
        <Thumbnail src="Dana/src/assets/stageOneImage.png" alt="242x200">
          <h4> Stage One: </h4>
          <h3> Project Funded </h3>
        </Thumbnail>
        <Thumbnail src="./assets/stageTwoImage.png" alt="242x200">
          <h4> Stage Two: </h4>
          <h3> Training Recieved </h3>
        </Thumbnail>
        <Thumbnail src="./assets/stageThreeImage.png" alt="242x200">
          <h4> Stage Three: </h4>
          <h3> Business Formed </h3>
        </Thumbnail>
        <Thumbnail src="./assets/thumbnaildiv.png" alt="242x200">
          <h4> Stage Four: </h4>
          <h3> Graduation </h3>
        </Thumbnail>
      </div>
    );
  }
});

var Description = React.createClass({
  render: function() {
    return (
      <div>
      <h5>
        Once your project is fully funded, you’ll recieve updates as your small business is formed and reaches the milestones below. Share on social media to get your buisiness off the ground quicker!
      </h5>
      <h4>
        {name}
      </h4>
      </div>
    );
  }
});

var JumboTron = React.createClass({
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

module.exports = React.createClass({
  render: function() {

    return (
      <div>
        <JumboTron />
        <Description  name={this.props.name}/>
        <TimeLine />
      </div>
    );
  }
});

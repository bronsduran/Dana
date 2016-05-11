var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'
var TimeLine = require('./emailTimeline.jsx');
var Description = require('./emailDescription.jsx');
var Header = require('./emailHeader.jsx');

module.exports = React.createClass({


  render: function() {

    var stages = [
      {id: 0, name: 'Stage One', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Project Started', headerMessage: ''},
      {id: 1, name: 'Stage Two', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Training Recieved', headerMessage: ''},
      {id: 2, name: 'Stage Three', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Seed Funding', headerMessage: ''},
      {id: 3, name: 'Stage Four', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Graduation', headerMessage: ''},
    ]


    return (
      <div>
        <Header stages={stages}/>
        <Description  name={this.props.name}/>
        <TimeLine stages={stages}/>
      </div>
    );
  }
});

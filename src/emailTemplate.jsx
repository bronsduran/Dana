var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'
var TimeLine = require('./emailTimeline.jsx');
var Description = require('./emailDescription.jsx');
var Header = require('./emailHeader.jsx');
var NextSteps = require('./NextSteps.jsx');

module.exports = React.createClass({


  render: function() {

    var stages = [
      {id: 0, name: 'Stage One', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Project Started', headerMessage: ''},
      {id: 1, name: 'Stage Two', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Training Recieved', headerMessage: ''},
      {id: 2, name: 'Stage Three', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Seed Funding', headerMessage: ''},
      {id: 3, name: 'Stage Four', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Graduation', headerMessage: ''},
    ]


    return (
      <div className="container text-center">
        <Header stages={stages}/>
        <Description  uoi_name={this.props.uoi_name} uoi_stage={this.props.uoi_stage}/>
        <TimeLine stages={stages}/>
        <NextSteps />
      </div>
    );
  }
});

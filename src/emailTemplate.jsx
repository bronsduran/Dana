var React = require('react');
var ReactDOM = require('react-dom');
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'
var TimeLine = require('./emailTimeline.jsx');
var Description = require('./emailDescription.jsx');
var Header = require('./emailHeader.jsx');
var NextSteps = require('./NextSteps.jsx');


var style = {
  width: 'auto'
}
var descriptionStyle = {
  textAlign: 'left'
}

module.exports = React.createClass({

  render: function() {

    var stages = [
      {id: 0, name: 'Stage One', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Transportation to Treatment Location', description_detail: 'has arrived to the country where the treatment will take place. Staying with one of our local chapters, our beneficiary is assigned to a doctor who is specialized in his/her specific treatment needs.'},
      {id: 1, name: 'Stage Two', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Surgery Completed', description_detail: 'Our beneficiary received treatment by the doctors in the local hospital. He/She is scheduled to have follow-up meetings while staying in the hospital. The doctors will decide whether additional surgery is needed.'},
      {id: 2, name: 'Stage Three', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Recovery Period', description_detail: 'Our beneficiary is staying with our local hosting chapter throughout the whole recovery period. He/She is scheduled to meet with a doctor periodically for post-operation evaluations.'},
      {id: 3, name: 'Stage Four', imageUrl: 'https://dl.airtable.com/4SuqFLRCSrqAkkw8d6lm_stageOneImage.png', description: 'Treatment Completed', description_detail: 'Our beneficiary is fully recovered and is on his/her way home! We know that the family is looking forward to seeing him/her again!'},
    ]


    return (
      <div className="container" style={style}>
        <Header stages={stages}/>
        <Description  uoi_name="name" uoi_stage="stage" style={descriptionStyle}  campaigns={this.props.campaigns} donors={this.props.donors} emailKey={this.props.emailKey}/>
        <TimeLine stages={stages} emailKey={this.props.emailKey} />
        <NextSteps />
      </div>
    );
  }
});

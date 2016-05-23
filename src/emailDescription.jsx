var React = require('react');
var ReactDOM = require('react-dom');
import {Editor, EditorState, ContentState} from 'draft-js';
var Airtable = require('airtable');
import { Button, Grid, Row, Col, PageHeader } from 'react-bootstrap'

var style = {
  "border": "1px solid light-grey",
  "paddingBottom": "20px",
  "borderRadius": '10'
};

var ButtonStyle = {
  display: 'right',
  float: 'right',
  marginBottom: '10px',
  borderRadius: '30'
}


module.exports = React.createClass({

  getInitialState : function(){
    var contentObj = {};
    contentObj[0] = "Hello [donor_first_name], \n\nYour donation to PCRF has helped change [campaign_name]’s life. \n\n[campaign_name] is [age] years old and from [home_location]. [campaign_name] has a condition of [campaign_condition]." +
         " We only hope to correct this problem is surgery at an advanced children’s hospital outside of [treatment_location]. The PCRF has arranged a treatment for the beneficiary's treatment in [treatment_location]. \n\n"  +
         " [campaign_name] is now preparing to travel to [treatment location] with [campaign_name]’s [family_member]. Once reached the destination, they will be hosted by our [hosting_chapter] chapter until the operation. \n\n[campaign_name] has a long journey ahead, but is surrounded by the support of the [hosting_chapter] PCRF community." +
         " \n\nThank you so much for helping to change [campaign_name]’s life. [campaign_name] and [campaign_name]’s family will be eternally grateful for your support." +
         "\n\nThank You, \nSteve Sosebee \nPresident & CEO \nThe Palestine Children's Relief Fund \nwww.pcrf.net";

    contentObj[1] = "Hello [donor_first_name], \n\nDo you remember [campaign_name]?\n\n[campaign_name] is [age] years old and from [home_location]. [campaign_name] has a condition of [campaign_condition]." +
         " [campaign_name]’s condition was, unfortunately, not treatable in [home_location]. Therefore, the PCRF has arranged a treatment in [treatment_location]. \n\n"  +
         " [campaign_name] arrived to [treatment_location] last week, and this week underwent a long and complicated surgery with the help of local doctors, who are specialized in [campaign_treatment]. " +
         " \n\n[campaign_name] and [campaign_name]’s whole family will be under the care and support of our PCRF [hosting_chapter] Chapter as [campaign_name] receives treatment and undergoes this life-changing surgery.Thank you so much for helping to change [campaign_name]’s life. [campaign_name] and [gender] family will be eternally grateful for your support." +
         "\n\nThank You, \nSteve Sosebee \nPresident & CEO \nThe Palestine Children's Relief Fund \nwww.pcrf.net";

    contentObj[2] = "Hello [donor_first_name], \n\nWe have great news about [campaign_name]! [campaign_name] is [age] years old and from [home_location]. [campaign_name] had a condition of [campaign_condition], which was not treatable in [home_location]" +
     "\n\nThe PCRF has arranged a treatment in [treatment_location]. [campaign_name] arrived to [treatment_location] and underwent a long and complicated [campaign_treatment] operation. [campaign_name] will soon begin an intensive recovery period." +
     "\n\n[campaign_name] will be a guest in [treatment_location] until the end of the recovery period. We wish all the best for [campaign_name], and we will keep you updated about the situation." +
     " \n\nThank you so much for helping. Your contributions are making a significant change in [campaign_name]’s life. " +
     "\n\nThank You, \nSteve Sosebee \nPresident & CEO \nThe Palestine Children's Relief Fund \nwww.pcrf.net";


    contentObj[3]  = "Hello [donor_first_name], \n\nYour donation to PCRF has helped change [campaign_name]’s life. \n\n[campaign_name] is [age] years old and from [home_location]. Recently, with the help of your donation, we sent [campaign_name] to [treatment_location] to receive treatment for [campaign_condition]." +
    	"\n\nThe operation and recovery period were very successful. We thank the doctors the hospital and the local volunteers and community for hosting [campaign_name] while receiving treatment in [treatment_location]. " +
    	"\n\n[campaign_name] is doing well and is now preparing to return to her home in  [home_location] thanks to your generous help. [campaign_name] is grateful for having the chance to receive treatment that [campaign_name] desperately needed. We wish [campaign_name] a happy and healthy life in the future."+
      "\n\n We want to thank our PCRF [hosting_chapter] Chapter and the local community for hosting [campaign_name] and the outpouring of support they have shown."+
      "\n\nThank You, \nSteve Sosebee \nPresident & CEO \nThe Palestine Children's Relief Fund \nwww.pcrf.net";



    console.log(this.props.emailKey)
    return (
      {editorState: EditorState.createWithContent(ContentState.createFromText(contentObj[this.props.emailKey - 1]))});
  },
  onChange : function(editorState){
    this.setState({editorState});
  },

  replaceVariables : function(editorState){
    var patt = /\[([A-z]+)\]/gi;
    // console.log(stateToHTML(this.state.editorState.getCurrentContent()));

    var campaign_name = this.pickRandomProperty(this.props.campaigns);
    var campaign = this.props.campaigns[campaign_name];

    var content = this.state.editorState.getCurrentContent();
    var text = content.getPlainText();
    //
    // text = text.split('[').join('{');
    // text = text.split(']').join('}');
    var matches = text.match(patt)
    console.log(matches)
    for (var match in matches){
      var matchText = matches[match]
      console.log(matchText)
      var strippedText = matchText.replace('[', '').replace(']', '')
      if (strippedText == "campaign_name"){
        text = text.replace(matchText, campaign.campaign_name);
      } else if (strippedText == "campaign_condition") {
        text = text.replace(matchText, campaign.campaign_condition);
      } else if (strippedText == "campaign_stage") {
      text = text.replace(matchText, campaign.campaign_stage);
      } else if (strippedText == "campaign_treatment") {
      text = text.replace(matchText, campaign.campaign_treatment);
      } else if (strippedText == "campaign_photo") {
      text = text.replace(matchText, campaign.campaign_photo);
      } else if (strippedText == "home_location") {
      text = text.replace(matchText, campaign.home_location);
      } else if (strippedText == "treatment_location") {
      text = text.replace(matchText, campaign.treatment_location);
     }  else if (strippedText == "age") {
     text = text.replace(matchText, campaign.age);
     }  else if (strippedText == "hosting_chapter") {
     text = text.replace(matchText, campaign.hosting_chapter);
    } else if (strippedText == "family_member") {
     text = text.replace(matchText, campaign.family_member);
   } else if (strippedText == "donor_first_name") {
     text = text.replace(matchText, "Sylvia");
   } else if (strippedText == "gender") {
    text = text.replace(matchText, campaign.gender);
    }


    }

    var editorState =  EditorState.createWithContent(ContentState.createFromText(text));
    this.setState({editorState});


  },

  pickRandomProperty: function(obj) {
      var result;
      var count = 0;
      for (var prop in obj)
          if (Math.random() < 1/++count)
             result = prop;
      return result;
  },
  commonKeys: function(obj1, obj2) {
    var keys = [];
    for(var i in obj1) {
      if(i in obj2) {
        keys.push(i);
      }
    }
    return keys;
  },

  getDonorFromAirtable: function(donor_id) {
    var base = new Airtable({ apiKey: 'keyJoo0QH6ip5yH4S' }).base('appfroa8YN4yjSWIk');
    var donor = {};
    base('Donors(Dummy)').find(donor_id, function(err, record) {
      if (err) { console.log(err); return; }
      donor  =
        {
          donor_email: record.get('Email'),
          donation_date: record.get('Donation Date'),
          donor_first_name: record.get('First Name'),
          donor_last_name: record.get('Last Name'),
          campaign_name : record.get('Donation Campaign Name'),

      }
      console.log(donor)
    });
    return donor;
  },




  logState : function(){
    var json = this.state.editorState.toJS();
    var contents = json.currentContent.blockMap;

    var keys = Object.keys(contents);
    var string = []
    for (var key in keys){
      string.push(contents[keys[key]].text)
    }

    var campaign_name = this.pickRandomProperty(this.props.campaigns);
    var donor_list = this.props.campaigns[campaign_name].donor_list;
    var donor_id = donor_list[0];
    var donor = this.getDonorFromAirtable(donor_id);
    //var campaign = this.props.campaigns[campaign_name];
      console.log(donor)





    },

    render: function() {
      const {editorState} = this.state;
        return (
          <div style={style}>
          <Button style={ButtonStyle}
            bsStyle="primary"
            onClick={this.replaceVariables}>
            Preview Email
          </Button>
          <Editor  editorState={editorState} onChange={this.onChange} onFocus={this.logState} >
          </Editor>
          </div>
        );
  }
});

var React = require('react');
var ReactDOM = require('react-dom');
import {Editor, EditorState, ContentState} from 'draft-js';
var Airtable = require('airtable');

var style = {
  "border": "1px solid light-grey",
  "paddingBottom": "20px",
  "borderRadius": '10'
};



module.exports = React.createClass({

  getInitialState : function(){
    var content = "Hello [donor name], \n\nYour donation to PCRF has helped change [beneficiary name]’s life. \n\n[beneficiary name] is [age] years old and from [home location]. [beneficiary name] has a condition of [condition name]." +
      " We only hope to correct this problem is surgery at an advanced children’s hospital outside of [home country]. The PCRF has arranged a treatment for the beneficiary's treatment in [treatment location]. \n\n"  +
      " [beneficiary name] is now preparing to travel to [treatment location] with their family. Once reached the destination, they will be hosted by our [hosting chapter] chapter until the operation. \n\n[beneficiary name] has a long journey ahead, but is surrounded by the support of the [hosting chapter] PCRF community." +
      " \n\nThank you so much for helping to change [beneficiary name]’s life. [beneficiary name] and [gender] family will be eternally grateful for your support." +
      "\n\nThank You, \nPCRF";

    return (
      {editorState: EditorState.createWithContent(ContentState.createFromText(content))});
  },
  onChange : function(editorState){
    this.setState({editorState

      });
  },

  replaceVariables : function(editorState){
    var content = editorState.getCurrentContent();
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
      if (this.props.emailKey == 1 ) {
        return (
          <div style={style}>
          <Editor  editorState={editorState} onChange={this.onChange} onFocus={this.logState} >
          </Editor>
          </div>
        );
     }
     else if (this.props.emailKey == 2) {
      return (
        <div>
          <p>
            Dear [donor name],
          </p>
            Do you remember [beneficiary name]? [beneficiary name] is [age] years old and from [home location]. [beneficiary name] has a condition of [condition name].  [“His”/”Her”] [condition] condition was unfortunately not treatable in [home location]. So, the PCRF has arranged a treatment in [treatment location].
          <p>
            [“He”/”She”] arrived to [treatment location] last week and this week [“he”/”she”] underwent a long and complicated [surgery/treatment] surgery.
          </p>
          <p>
            [beneficiary name] and [“her”/”his”] [family member] will be under the care and support of our PCRF [hosting chapter] Chapter over the next [treatment length] as [“he”/”she”] receives treatment and undergoes this life changing surgery.
          </p>
        </div>
      );
    }
    else if (this.props.emailKey == 3) {
     return (
       <div>
         <p>
           Dear [donor name],
         </p>
           We have great news about [beneficiary name]! [“He”/”She”] is [age] years old and from [home location]. [beneficiary name] had a condition of [condition name]. [“He”/”She”] was diagnosed with [condition] that unfortunately was not treatable in [home location]. The PCRF arranged a treatment at [hospital name]. He arrived to [treatment location] and underwent a long and complicated [surgery/treatment] surgery.
         <p>
           [beneficiary name] will soon begin an intensive recovery period, which will [recovery details].
         </p>
         <p>
           [“He”/”She”] will be a guest in [treatment location] for next [treatment length] while [“he”/”she”] continues to receive treatment. We wish all the best for [beneficiary name], and we will keep you updated about the situation. Thank you so much for helping [beneficiary name]. Your contributions are making a significant change in [“his”/”her”] life.
         </p>
       </div>
     );
   }
   else if (this.props.emailKey == 4) {
    return (
      <div>
        <p>
          Dear [donor name],
        </p>
          Your donation to PCRF has helped change [beneficiary name]’s life. [beneficiary name] is [age] years old and from [home location]. [beneficiary name] had a condition of [condition name].  Recently, with the help of your donations, we sent [beneficiary name] to [treatment location.]
        <p>
          The operation and recovery period were very successful. We thank the doctors the hospital and the local volunteers and community for hosting [beneficiary name] and caring for [“him”/”her”] while receiving treatment in [treatment location].
        </p>
        <p>
          [beneficiary name] is doing well and is now preparing to return to her home in [home location] thanks to your generous help. [beneficiary name] is grateful for having the chance to receive treatment [“he”/”she”] desperately needed. We wish [beneficiary name] a happy and healthy life in the future.
        </p>
        <p>
          We want to thank our PCRF [hosting chapter] Chapter and the local community for hosting [beneficiary name] and the outpouring of support they have shown.
        </p>
      </div>
    );
  }
  }
});

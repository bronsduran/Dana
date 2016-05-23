var React = require('react');
var ReactDOM = require('react-dom');
import {Editor, EditorState, ContentState} from 'draft-js';

module.exports = React.createClass({

  getInitialState : function(){
    return ({editorState: EditorState.createWithContent(ContentState.createFromText("Hi my name is"))});
  },
  onChange : function(editorState){
    this.setState({editorState});
  },

    render: function() {
      const {editorState} = this.state;
      console.log("thing", this.props.emailKey);
      if (this.props.emailKey == 1 ) {
        return (

          <Editor editorState={editorState} onChange={this.onChange} >
          <p>
            Dear [donor name],
          </p>
          </Editor>
          // <div contenteditable="true">
          //   This text can be edited by the user.
          // </div>
          //
          // <div contenteditable="true">

          // <p>
          // Your donation to PCRF has helped change [beneficiary name]’s life. [beneficiary name] is [age] years old and from [home location]. [beneficiary name] has a condition of [condition name].
          // </p>
          // <p>
          //   [“Her”/”His”] only hope to correct this problem is surgery at an advanced children’s hospital outside of [home country]. The PCRF has arranged a treatment for [“her”/”him”] treatment in [treatment location], where [“he”/”she”] will be [treatment details].
          // </p>
          // <p>
          //   [“Her”/”His”] only hope to correct this problem is surgery at an advanced children’s hospital outside of [home country]. The PCRF has arranged a treatment for [“her”/”him”] treatment in [treatment location], where [“he”/”she”] will be [treatment details].
          // </p>
          // <p>
          //   [beneficiary name] is now preparing to travel to [treatment location] with [“his”/”her”] [family member]. Once reached the destination, [“they”] will be hosted by our [hosting chapter] chapter until the operation. [beneficiary name] has a long journey ahead, but is surrounded by the support of the [hosting chapter] PCRF community.
          // </p>
          // <p>
          //   Thank you so much for helping to change [beneficiary name]’s life. [beneficiary name] and [“his”/”her”] family will be eternally grateful for your support.
          // </p></div>


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

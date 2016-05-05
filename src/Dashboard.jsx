var React = require('react');
var ReactDOM = require('react-dom');


module.exports = React.createClass({

  render: function() {

      return(
        <div className="dashboard">

  	    	<Navbar
  	    		handleModalOpen={this.handleModalOpen}
  	    		programs={this.state.programs}
  	    		selected={this.state.currentProgram}
  	    		onProgramSelection={this.onProgramSelection} />

      		<BeneficiaryGrid
      			program={this.state.programs[this.state.currentProgram]}
      			stories={this.state.stories}
            onCompleteChapter={this.handleCompleteChapter} />


  	    </div>
    );
  }
});

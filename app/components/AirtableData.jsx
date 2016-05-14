var React = require('react');
var ReactDOM = require('react-dom');


module.exports = React.createClass({

  render: function() {
    var Iframe=this.props.iframe;
      return(
        <div>
          <Iframe src={this.props.src} frameborder={this.props.frameborder} onmousewheel={this.props.onmousewheel} width={this.props.width} height={this.props.height} style={this.props.style}/>
      </div>
    );
  }
});

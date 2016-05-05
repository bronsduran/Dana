var React = require('react');
var EmailTemplate = require('./emailTemplate.jsx');
var AirtableData = require('./AirtableData.jsx');

module.exports = React.createClass({

	render() {
		return (
			<div>
				<AirtableData iframe='iframe' src="https://airtable.com/embed/shrHQgGYJfY1XScnK?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"/>
				<EmailTemplate />
			</div>
		)
	}
});

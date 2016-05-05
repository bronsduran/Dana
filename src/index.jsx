var React = require('react');
var ReactDOM = require('react-dom');
var { Router, IndexRoute, Route, browserHistory } = require('react-router');

var Home = require('./Home.jsx');

ReactDOM.render((
		<Router history={browserHistory}>
			<Route path='/' component={Home}>
	  	</Route>
	  </Router>
), document.getElementById('container'));

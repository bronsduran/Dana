var React = require('react');
var ReactRouter = require('react-router');
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
var Home = require('./Home.jsx');
var Email = require('./Email.jsx');


module.exports = (
  <Router history={browserHistory}>
  <Route path='/' component={Home}></Route>

  <Route path='/email' component={Email}></Route>
  </Router>
);

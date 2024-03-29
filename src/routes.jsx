var React = require('react');
var ReactRouter = require('react-router');
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
var Home = require('./Home.jsx');
var Email = require('./Email.jsx');
var Dashboard = require('./Dashboard.jsx');
var SignIn = require('./SignIn.jsx');

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={SignIn}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/email' component={Email}></Route>
  </Router>
);

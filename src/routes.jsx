var React = require('react');
var ReactRouter = require('react-router');
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
var Home = require('./Home.jsx');


module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
    </Route>
  </Router>
);
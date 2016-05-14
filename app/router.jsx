import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import MainLayout from '.components/MainLayout.jsx';
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path='/' component={Home} />

      <Route path="beneficiaries">
        <Route component={dashboard}>
        </Route>
      </Route>

    </Route>
  </Router>
);

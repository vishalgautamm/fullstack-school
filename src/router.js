import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

// Routes
const Routes = (
  <Router history={browserHistory} >
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </Route>
  </Router>
);

export default Routes;

import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

import HTML from './components/courses/HTML';
import CSS from './components/courses/CSS';
import Javascript from './components/courses/Javascript';

// Routes
const Routes = (
  <Router history={browserHistory} >
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teachers" component={Teachers} />

      <Route path="/courses" component={Courses}>
        <IndexRedirect to="Javascript" />
        <Route path="html" component={HTML} />
        <Route path="css" component={CSS} />
        <Route path="javascript" component={Javascript} />
      </Route>
    </Route>
  </Router>
);

export default Routes;

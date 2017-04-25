import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import NotFound from './components/NotFound';

import CourseContainer from './components/courses/CourseContainer';
import CourseList from './data/courses';

// Routes
const Routes = (
  <Router history={browserHistory} >
    <Route component={App}>
      <Route path="/" component={Home} title="Frontend Courses" />
      <Route path="/about" component={About} title="About" />
      <Route path="/teachers" component={Teachers} title="Teachers" />

      <Route path="/courses" component={Courses} title="Courses">
        <IndexRedirect to="Javascript" />
        <Route path="html" component={CourseContainer} data={CourseList.HTML} />
        <Route path="css" component={CourseContainer} data={CourseList.CSS} />
        <Route path="javascript" component={CourseContainer} data={CourseList.JS} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;

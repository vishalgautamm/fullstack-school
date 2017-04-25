import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//CSS
import './css/style.css';

// components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

const mountNode = document.getElementById('root');
render((
  <Router history={hashHistory} >
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </Route>
  </Router>
), mountNode);

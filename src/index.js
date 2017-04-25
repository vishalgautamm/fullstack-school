import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//CSS
import './css/style.css';

// components
import App from './components/App';
import Home from './components/Home';

const mountNode = document.getElementById('root');
render((
  <Router history={hashHistory} >
    <Route path="/" component={Home} />
  </Router>
), mountNode);

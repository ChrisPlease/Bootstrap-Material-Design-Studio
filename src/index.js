import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import Header from './components/Header';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Header}>
        </Route>
    </Router>
), document.getElementById('root'))



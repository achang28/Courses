/**
 * Created by albertwchang on 5/26/16.
 */
//console.log("Testing...");
'use strict';

require('babel-polyfill');
var React = require('react');
var { render } = require('react-dom');
var { Router, browserHistory } = require('react-router');
var routes = require('./routes');
require('./styles/styles.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('App')
);

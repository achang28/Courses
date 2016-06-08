/**
 * Created by albertwchang on 5/26/16.
 */
'use strict';

require('babel-polyfill');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import configStore from './store/configStore';
require('./styles/styles.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

const store = configStore();
store.dispatch(loadCourses());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('App')
);

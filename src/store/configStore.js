/**
 * Created by albertwchang on 6/3/16.
 */
'use strict';

import { createStore } from 'redux';
import rootReducer from '../reducers/base';
//var reduxImmutableStateInvariant = require('redux-immutable-state-invariant');

export default function configStore(initialState) {
	return createStore(rootReducer, initialState);
};

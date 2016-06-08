/**
 * Created by albertwchang on 6/3/16.
 */
'use strict';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/base';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configStore(initialState) {
	let readyMiddleware = applyMiddleware(thunk, reduxImmutableStateInvariant());
	return createStore(rootReducer, initialState, readyMiddleware);
};

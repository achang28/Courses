/**
 * Created by albertwchang on 6/3/16.
 */
'use strict';

import { combineReducers } from 'redux';
import courseReducer from './courseRed';

const rootReducer = combineReducers({
	courses: courseReducer
});

export default rootReducer;

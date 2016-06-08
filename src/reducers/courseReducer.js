/**
 * Created by albertwchang on 6/3/16.
 */
'use strict';
import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
	switch(action.type) {
		case actionTypes.CREATE_COURSE:
			return [...state, Object.assign({}, action.data)];
		case actionTypes.LOAD_COURSES_SUCCESS:
			return [...state, ...action.data];
		default:
			return state;
	}
}

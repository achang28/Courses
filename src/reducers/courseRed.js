/**
 * Created by albertwchang on 6/3/16.
 */
'use strict';

export default function courseReducer(state = [], action) {
	switch(action.type) {
		case 'CREATE_COURSE':
			return state.concat([action.course]);
		default:
			return state;
	}
}

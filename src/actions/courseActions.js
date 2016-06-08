/**
 * Created by albertwchang on 6/3/16.
 */
import * as actionTypes from './actionTypes';
import courseApi from '../apis/mockCourseApi';

export function createCourse(course) {
	return { type: actionTypes.CREATE_COURSE, data: course };
}

export function loadCoursesSuccess(courses) {
	return { type: actionTypes.LOAD_COURSES_SUCCESS, data: courses };
}

export function loadCourses() {
	return (dispatch) => {
		courseApi.getAllCourses().then(courses => {
			let action = loadCoursesSuccess(courses);
			dispatch(action);
		}).catch(err => {
			throw(err);
		});
	};
}

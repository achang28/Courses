/**
 * Created by albertwchang on 6/3/16.
 */
export function createCourse(course) {
	return {
		type: 'CREATE_COURSE',
		course: course
	};
};

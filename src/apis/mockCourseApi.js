/**
 * Created by albertwchang on 6/7/16.
 */
'use strict';
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
	{
		id: "react-flux-building-applications",
		title: "Building Applications in React and Flux",
		watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
		authorId: "cory-house",
		length: "5:08",
		category: "JavaScript"
	}, {
		id: "clean-code",
		title: "Clean Code: Writing Code for Humans",
		watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
		authorId: "john-linquist",
		length: "3:10",
		category: "Software Practices"
	}, {
		id: "architecture",
		title: "Architecting Applications for the Real World",
		watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
		authorId: "stephen-grider",
		length: "2:52",
		category: "Software Architecture"
	}, {
		id: "career-reboot-for-developer-mind",
		title: "Becoming an Outlier: Reprogramming the Developer Mind",
		watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
		authorId: "cory-house",
		length: "2:30",
		category: "Career"
	}, {
		id: "web-components-shadow-dom",
		title: "Web Component Fundamentals",
		watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
		authorId: "cory-house",
		length: "5:10",
		category: "HTML5"
	}
];

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => replaceAll(course.title, ' ', '-');

class CourseApi {
	static getAllCourses() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], courses));
			}, delay);
		});
	}

	static saveCourse(course) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minTitleLength = 1;
				if (course.title.length < minTitleLength) {
					reject(`Title must be at least ${minTitleLength} characters.`);
				}

				if (course.id) {
					const courseIndex = courses.findIndex(a => a.id == course.id);
					courses.splice(courseIndex, 1, course);
				} else {
					//Just simulating creation here.
					//The server would generate ids and watchHref's for new courses in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					course.id = generateId(course);
					course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
					courses.push(course);
				}

				resolve(Object.assign({}, course));
			}, delay);
		});
	}

	static deleteCourse(courseId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const courseIndex = courses.findIndex(course => {
					course.courseId == courseId;
				});

				if (courseIndex < 0) {
					reject('Course not found');
				} else {
					courses.splice(courseIndex, 1);
					resolve();
				}
			}, delay);
		});
	}
}

export default CourseApi;

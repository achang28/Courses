/**
 * Created by albertwchang on 6/1/16.
 */
"use strict";

import React, { PropTypes } from 'react';
import CourseList from './CourseList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class Courses extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);

		this.state = { course: { title: '' } };
	}

	onTitleChange(event) {
		var newCourse = Object.assign(this.state.course, {title: event.target.value});
		this.setState({course: newCourse});
	}

	onClickSave() {
		this.props.actions.createCourse(this.state.course);
	}

	makeCourse(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	render() {
		let { courses } = this.props;

		return (
			<div>
				<h1>Courses</h1>
				<CourseList courses={courses} />
			</div>
		);
	}
}

Courses.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
};

var mapStateToProps = function(state, ownProps) {
	return { courses: state.courses };
}

var mapDispatchToProps = function(dispatch) {
	return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);

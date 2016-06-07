/**
 * Created by albertwchang on 6/1/16.
 */
"use strict";

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseAction';

class Courses extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);

		this.state = {
			course: { title: '' }
		};
	}

	onTitleChange(event) {
		var newCourse = Object.assign(this.state.course, {title: event.target.value});
		this.setState({course: newCourse});
	}

	onClickSave() {
		var courseAction = courseActions.createCourse(this.state.course);
		this.props.dispatch(courseAction);
	}

	makeCourse(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.makeCourse)}
				<h2>Add Course</h2>
				<input type="text"
							 onChange={this.onTitleChange}
							 value={this.state.course.title} />
				<input type="submit"
							 value="Save"
							 onClick={this.onClickSave} />
			</div>
		)
	}
}

Courses.propTypes = {
	dispatch: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired
};

var mapStateToProps = function(state, ownProps) {
	return { courses: state.courses };
}

export default connect(mapStateToProps)(Courses);

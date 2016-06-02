/**
 * Created by albertwchang on 6/1/16.
 */
'use strict';

var React = require('react');
var { PropTypes } = React;
var { Link, IndexLink } = require('react-router');

module.exports = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/profile" activeClassName="active">My Info</Link>
    </nav>
  )
};

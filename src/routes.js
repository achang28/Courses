/**
 * Created by albertwchang on 5/28/16.
 */
var React = require('react');
var { Route, IndexRoute } = require('react-router');
var App = require('./comps/App');
var Home = require('./comps/home/base');
var Profile = require('./comps/profile/base');
var Courses = require('./comps/courses/base');

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="courses" component={Courses} />
    <Route path="profile" component={Profile} />
  </Route>
);

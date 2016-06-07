/**
 * Created by albertwchang on 5/28/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './comps/App';
import Home from './comps/home/base';
import Profile from './comps/profile/base';
import Courses from './comps/courses/base';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="courses" component={Courses} />
    <Route path="profile" component={Profile} />
  </Route>
);

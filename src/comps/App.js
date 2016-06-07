/**
 * Created by albertwchang on 6/1/16.
 */
"use strict";

import React, { PropTypes } from 'react';
import Header from './shared/Header';
//var {connect} = require('react-redux');

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

/**
 * Created by albertwchang on 6/1/16.
 */
"use strict";

var React = require('react');
var { PropTypes } = React;
var Header = require('./shared/Header');
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

module.exports = App;

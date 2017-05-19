

'use strict';

var React = require('react');
var factory = require('./factory');

var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(React.Component, React.isValidElement, ReactNoopUpdateQueue);
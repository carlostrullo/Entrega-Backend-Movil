var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/node_modules/react-native-scrollable-tab-view/Button.android.js';
var React = require('react');
var ReactNative = require('react-native');
var TouchableNativeFeedback = ReactNative.TouchableNativeFeedback,
    View = ReactNative.View;


var Button = function Button(props) {
  return React.createElement(
    TouchableNativeFeedback,
    babelHelpers.extends({
      delayPressIn: 0,
      background: TouchableNativeFeedback.SelectableBackground() }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    props.children
  );
};

module.exports = Button;
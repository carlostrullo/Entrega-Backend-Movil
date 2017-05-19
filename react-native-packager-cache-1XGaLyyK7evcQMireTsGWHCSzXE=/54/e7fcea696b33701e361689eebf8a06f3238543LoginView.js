Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/LoginView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactNativeCounter = require('react-native-counter');

var _reactNativeCounter2 = babelHelpers.interopRequireDefault(_reactNativeCounter);

var LoginView = function (_Component) {
  babelHelpers.inherits(LoginView, _Component);

  function LoginView() {
    babelHelpers.classCallCheck(this, LoginView);
    return babelHelpers.possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).apply(this, arguments));
  }

  babelHelpers.createClass(LoginView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.timeoutHandle = setTimeout(function () {
        _reactNativeRouterFlux.Actions.root();
      }, 2000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      clearTimeout(this.timeoutHandle);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.welcome, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          ' Bienvenidos a cali-Planner '
        )
      );
    }
  }]);
  return LoginView;
}(_react.Component);

exports.default = LoginView;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcome: {
    fontSize: 24,
    fontWeight: '600'
  }

});
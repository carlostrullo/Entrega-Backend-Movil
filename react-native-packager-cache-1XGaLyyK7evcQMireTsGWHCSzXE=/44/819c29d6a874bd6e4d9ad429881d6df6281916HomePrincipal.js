Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/HomePrincipal.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _CategoryList = require('./CategoryList');

var _CategoryList2 = babelHelpers.interopRequireDefault(_CategoryList);

var _apiClient = require('./api-client');

var HomePrincipal = function (_Component) {
  babelHelpers.inherits(HomePrincipal, _Component);

  function HomePrincipal() {
    babelHelpers.classCallCheck(this, HomePrincipal);
    return babelHelpers.possibleConstructorReturn(this, (HomePrincipal.__proto__ || Object.getPrototypeOf(HomePrincipal)).apply(this, arguments));
  }

  babelHelpers.createClass(HomePrincipal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_CategoryList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      });
    }
  }]);
  return HomePrincipal;
}(_react.Component);

exports.default = HomePrincipal;
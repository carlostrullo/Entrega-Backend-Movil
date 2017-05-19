var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/app.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _HomePrincipal = require('./HomePrincipal');

var _HomePrincipal2 = babelHelpers.interopRequireDefault(_HomePrincipal);

var _LoginView = require('./LoginView');

var _LoginView2 = babelHelpers.interopRequireDefault(_LoginView);

var _ArtistDetailView = require('./ArtistDetailView');

var _ArtistDetailView2 = babelHelpers.interopRequireDefault(_ArtistDetailView);

var caliPlanner = function (_React$Component) {
  babelHelpers.inherits(caliPlanner, _React$Component);

  function caliPlanner() {
    babelHelpers.classCallCheck(this, caliPlanner);
    return babelHelpers.possibleConstructorReturn(this, (caliPlanner.__proto__ || Object.getPrototypeOf(caliPlanner)).apply(this, arguments));
  }

  babelHelpers.createClass(caliPlanner, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNativeRouterFlux.Router,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'login', component: _LoginView2.default, hideNavBar: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        _react2.default.createElement(
          _reactNativeRouterFlux.Scene,
          { key: 'root', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'home', component: _HomePrincipal2.default, hideNavBar: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }),
          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'artistDetail', component: _ArtistDetailView2.default, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          })
        )
      );
    }
  }]);
  return caliPlanner;
}(_react2.default.Component);

_reactNative.AppRegistry.registerComponent('caliPlanner', function () {
  return caliPlanner;
});
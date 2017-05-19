Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/CategoryList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeScrollableTabView = require('react-native-scrollable-tab-view');

var _reactNativeScrollableTabView2 = babelHelpers.interopRequireDefault(_reactNativeScrollableTabView);

var _reactNativeScrollableTabViewMaskBar = require('react-native-scrollable-tab-view-mask-bar');

var _reactNativeScrollableTabViewMaskBar2 = babelHelpers.interopRequireDefault(_reactNativeScrollableTabViewMaskBar);

var _HomeViewCultura = require('./HomeViewCultura');

var _HomeViewCultura2 = babelHelpers.interopRequireDefault(_HomeViewCultura);

var _HomeViewDeporte = require('./HomeViewDeporte');

var _HomeViewDeporte2 = babelHelpers.interopRequireDefault(_HomeViewDeporte);

var _HomeViewComida = require('./HomeViewComida');

var _HomeViewComida2 = babelHelpers.interopRequireDefault(_HomeViewComida);

var _HomeViewRumba = require('./HomeViewRumba');

var _HomeViewRumba2 = babelHelpers.interopRequireDefault(_HomeViewRumba);

var HomePrincipal = function (_Component) {
  babelHelpers.inherits(HomePrincipal, _Component);

  function HomePrincipal() {
    babelHelpers.classCallCheck(this, HomePrincipal);
    return babelHelpers.possibleConstructorReturn(this, (HomePrincipal.__proto__ || Object.getPrototypeOf(HomePrincipal)).apply(this, arguments));
  }

  babelHelpers.createClass(HomePrincipal, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactNativeScrollableTabView2.default,
        { renderTabBar: function renderTabBar() {
            return _react2.default.createElement(_reactNativeScrollableTabViewMaskBar2.default, { someProp: 'here', showMask: true, maskMode: 'light', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        _react2.default.createElement(_HomeViewDeporte2.default, { tabLabel: 'Deporte', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        _react2.default.createElement(_HomeViewComida2.default, { tabLabel: 'Comida', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }),
        _react2.default.createElement(_HomeViewCultura2.default, { tabLabel: 'Cultura', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }),
        _react2.default.createElement(_HomeViewRumba2.default, { tabLabel: 'Rumba', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        })
      );
    }
  }]);
  return HomePrincipal;
}(_react.Component);

exports.default = HomePrincipal;
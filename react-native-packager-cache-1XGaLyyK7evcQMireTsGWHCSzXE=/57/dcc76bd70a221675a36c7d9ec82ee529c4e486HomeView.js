Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/HomeView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtistList = require('./ArtistList');

var _ArtistList2 = babelHelpers.interopRequireDefault(_ArtistList);

var _apiClient = require('./api-client');

var HomeView = function (_Component) {
  babelHelpers.inherits(HomeView, _Component);

  function HomeView() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, HomeView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offerss: []
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(HomeView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _apiClient.getUnsplash)().then(function (data) {
        return _this2.setState({ offerss: data });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var offerss = this.state.offerss;

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        _react2.default.createElement(_ArtistList2.default, { offerss: offerss, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        })
      );
    }
  }]);
  return HomeView;
}(_react.Component);

exports.default = HomeView;


var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    paddingTop: 10
  }

});
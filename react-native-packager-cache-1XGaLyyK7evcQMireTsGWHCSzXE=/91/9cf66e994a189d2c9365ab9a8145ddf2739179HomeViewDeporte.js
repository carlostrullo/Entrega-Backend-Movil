Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/HomeViewDeporte.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtistListSport = require('./ArtistListSport');

var _ArtistListSport2 = babelHelpers.interopRequireDefault(_ArtistListSport);

var _apiClient = require('./api-client');

var HomeViewDeporte = function (_Component) {
  babelHelpers.inherits(HomeViewDeporte, _Component);

  function HomeViewDeporte() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, HomeViewDeporte);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = HomeViewDeporte.__proto__ || Object.getPrototypeOf(HomeViewDeporte)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offerss: []
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(HomeViewDeporte, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _apiClient.getOferts)().then(function (data) {
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
            lineNumber: 33
          }
        },
        _react2.default.createElement(_ArtistListSport2.default, { offerss: offerss, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })
      );
    }
  }]);
  return HomeViewDeporte;
}(_react.Component);

exports.default = HomeViewDeporte;


var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    paddingTop: 10
  }

});
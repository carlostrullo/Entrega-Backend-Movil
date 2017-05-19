Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/HomeViewComida.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtistListFood = require('./ArtistListFood');

var _ArtistListFood2 = babelHelpers.interopRequireDefault(_ArtistListFood);

var _apiClient = require('./api-client');

var HomeViewComida = function (_Component) {
  babelHelpers.inherits(HomeViewComida, _Component);

  function HomeViewComida() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, HomeViewComida);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = HomeViewComida.__proto__ || Object.getPrototypeOf(HomeViewComida)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offerss: []
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(HomeViewComida, [{
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
            lineNumber: 32
          }
        },
        _react2.default.createElement(_ArtistListFood2.default, { offerss: offerss, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        })
      );
    }
  }]);
  return HomeViewComida;
}(_react.Component);

exports.default = HomeViewComida;


var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    paddingTop: 10
  }

});
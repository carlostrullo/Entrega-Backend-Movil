Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/HomeViewRumba.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtisListParty = require('./ArtisListParty');

var _ArtisListParty2 = babelHelpers.interopRequireDefault(_ArtisListParty);

var _apiClient = require('./api-client');

var HomeViewRumba = function (_Component) {
  babelHelpers.inherits(HomeViewRumba, _Component);

  function HomeViewRumba() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, HomeViewRumba);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = HomeViewRumba.__proto__ || Object.getPrototypeOf(HomeViewRumba)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offerss: []
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(HomeViewRumba, [{
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
        _react2.default.createElement(_ArtisListParty2.default, { offerss: offerss, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        })
      );
    }
  }]);
  return HomeViewRumba;
}(_react.Component);

exports.default = HomeViewRumba;


var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    paddingTop: 10
  }

});
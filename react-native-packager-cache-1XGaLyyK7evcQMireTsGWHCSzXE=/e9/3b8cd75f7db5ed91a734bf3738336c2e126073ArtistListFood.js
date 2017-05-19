Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/ArtistListFood.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtisBoxFood = require('./ArtisBoxFood');

var _ArtisBoxFood2 = babelHelpers.interopRequireDefault(_ArtisBoxFood);

var _reactNativeRouterFlux = require('react-native-router-flux');

var ArtistListFood = function (_Component) {
  babelHelpers.inherits(ArtistListFood, _Component);

  function ArtistListFood(props) {
    babelHelpers.classCallCheck(this, ArtistListFood);

    var _this = babelHelpers.possibleConstructorReturn(this, (ArtistListFood.__proto__ || Object.getPrototypeOf(ArtistListFood)).call(this, props));

    var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
        return r1 !== r2;
      } });

    _this.state = {
      dataSource: ds
    };
    return _this;
  }

  babelHelpers.createClass(ArtistListFood, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.offerss !== this.props.offerss) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.offerss)
        });
      }
    }
  }, {
    key: 'handlePress',
    value: function handlePress(offers) {
      _reactNativeRouterFlux.Actions.artistDetail({ offers: offers });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactNative.ListView, {
        enableEmptySection: true,
        dataSource: this.state.dataSource,
        renderRow: function renderRow(offers) {

          return _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return _this2.handlePress(offers);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            _react2.default.createElement(_ArtisBoxFood2.default, { offers: offers, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            })
          );
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      });
    }
  }]);
  return ArtistListFood;
}(_react.Component);

exports.default = ArtistListFood;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/ArtistListSport.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtisBoxSport = require('./ArtisBoxSport');

var _ArtisBoxSport2 = babelHelpers.interopRequireDefault(_ArtisBoxSport);

var _reactNativeRouterFlux = require('react-native-router-flux');

var ArtistListSport = function (_Component) {
  babelHelpers.inherits(ArtistListSport, _Component);

  function ArtistListSport(props) {
    babelHelpers.classCallCheck(this, ArtistListSport);

    var _this = babelHelpers.possibleConstructorReturn(this, (ArtistListSport.__proto__ || Object.getPrototypeOf(ArtistListSport)).call(this, props));

    var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
        return r1 !== r2;
      } });

    _this.state = {
      dataSource: ds

    };
    return _this;
  }

  babelHelpers.createClass(ArtistListSport, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {

      if (newProps.offerss !== this.props.offers) {
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
                lineNumber: 51
              }
            },
            _react2.default.createElement(_ArtisBoxSport2.default, { offers: offers, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            })
          );
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }]);
  return ArtistListSport;
}(_react.Component);

exports.default = ArtistListSport;
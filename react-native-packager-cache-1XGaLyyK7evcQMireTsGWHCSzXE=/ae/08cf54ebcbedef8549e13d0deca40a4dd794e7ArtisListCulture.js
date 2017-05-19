Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/ArtisListCulture.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtisBoxCulture = require('./ArtisBoxCulture');

var _ArtisBoxCulture2 = babelHelpers.interopRequireDefault(_ArtisBoxCulture);

var _reactNativeRouterFlux = require('react-native-router-flux');

var ArtisListCulture = function (_Component) {
  babelHelpers.inherits(ArtisListCulture, _Component);

  function ArtisListCulture(props) {
    babelHelpers.classCallCheck(this, ArtisListCulture);

    var _this = babelHelpers.possibleConstructorReturn(this, (ArtisListCulture.__proto__ || Object.getPrototypeOf(ArtisListCulture)).call(this, props));

    var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
        return r1 !== r2;
      } });

    _this.state = {
      dataSource: ds

    };
    return _this;
  }

  babelHelpers.createClass(ArtisListCulture, [{
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
    value: function handlePress(offers, cultures) {
      _reactNativeRouterFlux.Actions.artistDetail({ offers: offers });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactNative.ListView, {
        enableEmptySection: true,
        dataSource: this.state.dataSource,

        renderRow: function renderRow(offers, cultures) {

          return _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return _this2.handlePress(offers);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            _react2.default.createElement(_ArtisBoxCulture2.default, { offers: offers, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            })
          );
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      });
    }
  }]);
  return ArtisListCulture;
}(_react.Component);

exports.default = ArtisListCulture;
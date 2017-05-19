Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/ArtistDetailView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ArtisBox = require('./ArtisBox');

var _ArtisBox2 = babelHelpers.interopRequireDefault(_ArtisBox);

var ArtistDetailView = function (_Component) {
  babelHelpers.inherits(ArtistDetailView, _Component);

  function ArtistDetailView() {
    babelHelpers.classCallCheck(this, ArtistDetailView);
    return babelHelpers.possibleConstructorReturn(this, (ArtistDetailView.__proto__ || Object.getPrototypeOf(ArtistDetailView)).apply(this, arguments));
  }

  babelHelpers.createClass(ArtistDetailView, [{
    key: 'render',
    value: function render() {

      var offers = this.props.offers;
      var _props$offers = this.props.offers,
          descripcion = _props$offers.descripcion,
          letraChica = _props$offers.letraChica;


      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        _react2.default.createElement(_ArtisBox2.default, { offers: offers, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.artisBox, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: styles.name, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            ' ',
            descripcion
          ),
          _react2.default.createElement(
            _reactNative.Text,
            { style: styles.letraChica, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            ' ',
            letraChica
          )
        )
      );
    }
  }]);
  return ArtistDetailView;
}(_react.Component);

exports.default = ArtistDetailView;


var styles = _reactNative.StyleSheet.create({

  letraChica: {

    fontSize: 10,
    marginTop: 10

  },
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10
  },

  artisBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 2,
    flexDirection: 'column',
    alignItems: 'center'

  },
  name: {
    fontSize: 20,
    marginTop: 20
  }

});
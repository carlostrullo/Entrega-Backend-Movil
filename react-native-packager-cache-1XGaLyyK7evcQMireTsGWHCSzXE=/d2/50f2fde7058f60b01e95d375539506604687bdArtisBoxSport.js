Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/ArtisBoxSport.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _apiClient = require('./api-client');

var artisBoxSport = function (_Component) {
    babelHelpers.inherits(artisBoxSport, _Component);

    function artisBoxSport() {
        babelHelpers.classCallCheck(this, artisBoxSport);
        return babelHelpers.possibleConstructorReturn(this, (artisBoxSport.__proto__ || Object.getPrototypeOf(artisBoxSport)).apply(this, arguments));
    }

    babelHelpers.createClass(artisBoxSport, [{
        key: 'render',
        value: function render() {
            var _props$offers = this.props.offers,
                idCategoria = _props$offers.idCategoria,
                titulo = _props$offers.titulo,
                precio = _props$offers.precio;


            if (idCategoria === 1) {
                var images = 'https://images.unsplash.com/photo-1493037875696-1f2eb8d732ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=19cbc3612fc8eab26dcce0dd7d39b4d9';
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.artisBox, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    _react2.default.createElement(_reactNative.Image, { style: styles.images, source: { uri: images }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.info, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.name, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 29
                                }
                            },
                            titulo
                        ),
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.name, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                }
                            },
                            precio
                        )
                    )
                );
            } else {
                return null;
            }
        }
    }]);
    return artisBoxSport;
}(_react.Component);

exports.default = artisBoxSport;


var styles = _reactNative.StyleSheet.create({
    images: {
        width: 150,
        height: 150
    },
    artisBox: {
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        elevation: 2

    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    name: {
        fontSize: 20,
        marginTop: 20
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 15
    },

    iconContainer: {
        flex: 1,
        alignItems: 'center'
    }

});
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/ArtisBoxParty.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var artisBoxParty = function (_Component) {
    babelHelpers.inherits(artisBoxParty, _Component);

    function artisBoxParty() {
        babelHelpers.classCallCheck(this, artisBoxParty);
        return babelHelpers.possibleConstructorReturn(this, (artisBoxParty.__proto__ || Object.getPrototypeOf(artisBoxParty)).apply(this, arguments));
    }

    babelHelpers.createClass(artisBoxParty, [{
        key: 'render',
        value: function render() {
            var _props$offers = this.props.offers,
                idCategoria = _props$offers.idCategoria,
                titulo = _props$offers.titulo,
                precio = _props$offers.precio;

            var images = 'https://images.unsplash.com/photo-1493037875696-1f2eb8d732ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=19cbc3612fc8eab26dcce0dd7d39b4d9';
            if (idCategoria === 3) {
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.artisBox, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    _react2.default.createElement(_reactNative.Image, { style: styles.images, source: { uri: images }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.info, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.name, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            titulo
                        ),
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.name, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
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
    return artisBoxParty;
}(_react.Component);

exports.default = artisBoxParty;


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
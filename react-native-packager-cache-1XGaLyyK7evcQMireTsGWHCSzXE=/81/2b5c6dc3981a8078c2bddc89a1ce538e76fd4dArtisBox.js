Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/src/ArtisBox.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _native = require('unsplash-js/native');

var _native2 = babelHelpers.interopRequireDefault(_native);

var UrlRandom = 'https://api.unsplash.com/photos/random/?client_id=2375ff235149ecf6bac99a1ec7928ba40ec3e92e340997ac38c1a08bdc39e36d';

var artisBox = function (_Component) {
    babelHelpers.inherits(artisBox, _Component);

    function artisBox(props) {
        babelHelpers.classCallCheck(this, artisBox);

        var _this = babelHelpers.possibleConstructorReturn(this, (artisBox.__proto__ || Object.getPrototypeOf(artisBox)).call(this, props));

        _this.getlink();

        _this.state = {
            company: null
        };

        return _this;
    }

    babelHelpers.createClass(artisBox, [{
        key: 'getlink',
        value: function getlink() {
            var _this2 = this;

            fetch(UrlRandom).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this2.setState({ company: data.urls.small });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$offers = this.props.offers,
                idCategoria = _props$offers.idCategoria,
                titulo = _props$offers.titulo,
                precio = _props$offers.precio;


            var image = this.state.company;

            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.artisBox, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                _react2.default.createElement(_reactNative.Image, { style: styles.images, source: { uri: image }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.info, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.name, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        titulo
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.name, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            }
                        },
                        precio
                    )
                )
            );
        }
    }]);
    return artisBox;
}(_react.Component);

exports.default = artisBox;


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
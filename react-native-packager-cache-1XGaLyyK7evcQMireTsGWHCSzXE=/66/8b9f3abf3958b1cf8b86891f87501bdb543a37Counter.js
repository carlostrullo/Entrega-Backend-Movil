Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/node_modules/react-native-counter/src/Counter.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _eases = require('eases');

var _eases2 = babelHelpers.interopRequireDefault(_eases);

var Counter = function (_Component) {
  babelHelpers.inherits(Counter, _Component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: _this.props.start }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startTime = Date.now();
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: 'animate',
    value: function animate() {
      var onComplete = this.props.onComplete;


      if (this.stop) {
        if (onComplete) onComplete();
        return;
      }

      requestAnimationFrame(this.animate.bind(this));
      this.draw();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _props = this.props,
          time = _props.time,
          start = _props.start,
          end = _props.end,
          easing = _props.easing;


      var now = Date.now();
      if (now - this.startTime >= time) this.stop = true;
      var percentage = Math.min((now - this.startTime) / time, 1);
      var easeVal = _eases2.default[easing](percentage);
      var value = start + (end - start) * easeVal;

      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var digits = this.props.digits;
      var value = this.state.value;


      return _react2.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        value.toFixed(digits)
      );
    }
  }]);
  return Counter;
}(_react.Component);

Counter.propTypes = {
  start: _react.PropTypes.number,
  end: _react.PropTypes.number.isRequired,
  digits: _react.PropTypes.number,
  time: _react.PropTypes.number,
  easing: _react.PropTypes.string,
  onComplete: _react.PropTypes.func
};
Counter.defaultProps = {
  start: 0,
  digits: 0,
  time: 1000,
  easing: 'linear'
};
exports.default = Counter;
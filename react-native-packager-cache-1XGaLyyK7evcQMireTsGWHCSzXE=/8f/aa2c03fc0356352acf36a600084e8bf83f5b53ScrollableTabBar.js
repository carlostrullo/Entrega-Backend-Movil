var _jsxFileName = '/home/daca-solutions/computacion/caliPlanner/node_modules/react-native-scrollable-tab-view-mask-bar/ScrollableTabBar.js';
var React = require('react');
var ReactNative = require('react-native');
var View = ReactNative.View,
    Animated = ReactNative.Animated,
    StyleSheet = ReactNative.StyleSheet,
    ScrollView = ReactNative.ScrollView,
    Text = ReactNative.Text,
    Platform = ReactNative.Platform,
    Dimensions = ReactNative.Dimensions,
    Image = ReactNative.Image;

var Button = require('./Button');

var WINDOW_WIDTH = Dimensions.get('window').width;
var MASK_WIDTH = 60;

var MASK_IMG = {
  LEFT: {
    LIGHT: require('./src/mask_left_light.png'),
    DARK: require('./src/mask_left_dark.png'),
    X_LIGHT: require('./src/mask_left_xlight.png')
  },
  RIGHT: {
    LIGHT: require('./src/mask_right_light.png'),
    DARK: require('./src/mask_right_dark.png'),
    X_LIGHT: require('./src/mask_right_xlight.png')
  }
};

var ScrollableTabBar = React.createClass({
  displayName: 'ScrollableTabBar',

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    scrollOffset: React.PropTypes.number,
    style: View.propTypes.style,
    tabStyle: View.propTypes.style,
    tabsContainerStyle: View.propTypes.style,
    textStyle: Text.propTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: View.propTypes.style,
    onScroll: React.PropTypes.func,
    showMask: React.PropTypes.bool,
    maskMode: React.PropTypes.oneOf(['light', 'dark', 'x-light'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      scrollOffset: 52,
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null,
      style: {},
      tabStyle: {},
      tabsContainerStyle: {},
      underlineStyle: {},
      showMask: false,
      maskMode: 'x-light'
    };
  },
  getInitialState: function getInitialState() {
    this._tabsMeasurements = [];
    switch (this.props.maskMode) {
      case 'light':
        this.maskImageSrc = { left: MASK_IMG.LEFT.LIGHT, right: MASK_IMG.RIGHT.LIGHT };
        break;
      case 'dark':
        this.maskImageSrc = { left: MASK_IMG.LEFT.DARK, right: MASK_IMG.RIGHT.DARK };
        break;
      case 'x-light':
        this.maskImageSrc = { left: MASK_IMG.LEFT.X_LIGHT, right: MASK_IMG.RIGHT.X_LIGHT };
        break;
      default:
        this.maskImageSrc = { left: MASK_IMG.LEFT.X_LIGHT, right: MASK_IMG.RIGHT.X_LIGHT };
    }
    return {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null,
      _showLeftMask: false,
      _showRightMask: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.scrollValue.addListener(this.updateView);
  },
  updateView: function updateView(offset) {
    var position = Math.floor(offset.value);
    var pageOffset = offset.value % 1;
    var tabCount = this.props.tabs.length;
    var lastTabPosition = tabCount - 1;

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  },
  necessarilyMeasurementsCompleted: function necessarilyMeasurementsCompleted(position, isLastTab) {
    return this._tabsMeasurements[position] && (isLastTab || this._tabsMeasurements[position + 1]) && this._tabContainerMeasurements && this._containerMeasurements;
  },
  updateTabPanel: function updateTabPanel(position, pageOffset) {
    var containerWidth = this._containerMeasurements.width;
    var tabWidth = this._tabsMeasurements[position].width;
    var nextTabMeasurements = this._tabsMeasurements[position + 1];
    var nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
    var tabOffset = this._tabsMeasurements[position].left;
    var absolutePageOffset = pageOffset * tabWidth;
    var newScrollX = tabOffset + absolutePageOffset;

    newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform.OS === 'android') {
      this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false });
    } else {
      var rightBoundScroll = this._tabContainerMeasurements.width - this._containerMeasurements.width;
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false });
    }
  },
  updateTabUnderline: function updateTabUnderline(position, pageOffset, tabCount) {
    var lineLeft = this._tabsMeasurements[position].left;
    var lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      var nextTabLeft = this._tabsMeasurements[position + 1].left;
      var nextTabRight = this._tabsMeasurements[position + 1].right;

      var newLineLeft = pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft;
      var newLineRight = pageOffset * nextTabRight + (1 - pageOffset) * lineRight;

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft);
    }
  },
  renderTab: function renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    var _props = this.props,
        activeTextColor = _props.activeTextColor,
        inactiveTextColor = _props.inactiveTextColor,
        textStyle = _props.textStyle;

    var textColor = isTabActive ? activeTextColor : inactiveTextColor;
    var fontWeight = isTabActive ? 'bold' : 'normal';

    return React.createElement(
      Button,
      {
        key: name + '_' + page,
        accessible: true,
        accessibilityLabel: name,
        accessibilityTraits: 'button',
        onPress: function onPress() {
          return onPressHandler(page);
        },
        onLayout: onLayoutHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      },
      React.createElement(
        View,
        { style: [styles.tab, this.props.tabStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        },
        React.createElement(
          Text,
          { style: [{ color: textColor, fontWeight: fontWeight }, textStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          },
          name
        )
      )
    );
  },
  measureTab: function measureTab(page, event) {
    var _event$nativeEvent$la = event.nativeEvent.layout,
        x = _event$nativeEvent$la.x,
        width = _event$nativeEvent$la.width,
        height = _event$nativeEvent$la.height;

    this._tabsMeasurements[page] = { left: x, right: x + width, width: width, height: height };
    this.updateView({ value: this.props.scrollValue._value });
  },
  renderLeftMask: function renderLeftMask() {
    return React.createElement(
      View,
      {
        style: [styles.maskImg, { left: 0, opacity: this.state._showLeftMask ? 1 : 0 }],
        pointerEvents: 'none',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      },
      React.createElement(Image, { style: { resizeMode: 'stretch' }, source: this.maskImageSrc.left, __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      })
    );
  },
  renderRightMask: function renderRightMask() {

    return React.createElement(
      View,
      {
        style: [styles.maskImg, { right: 0, opacity: this.state._showRightMask ? 1 : 0 }],
        pointerEvents: 'none',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      },
      React.createElement(Image, { style: { resizeMode: 'stretch' }, source: this.maskImageSrc.right, __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      })
    );
  },
  showLeftMask: function showLeftMask(disable) {
    if (disable !== this.state._showLeftMask) this.setState({ _showLeftMask: disable });
  },
  showRightMask: function showRightMask(disable) {
    if (disable !== this.state._showRightMask) this.setState({ _showRightMask: disable });
  },
  onScroll: function onScroll(_ref) {
    var _props2;

    var x = _ref.nativeEvent.contentOffset.x;

    this.props.onScroll && (_props2 = this.props).onScroll.apply(_props2, arguments);

    if (x >= MASK_WIDTH && !this.state._showLeftMask) {
      this.showLeftMask(true);
    } else if (x <= MASK_WIDTH && this.state._showLeftMask) {
      this.showLeftMask(false);
    }

    if (x >= this._tabContainerMeasurements.width - MASK_WIDTH - WINDOW_WIDTH && this.state._showRightMask) {
      this.showRightMask(false);
    } else if (x <= this._tabContainerMeasurements.width - MASK_WIDTH - WINDOW_WIDTH && !this.state._showRightMask) {
      this.showRightMask(true);
    }
  },
  render: function render() {
    var _this = this;

    var tabUnderlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: 'navy',
      bottom: 0
    };

    var dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline
    };

    return React.createElement(
      View,
      {
        style: [styles.container, { backgroundColor: this.props.backgroundColor }, this.props.style],
        onLayout: this.onContainerLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      },
      React.createElement(
        ScrollView,
        {
          automaticallyAdjustContentInsets: false,
          ref: function ref(scrollView) {
            _this._scrollView = scrollView;
          },
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          showsVerticalScrollIndicator: false,
          directionalLockEnabled: true,
          onScroll: this.onScroll,
          bounces: false,
          scrollsToTop: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          }
        },
        React.createElement(
          View,
          {
            style: [styles.tabs, { width: this.state._containerWidth }, this.props.tabsContainerStyle],
            ref: 'tabContainer',
            onLayout: this.onTabContainerLayout,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 264
            }
          },
          this.props.tabs.map(function (name, page) {
            var isTabActive = _this.props.activeTab === page;
            var renderTab = _this.props.renderTab || _this.renderTab;
            return renderTab(name, page, isTabActive, _this.props.goToPage, _this.measureTab.bind(_this, page));
          }),
          React.createElement(Animated.View, { style: [tabUnderlineStyle, dynamicTabUnderline, this.props.underlineStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            }
          })
        )
      ),
      this.props.showMask && this.renderLeftMask(),
      this.props.showMask && this.renderRightMask()
    );
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.tabs) !== JSON.stringify(nextProps.tabs) && this.state._containerWidth) {
      this.setState({ _containerWidth: null });
    }
  },
  onTabContainerLayout: function onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    var width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    } else {
      this.setState({ _showRightMask: true });
    }
    this.setState({ _containerWidth: width });
    this.updateView({ value: this.props.scrollValue._value });
  },
  onContainerLayout: function onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({ value: this.props.scrollValue._value });
  }
});

module.exports = ScrollableTabBar;

var styles = StyleSheet.create({
  tab: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc'
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  maskImg: {
    position: 'absolute',
    top: 0,
    bottom: 0
  }
});
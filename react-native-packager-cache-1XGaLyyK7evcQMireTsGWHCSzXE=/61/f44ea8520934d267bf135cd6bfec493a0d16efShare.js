
'use strict';

var Platform = require('Platform');

var _require = require('NativeModules'),
    ActionSheetManager = _require.ActionSheetManager,
    ShareModule = _require.ShareModule;

var invariant = require('fbjs/lib/invariant');
var processColor = require('processColor');

var Share = function () {
  function Share() {
    babelHelpers.classCallCheck(this, Share);
  }

  babelHelpers.createClass(Share, null, [{
    key: 'share',
    value: function share(content) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      invariant(typeof content === 'object' && content !== null, 'Content to share must be a valid object');
      invariant(typeof content.url === 'string' || typeof content.message === 'string', 'At least one of URL and message is required');
      invariant(typeof options === 'object' && options !== null, 'Options must be a valid object');

      if (Platform.OS === 'android') {
        invariant(!content.title || typeof content.title === 'string', 'Invalid title: title should be a string.');
        return ShareModule.share(content, options.dialogTitle);
      } else if (Platform.OS === 'ios') {
        return new Promise(function (resolve, reject) {
          ActionSheetManager.showShareActionSheetWithOptions(babelHelpers.extends({}, content, options, { tintColor: processColor(options.tintColor) }), function (error) {
            return reject(error);
          }, function (success, activityType) {
            if (success) {
              resolve({
                'action': 'sharedAction',
                'activityType': activityType
              });
            } else {
              resolve({
                'action': 'dismissedAction'
              });
            }
          });
        });
      } else {
        return Promise.reject(new Error('Unsupported platform'));
      }
    }
  }, {
    key: 'sharedAction',
    get: function get() {
      return 'sharedAction';
    }
  }, {
    key: 'dismissedAction',
    get: function get() {
      return 'dismissedAction';
    }
  }]);
  return Share;
}();

module.exports = Share;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJson = toJson;

var _constants = require("./constants");

var _utils = require("./utils");

var _auth = require("./methods/auth");

var _auth2 = babelHelpers.interopRequireDefault(_auth);

var _currentUser = require("./methods/currentUser");

var _currentUser2 = babelHelpers.interopRequireDefault(_currentUser);

var _users = require("./methods/users");

var _users2 = babelHelpers.interopRequireDefault(_users);

var _photos = require("./methods/photos");

var _photos2 = babelHelpers.interopRequireDefault(_photos);

var _categories = require("./methods/categories");

var _categories2 = babelHelpers.interopRequireDefault(_categories);

var _collections = require("./methods/collections");

var _collections2 = babelHelpers.interopRequireDefault(_collections);

var _search = require("./methods/search");

var _search2 = babelHelpers.interopRequireDefault(_search);

var _stats = require("./methods/stats");

var _stats2 = babelHelpers.interopRequireDefault(_stats);

var Unsplash = function () {
  function Unsplash(options) {
    babelHelpers.classCallCheck(this, Unsplash);

    this._apiUrl = options.apiUrl || _constants.API_URL;
    this._apiVersion = options.apiVersion || _constants.API_VERSION;
    this._applicationId = options.applicationId;
    this._secret = options.secret;
    this._callbackUrl = options.callbackUrl;
    this._bearerToken = options.bearerToken;

    this.auth = _auth2.default.bind(this)();
    this.currentUser = _currentUser2.default.bind(this)();
    this.users = _users2.default.bind(this)();
    this.photos = _photos2.default.bind(this)();
    this.categories = _categories2.default.bind(this)();
    this.collections = _collections2.default.bind(this)();
    this.search = _search2.default.bind(this)();
    this.stats = _stats2.default.bind(this)();
  }

  babelHelpers.createClass(Unsplash, [{
    key: "request",
    value: function request(requestOptions) {
      var _buildFetchOptions$bi = _utils.buildFetchOptions.bind(this)(requestOptions),
          url = _buildFetchOptions$bi.url,
          options = _buildFetchOptions$bi.options;

      return fetch(url, options);
    }
  }]);
  return Unsplash;
}();

exports.default = Unsplash;
function toJson(res) {
  return typeof res.json === "function" ? res.json() : res;
}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _pageview = __webpack_require__(2);

	var _pageview2 = _interopRequireDefault(_pageview);

	var _hotspots = __webpack_require__(8);

	var _hotspots2 = _interopRequireDefault(_hotspots);

	var _event = __webpack_require__(10);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*jshint esversion: 6 */


	(function () {
	  var UT = function UT(cat, uid) {
	    _classCallCheck(this, UT);

	    switch (cat) {
	      case 'pageview':
	        (0, _pageview2.default)(uid);
	        break;
	      case 'hotspots':
	        (0, _hotspots2.default)(uid);
	        break;
	      case 'event':
	        (0, _event2.default)(uid);
	        break;
	      default:
	        (0, _pageview2.default)(uid);
	        break;
	    }
	  };

	  var uTracker = function uTracker(cat, uid) {
	    return new UT(cat, uid);
	  };

	  window.ut = uTracker;
	})();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*jshint esversion: 6 */

	var _fields = __webpack_require__(3);

	var _fields2 = _interopRequireDefault(_fields);

	var _query = __webpack_require__(5);

	var _query2 = _interopRequireDefault(_query);

	var _tracefire = __webpack_require__(6);

	var _tracefire2 = _interopRequireDefault(_tracefire);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	  (function () {
	    var fields = new _fields2.default();

	    var PV = function () {
	      function PV(uid) {
	        _classCallCheck(this, PV);

	        // Get common collection data
	        fields.uid = uid;
	        fields.tt = 'pageview';
	        this.fire();
	      }

	      _createClass(PV, [{
	        key: 'validateField',
	        value: function validateField() {}
	      }, {
	        key: 'fire',
	        value: function fire() {
	          (0, _tracefire2.default)(fields);
	        }
	      }]);

	      return PV;
	    }();

	    var pageview = function pageview(uid) {
	      new PV(uid);
	    };

	    module.exports = pageview;
	  })();
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _cookie = __webpack_require__(4);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Set common data collection fields:
	*   bl: current browser link url.
	*   br: browser info, e.g. Chrome/55.0.2883.95
	*   ul: user language, e.g. en-US
	*   be: browser encode format, e.g. UTF-8
	*   bt: browser title.
	*   sr: screen resolution, e.g. 1440x900
	*   ref: page reference.
	*   tt: track type, e.g. pageview, hotspots
	*   t: timestamp
	*   _u: user information. e.g. wxyu|-|120.21.39.110|-|10, separate by '|-|', 1. user name, 2. ip, 3. visits count
	*   uid: unique id, from platform. each use should has an unique id.
	*
	*   Extra:
	*   et: element type, e.g. link, button
	*   url(Event), event clicked link url.
	*   label(Event), event clicked label name.
	*   x(Event), clicked clientX
	*   y(Event), clicked clientY
	*/
	{
	  var __fields = function __fields() {
	    this.bl = location.href;
	    this.br = navigator.userAgent;
	    this.ul = navigator.browserLanguage || navigator.language;
	    this.be = 'UTF-8';
	    this.bt = document.title;
	    this.sr = window.screen.width + 'x' + window.screen.height;
	    this.ref = document.referrer;
	    this.t = +new Date();
	    this._u = _cookie2.default.read('uname') + '|-|' + _cookie2.default.read('ip') + '|-|' + _cookie2.default.read('vc');
	    this.uid = '';
	  };

	  module.exports = __fields;
	} /*jshint esversion: 6 */

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	/*jshint esversion: 6 */
	{
	  var cookie = {
	    read: function read(key) {
	      var result;
	      return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? result[1] : null;
	    },
	    write: function write(key, val) {}
	  };

	  module.exports = cookie;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/*jshint esversion: 6 */
	{
	  var query = function query(q) {
	    return document.querySelectorAll(q);
	  };
	  module.exports = query;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _obj2url = __webpack_require__(7);

	var _obj2url2 = _interopRequireDefault(_obj2url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	{
	  var tracefire = function tracefire(fields) {
	    var collect = new Image();
	    collect.src = './trace/?' + (0, _obj2url2.default)(fields);
	  };
	  module.exports = tracefire;
	} /*jshint esversion: 6 */

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/*jshint esversion: 6 */
	{
	  var url = function url(obj) {
	    var _2url = Object.keys(obj).map(function (k) {
	      return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
	    }).join('&');

	    return _2url;
	  };

	  module.exports = url;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*jshint esversion: 6 */

	var _fields = __webpack_require__(3);

	var _fields2 = _interopRequireDefault(_fields);

	var _query = __webpack_require__(5);

	var _query2 = _interopRequireDefault(_query);

	var _tracefire = __webpack_require__(6);

	var _tracefire2 = _interopRequireDefault(_tracefire);

	var _on = __webpack_require__(9);

	var _on2 = _interopRequireDefault(_on);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	  (function () {
	    var fields = new _fields2.default();

	    var Hotspots = function () {
	      function Hotspots(uid) {
	        _classCallCheck(this, Hotspots);

	        // Get common collection data
	        fields.uid = uid;
	        fields.tt = 'hotspots';
	        this.fire();
	      }

	      _createClass(Hotspots, [{
	        key: 'validateField',
	        value: function validateField() {}
	      }, {
	        key: 'fire',
	        value: function fire() {
	          (0, _on2.default)((0, _query2.default)('body'), 'click', function (e) {
	            fields.x = e.clientX;
	            fields.y = e.clientY;

	            (0, _tracefire2.default)(fields);
	          }, false);
	        }
	      }]);

	      return Hotspots;
	    }();

	    var hotspots = function hotspots(uid) {
	      new Hotspots(uid);
	    };

	    module.exports = hotspots;
	  })();
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	/*jshint esversion: 6 */
	{
	  var on = function on(dom, eventName, callback, useCapture) {
	    dom.forEach(function (e, idx) {
	      e.addEventListener(eventName, callback, useCapture);
	    });
	  };
	  module.exports = on;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*jshint esversion: 6 */

	var _fields = __webpack_require__(3);

	var _fields2 = _interopRequireDefault(_fields);

	var _query = __webpack_require__(5);

	var _query2 = _interopRequireDefault(_query);

	var _tracefire = __webpack_require__(6);

	var _tracefire2 = _interopRequireDefault(_tracefire);

	var _on = __webpack_require__(9);

	var _on2 = _interopRequireDefault(_on);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	  (function () {
	    var fields = new _fields2.default();

	    var Event = function () {
	      function Event(uid) {
	        _classCallCheck(this, Event);

	        // Get common collection data
	        fields.uid = uid;
	        fields.tt = 'event';
	        this.fire();
	      }

	      _createClass(Event, [{
	        key: 'validateField',
	        value: function validateField() {}
	      }, {
	        key: 'fire',
	        value: function fire() {
	          (0, _on2.default)((0, _query2.default)('body'), 'click', function (e) {
	            switch (e.target.nodeName) {
	              case 'A':
	                fields.et = 'link';
	                fields.url = e.target.href;
	                fields.label = e.target.innerText;
	                break;
	              case 'BUTTON':
	                fields.et = 'button';
	                fields.url = '';
	                fields.label = e.target.innerText;
	                break;
	              default:
	                fields.eleType = 'undefined';
	                fields.url = '';
	                fields.label = '';
	                break;
	            }

	            if (fields.eleType !== 'undefined') {
	              (0, _tracefire2.default)(fields);
	            }
	          }, false);
	        }
	      }]);

	      return Event;
	    }();

	    var event = function event(uid) {
	      new Event(uid);
	    };

	    module.exports = event;
	  })();
	}

/***/ }
/******/ ]);
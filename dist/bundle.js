/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Buttom = __webpack_require__(3);
	ReactDOM.render(React.createElement("h1", null, "Hello, world!"), document.getElementById('my-app'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconButton = exports.Button = undefined;
	
	var _identifiers = __webpack_require__(4);
	
	var _reactCssThemr = __webpack_require__(5);
	
	var _Button = __webpack_require__(9);
	
	var _IconButton = __webpack_require__(15);
	
	var _FontIcon = __webpack_require__(11);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _ripple = __webpack_require__(16);
	
	var _ripple2 = _interopRequireDefault(_ripple);
	
	var _theme = __webpack_require__(21);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = (0, _Button.buttonFactory)((0, _ripple2.default)({ centered: false }), _FontIcon2.default);
	var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple2.default)({ centered: true }), _FontIcon2.default);
	var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(Button);
	var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _theme2.default)(IconButton);
	
	exports.default = ThemedButton;
	exports.Button = ThemedButton;
	exports.IconButton = ThemedIconButton;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APP_BAR = exports.APP_BAR = 'RTAppBar';
	var AUTOCOMPLETE = exports.AUTOCOMPLETE = 'RTAutocomplete';
	var AVATAR = exports.AVATAR = 'RTAvatar';
	var BUTTON = exports.BUTTON = 'RTButton';
	var CARD = exports.CARD = 'RTCard';
	var CHIP = exports.CHIP = 'RTChip';
	var CHECKBOX = exports.CHECKBOX = 'RTCheckbox';
	var DATE_PICKER = exports.DATE_PICKER = 'RTDatePicker';
	var DIALOG = exports.DIALOG = 'RTDialog';
	var DROPDOWN = exports.DROPDOWN = 'RTDropdown';
	var INPUT = exports.INPUT = 'RTInput';
	var LAYOUT = exports.LAYOUT = 'RTLayout';
	var LINK = exports.LINK = 'RTLink';
	var LIST = exports.LIST = 'RTList';
	var MENU = exports.MENU = 'RTMenu';
	var NAVIGATION = exports.NAVIGATION = 'RTNavigation';
	var OVERLAY = exports.OVERLAY = 'RTOverlay';
	var PROGRESS_BAR = exports.PROGRESS_BAR = 'RTProgressBar';
	var RADIO = exports.RADIO = 'RTRadio';
	var RIPPLE = exports.RIPPLE = 'RTRipple';
	var SLIDER = exports.SLIDER = 'RTSlider';
	var SNACKBAR = exports.SNACKBAR = 'RTSnackbar';
	var SWITCH = exports.SWITCH = 'RTSwitch';
	var TABLE = exports.TABLE = 'RTTable';
	var TABS = exports.TABS = 'RTTabs';
	var TOOLTIP = exports.TOOLTIP = 'RTTooltip';
	var TIMEPICKER = exports.TIMEPICKER = 'RTTimePicker';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ThemeProvider = __webpack_require__(6);
	
	Object.defineProperty(exports, 'ThemeProvider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ThemeProvider).default;
	  }
	});
	
	var _themr = __webpack_require__(8);
	
	Object.defineProperty(exports, 'themr', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_themr).default;
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _themrShape = __webpack_require__(7);
	
	var _themrShape2 = _interopRequireDefault(_themrShape);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ThemeProvider = (_temp = _class = function (_Component) {
	  _inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ThemeProvider).apply(this, arguments));
	  }
	
	  _createClass(ThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        themr: {
	          theme: this.props.theme
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react.Children.only(this.props.children);
	    }
	  }]);
	
	  return ThemeProvider;
	}(_react.Component), _class.propTypes = {
	  children: _react.PropTypes.element.isRequired,
	  theme: _react.PropTypes.object.isRequired
	}, _class.defaultProps = {
	  theme: {}
	}, _class.childContextTypes = {
	  themr: _themrShape2.default.isRequired
	}, _temp);
	exports.default = ThemeProvider;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	exports.default = _react.PropTypes.shape({
	  theme: _react.PropTypes.object.isRequired
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var COMPOSE_DEEPLY = 'deeply';
	var COMPOSE_SOFTLY = 'softly';
	var DONT_COMPOSE = false;
	
	var DEFAULT_OPTIONS = {
	  composeTheme: COMPOSE_DEEPLY
	};
	
	exports.default = function (componentName, localTheme) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_OPTIONS : arguments[2];
	  return function (ThemedComponent) {
	    var _class, _temp;
	
	    var optionComposeTheme = options.composeTheme;
	
	    validateComposeOption(optionComposeTheme);
	    return _temp = _class = function (_Component) {
	      _inherits(Themed, _Component);
	
	      function Themed() {
	        _classCallCheck(this, Themed);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Themed).apply(this, arguments));
	      }
	
	      _createClass(Themed, [{
	        key: 'getThemeNotComposed',
	        value: function getThemeNotComposed() {
	          if (this.props.theme) return this.props.theme;
	          if (localTheme) return localTheme;
	          return this.getContextTheme();
	        }
	      }, {
	        key: 'getContextTheme',
	        value: function getContextTheme() {
	          return this.context.themr ? this.context.themr.theme[componentName] : {};
	        }
	      }, {
	        key: 'getTheme',
	        value: function getTheme() {
	          return this.props.composeTheme === COMPOSE_SOFTLY ? Object.assign({}, this.getContextTheme(), localTheme, this.props.theme) : themeable(themeable(this.getContextTheme(), localTheme), this.props.theme);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _props = this.props;
	          var composeTheme = _props.composeTheme;
	
	          var rest = _objectWithoutProperties(_props, ['composeTheme']);
	
	          return _react2.default.createElement(ThemedComponent, _extends({}, rest, {
	            theme: composeTheme ? this.getTheme() : this.getThemeNotComposed()
	          }));
	        }
	      }]);
	
	      return Themed;
	    }(_react.Component), _class.displayName = 'Themed ' + ThemedComponent.name, _class.contextTypes = {
	      themr: _react.PropTypes.object
	    }, _class.propTypes = {
	      composeTheme: _react.PropTypes.oneOf([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE]),
	      theme: _react.PropTypes.object
	    }, _class.defaultProps = {
	      composeTheme: optionComposeTheme
	    }, _temp;
	  };
	};
	
	function themeable() {
	  var style = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var theme = arguments[1];
	
	  if (!theme) return style;
	  return [].concat(_toConsumableArray(Object.keys(theme)), _toConsumableArray(Object.keys(style))).reduce(function (result, key) {
	    return typeof theme[key] === 'string' && style[key] && theme[key].indexOf(style[key]) === -1 ? _extends({}, result, _defineProperty({}, key, style[key] + ' ' + theme[key])) : _extends({}, result, _defineProperty({}, key, theme[key] || style[key]));
	  }, {});
	}
	
	function validateComposeOption(composeTheme) {
	  if ([COMPOSE_DEEPLY, COMPOSE_SOFTLY, DONT_COMPOSE].indexOf(composeTheme) === -1) {
	    throw new Error('Invalid composeTheme option for react-css-themr. Valid composition options are ' + COMPOSE_DEEPLY + ', ' + COMPOSE_SOFTLY + ' and ' + DONT_COMPOSE + '. The given option was ' + composeTheme);
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Button = exports.buttonFactory = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(10);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssThemr = __webpack_require__(5);
	
	var _identifiers = __webpack_require__(4);
	
	var _FontIcon = __webpack_require__(11);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Ripple = __webpack_require__(12);
	
	var _Ripple2 = _interopRequireDefault(_Ripple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var factory = function factory(ripple, FontIcon) {
	  var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button() {
	      var _Object$getPrototypeO;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, Button);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Button)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	      }, _this.handleMouseLeave = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(Button, [{
	      key: 'render',
	      value: function render() {
	        var _classnames;
	
	        var _props = this.props;
	        var accent = _props.accent;
	        var children = _props.children;
	        var className = _props.className;
	        var flat = _props.flat;
	        var floating = _props.floating;
	        var href = _props.href;
	        var icon = _props.icon;
	        var inverse = _props.inverse;
	        var label = _props.label;
	        var mini = _props.mini;
	        var neutral = _props.neutral;
	        var primary = _props.primary;
	        var theme = _props.theme;
	        var raised = _props.raised;
	
	        var others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'flat', 'floating', 'href', 'icon', 'inverse', 'label', 'mini', 'neutral', 'primary', 'theme', 'raised']);
	
	        var element = href ? 'a' : 'button';
	        var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
	        var shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';
	
	        var classes = (0, _classnames3.default)(theme.button, [theme[shape]], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.mini, mini), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);
	
	        var props = _extends({}, others, {
	          href: href,
	          ref: 'button',
	          className: classes,
	          disabled: this.props.disabled,
	          onMouseUp: this.handleMouseUp,
	          onMouseLeave: this.handleMouseLeave,
	          'data-react-toolbox': 'button'
	        });
	
	        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, label, children);
	      }
	    }]);
	
	    return Button;
	  }(_react.Component);
	
	  Button.propTypes = {
	    accent: _react.PropTypes.bool,
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    flat: _react.PropTypes.bool,
	    floating: _react.PropTypes.bool,
	    href: _react.PropTypes.string,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    inverse: _react.PropTypes.bool,
	    label: _react.PropTypes.string,
	    mini: _react.PropTypes.bool,
	    neutral: _react.PropTypes.bool,
	    onMouseLeave: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    primary: _react.PropTypes.bool,
	    raised: _react.PropTypes.bool,
	    theme: _react.PropTypes.shape({
	      accent: _react.PropTypes.string,
	      button: _react.PropTypes.string,
	      flat: _react.PropTypes.string,
	      floating: _react.PropTypes.string,
	      icon: _react.PropTypes.string,
	      inverse: _react.PropTypes.string,
	      mini: _react.PropTypes.string,
	      neutral: _react.PropTypes.string,
	      primary: _react.PropTypes.string,
	      raised: _react.PropTypes.string,
	      rippleWrapper: _react.PropTypes.string,
	      toggle: _react.PropTypes.string
	    }),
	    type: _react.PropTypes.string
	  };
	  Button.defaultProps = {
	    accent: false,
	    className: '',
	    flat: false,
	    floating: false,
	    mini: false,
	    neutral: true,
	    primary: false,
	    raised: false
	  };
	
	
	  return ripple(Button);
	};
	
	var Button = factory((0, _Ripple2.default)({ centered: false }), _FontIcon2.default);
	exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(Button);
	exports.buttonFactory = factory;
	exports.Button = Button;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FontIcon = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FontIcon = function FontIcon(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var value = _ref.value;
	
	  var other = _objectWithoutProperties(_ref, ['children', 'className', 'value']);
	
	  return _react2.default.createElement(
	    'span',
	    _extends({
	      'data-react-toolbox': 'font-icon',
	      className: (0, _classnames2.default)({ 'material-icons': typeof value === 'string' || typeof children === 'string' }, className)
	    }, other),
	    value,
	    children
	  );
	};
	
	FontIcon.propTypes = {
	  children: _react.PropTypes.any,
	  className: _react.PropTypes.string,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
	};
	
	FontIcon.defaultProps = {
	  className: ''
	};
	
	exports.default = FontIcon;
	exports.FontIcon = FontIcon;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames2 = __webpack_require__(10);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssThemr = __webpack_require__(5);
	
	var _identifiers = __webpack_require__(4);
	
	var _events = __webpack_require__(13);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _prefixer = __webpack_require__(14);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaults = {
	  centered: false,
	  className: '',
	  spread: 2,
	  theme: {}
	};
	
	var rippleFactory = function rippleFactory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var _defaults$options = _extends({}, defaults, options);
	
	  var defaultCentered = _defaults$options.centered;
	  var defaultClassName = _defaults$options.className;
	  var defaultSpread = _defaults$options.spread;
	  var defaultTheme = _defaults$options.theme;
	
	  var props = _objectWithoutProperties(_defaults$options, ['centered', 'className', 'spread', 'theme']);
	
	  return function (ComposedComponent) {
	    var RippledComponent = function (_Component) {
	      _inherits(RippledComponent, _Component);
	
	      function RippledComponent() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, RippledComponent);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RippledComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	          active: false,
	          left: null,
	          restarting: false,
	          top: null,
	          width: null
	        }, _this.handleEnd = function () {
	          document.removeEventListener(_this.touch ? 'touchend' : 'mouseup', _this.handleEnd);
	          _this.setState({ active: false });
	        }, _this.start = function (_ref) {
	          var pageX = _ref.pageX;
	          var pageY = _ref.pageY;
	          var touch = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	          if (!_this._isTouchRippleReceivingMouseEvent(touch)) {
	            _this.touch = touch;
	            document.addEventListener(_this.touch ? 'touchend' : 'mouseup', _this.handleEnd);
	
	            var _this$_getDescriptor = _this._getDescriptor(pageX, pageY);
	
	            var top = _this$_getDescriptor.top;
	            var left = _this$_getDescriptor.left;
	            var width = _this$_getDescriptor.width;
	
	            _this.setState({ active: false, restarting: true, top: top, left: left, width: width }, function () {
	              _this.refs.ripple.offsetWidth; //eslint-disable-line no-unused-expressions
	              _this.setState({ active: true, restarting: false });
	            });
	          }
	        }, _this.handleMouseDown = function (event) {
	          if (!_this.props.disabled) _this.start(event);
	          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }
	
	      _createClass(RippledComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          var _this2 = this;
	
	          if (this.props.onRippleEnded) {
	            _events2.default.addEventListenerOnTransitionEnded(this.refs.ripple, function (evt) {
	              if (evt.propertyName === 'transform') _this2.props.onRippleEnded(evt);
	            });
	          }
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          if (this.props.onRippleEnded) {
	            _events2.default.removeEventListenerOnTransitionEnded(this.refs.ripple);
	          }
	        }
	      }, {
	        key: '_isTouchRippleReceivingMouseEvent',
	        value: function _isTouchRippleReceivingMouseEvent(touch) {
	          return this.touch && !touch;
	        }
	      }, {
	        key: '_getDescriptor',
	        value: function _getDescriptor(pageX, pageY) {
	          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
	
	          var left = _ReactDOM$findDOMNode.left;
	          var top = _ReactDOM$findDOMNode.top;
	          var height = _ReactDOM$findDOMNode.height;
	          var width = _ReactDOM$findDOMNode.width;
	          var _props = this.props;
	          var centered = _props.rippleCentered;
	          var spread = _props.rippleSpread;
	
	          return {
	            left: centered ? 0 : pageX - left - width / 2 - window.scrollX,
	            top: centered ? 0 : pageY - top - height / 2 - window.scrollY,
	            width: width * spread
	          };
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          if (!this.props.ripple) {
	            return _react2.default.createElement(ComposedComponent, this.props);
	          } else {
	            var _classnames;
	
	            var _props2 = this.props;
	            var children = _props2.children;
	            var ripple = _props2.ripple;
	            var onRippleEnded = _props2.onRippleEnded;
	            var className = _props2.rippleClassName;
	            var centered = _props2.rippleCentered;
	            var spread = _props2.rippleSpread;
	
	            var other = _objectWithoutProperties(_props2, ['children', 'ripple', 'onRippleEnded', 'rippleClassName', 'rippleCentered', 'rippleSpread']);
	
	            var rippleClassName = (0, _classnames3.default)(this.props.theme.ripple, (_classnames = {}, _defineProperty(_classnames, this.props.theme.rippleActive, this.state.active), _defineProperty(_classnames, this.props.theme.rippleRestarting, this.state.restarting), _classnames), className);
	
	            var _state = this.state;
	            var left = _state.left;
	            var top = _state.top;
	            var width = _state.width;
	
	            var scale = this.state.restarting ? 0 : 1;
	            var rippleStyle = (0, _prefixer2.default)({
	              transform: 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')'
	            }, { width: width, height: width });
	
	            return _react2.default.createElement(
	              ComposedComponent,
	              _extends({}, other, { onMouseDown: this.handleMouseDown }),
	              children ? children : null,
	              _react2.default.createElement(
	                'span',
	                _extends({ 'data-react-toolbox': 'ripple', className: this.props.theme.rippleWrapper }, props),
	                _react2.default.createElement('span', { ref: 'ripple', role: 'ripple', className: rippleClassName, style: rippleStyle })
	              )
	            );
	          }
	        }
	      }]);
	
	      return RippledComponent;
	    }(_react.Component);
	
	    RippledComponent.propTypes = {
	      children: _react.PropTypes.any,
	      disabled: _react.PropTypes.bool,
	      onRippleEnded: _react.PropTypes.func,
	      ripple: _react.PropTypes.bool,
	      rippleCentered: _react.PropTypes.bool,
	      rippleClassName: _react.PropTypes.string,
	      rippleSpread: _react.PropTypes.number,
	      theme: _react.PropTypes.shape({
	        ripple: _react.PropTypes.string,
	        rippleActive: _react.PropTypes.string,
	        rippleRestarting: _react.PropTypes.string,
	        rippleWrapper: _react.PropTypes.string
	      })
	    };
	    RippledComponent.defaultProps = {
	      disabled: false,
	      ripple: true,
	      rippleCentered: defaultCentered,
	      rippleClassName: defaultClassName,
	      rippleSpread: defaultSpread
	    };
	
	
	    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
	  };
	};
	
	exports.default = rippleFactory;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  getMousePosition: function getMousePosition(event) {
	    return {
	      x: event.pageX - (window.scrollX || window.pageXOffset),
	      y: event.pageY - (window.scrollY || window.pageYOffset)
	    };
	  },
	  getTouchPosition: function getTouchPosition(event) {
	    return {
	      x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
	      y: event.touches[0].pageY - (window.scrollY || window.pageYOffset)
	    };
	  },
	  pauseEvent: function pauseEvent(event) {
	    event.stopPropagation();
	    event.preventDefault();
	  },
	  addEventsToDocument: function addEventsToDocument(eventMap) {
	    for (var key in eventMap) {
	      document.addEventListener(key, eventMap[key], false);
	    }
	  },
	  removeEventsFromDocument: function removeEventsFromDocument(eventMap) {
	    for (var key in eventMap) {
	      document.removeEventListener(key, eventMap[key], false);
	    }
	  },
	  targetIsDescendant: function targetIsDescendant(event, parent) {
	    var node = event.target;
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	    return false;
	  },
	  addEventListenerOnTransitionEnded: function addEventListenerOnTransitionEnded(element, fn) {
	    var eventName = transitionEventNamesFor(element);
	    if (!eventName) return false;
	    element.addEventListener(eventName, fn);
	    return true;
	  },
	  removeEventListenerOnTransitionEnded: function removeEventListenerOnTransitionEnded(element) {
	    var eventName = transitionEventNamesFor(element);
	    if (!eventName) return false;
	    element.removeEventListener(eventName);
	    return true;
	  }
	};
	
	
	var TRANSITIONS = {
	  'transition': 'transitionend',
	  'OTransition': 'oTransitionEnd',
	  'MozTransition': 'transitionend',
	  'WebkitTransition': 'webkitTransitionEnd'
	};
	
	function transitionEventNamesFor(element) {
	  for (var transition in TRANSITIONS) {
	    if (element.style[transition] !== undefined) {
	      return TRANSITIONS[transition];
	    }
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var WEBKIT = 'Webkit';
	var MICROSOFT = 'Ms';
	
	var properties = {
	  transform: [WEBKIT, MICROSOFT]
	};
	
	function capitalize(string) {
	  return string.charAt(0).toUpperCase() + string.substr(1);
	}
	
	function getPrefixes(property, value) {
	  return properties[property].reduce(function (acc, item) {
	    acc['' + item + capitalize(property)] = value;
	    return acc;
	  }, {});
	}
	
	function addPrefixesTo(style, property, value) {
	  var vendor = getPrefixes(property, value);
	  for (var prefix in vendor) {
	    style[prefix] = vendor[prefix];
	  }
	
	  return style;
	}
	
	function prefixer(style) {
	  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _style = defaultValue;
	  for (var property in style) {
	    _style[property] = style[property];
	    if (properties[property]) {
	      addPrefixesTo(_style, property, style[property]);
	    }
	  }
	
	  return _style;
	}
	
	exports.default = prefixer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconButton = exports.iconButtonFactory = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(10);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssThemr = __webpack_require__(5);
	
	var _identifiers = __webpack_require__(4);
	
	var _FontIcon = __webpack_require__(11);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Ripple = __webpack_require__(12);
	
	var _Ripple2 = _interopRequireDefault(_Ripple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var factory = function factory(ripple, FontIcon) {
	  var IconButton = function (_Component) {
	    _inherits(IconButton, _Component);
	
	    function IconButton() {
	      var _Object$getPrototypeO;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, IconButton);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(IconButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleMouseUp = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	      }, _this.handleMouseLeave = function (event) {
	        _this.refs.button.blur();
	        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(IconButton, [{
	      key: 'render',
	      value: function render() {
	        var _classnames;
	
	        var _props = this.props;
	        var accent = _props.accent;
	        var children = _props.children;
	        var className = _props.className;
	        var href = _props.href;
	        var icon = _props.icon;
	        var inverse = _props.inverse;
	        var neutral = _props.neutral;
	        var primary = _props.primary;
	        var theme = _props.theme;
	
	        var others = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'href', 'icon', 'inverse', 'neutral', 'primary', 'theme']);
	
	        var element = href ? 'a' : 'button';
	        var level = primary ? 'primary' : accent ? 'accent' : 'neutral';
	        var classes = (0, _classnames3.default)([theme.toggle], (_classnames = {}, _defineProperty(_classnames, theme[level], neutral), _defineProperty(_classnames, theme.inverse, inverse), _classnames), className);
	
	        var props = _extends({}, others, {
	          href: href,
	          ref: 'button',
	          className: classes,
	          disabled: this.props.disabled,
	          onMouseUp: this.handleMouseUp,
	          onMouseLeave: this.handleMouseLeave,
	          'data-react-toolbox': 'button'
	        });
	
	        return _react2.default.createElement(element, props, icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, children);
	      }
	    }]);
	
	    return IconButton;
	  }(_react.Component);
	
	  IconButton.propTypes = {
	    accent: _react.PropTypes.bool,
	    children: _react.PropTypes.node,
	    className: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    href: _react.PropTypes.string,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	    inverse: _react.PropTypes.bool,
	    neutral: _react.PropTypes.bool,
	    onMouseLeave: _react.PropTypes.func,
	    onMouseUp: _react.PropTypes.func,
	    primary: _react.PropTypes.bool,
	    theme: _react.PropTypes.object,
	    type: _react.PropTypes.string
	  };
	  IconButton.defaultProps = {
	    accent: false,
	    className: '',
	    neutral: true,
	    primary: false
	  };
	
	
	  return ripple(IconButton);
	};
	
	var IconButton = factory((0, _Ripple2.default)({ centered: true }), _FontIcon2.default);
	exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(IconButton);
	exports.iconButtonFactory = factory;
	exports.IconButton = IconButton;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Ripple = __webpack_require__(12);
	
	var _Ripple2 = _interopRequireDefault(_Ripple);
	
	var _theme = __webpack_require__(17);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (options) {
	  return (0, _Ripple2.default)(_extends({}, options, { theme: _theme2.default }));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./theme.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./theme.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".ripple {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  pointer-events: none;\n  background-color: currentColor;\n  border-radius: 50%;\n  transform-origin: 50% 50%; }\n\n.rippleWrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: none; }\n\n.ripple {\n  transition-duration: 800ms; }\n  .ripple.rippleRestarting {\n    opacity: 0.3;\n    transition-property: none; }\n  .ripple.rippleActive {\n    opacity: 0.3;\n    transition-property: transform; }\n  .ripple:not(.rippleActive):not(.rippleRestarting) {\n    opacity: 0;\n    transition-property: opacity, transform; }\n", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./theme.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./theme.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".button {\n  position: relative; }\n\n.raised, .flat, .floating, .toggle {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 500;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  position: relative;\n  display: inline-block;\n  height: 3.6rem;\n  flex-direction: row;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  line-height: 3.6rem;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1); }\n  .raised::-moz-focus-inner, .flat::-moz-focus-inner, .floating::-moz-focus-inner, .toggle::-moz-focus-inner {\n    border: 0; }\n  .raised > span:not([data-react-toolbox=\"tooltip\"]), .flat > span:not([data-react-toolbox=\"tooltip\"]), .floating > span:not([data-react-toolbox=\"tooltip\"]), .toggle > span:not([data-react-toolbox=\"tooltip\"]) {\n    display: inline-block;\n    line-height: 3.6rem;\n    vertical-align: middle; }\n  .raised > svg, .flat > svg, .floating > svg, .toggle > svg {\n    display: inline-block;\n    width: 1em;\n    height: 3.6rem;\n    font-size: 120%;\n    vertical-align: middle;\n    fill: currentColor; }\n  .raised > *, .flat > *, .floating > *, .toggle > * {\n    pointer-events: none; }\n  .raised > .rippleWrapper, .flat > .rippleWrapper, .floating > .rippleWrapper, .toggle > .rippleWrapper {\n    overflow: hidden; }\n  [disabled].raised, [disabled].flat, [disabled].floating, [disabled].toggle {\n    color: rgba(0, 0, 0, 0.26);\n    pointer-events: none;\n    cursor: auto; }\n\n.raised, .flat {\n  min-width: 9rem;\n  padding: 0 1.2rem;\n  border-radius: 0.2rem; }\n  .raised .icon, .flat .icon {\n    margin-right: 0.6rem;\n    font-size: 120%;\n    vertical-align: middle; }\n  .raised > svg, .flat > svg {\n    margin-right: 0.5rem; }\n\n[disabled].raised, [disabled].floating {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.raised:active, .floating:active {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); }\n\n.raised:focus:not(:active), .floating:focus:not(:active) {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36); }\n\n.raised {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.flat {\n  background: transparent; }\n\n.floating {\n  width: 5.6rem;\n  height: 5.6rem;\n  font-size: 2.4rem;\n  border-radius: 50%;\n  box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24); }\n  .floating .icon {\n    line-height: 5.6rem; }\n  .floating > .rippleWrapper {\n    border-radius: 50%; }\n  .floating.mini {\n    width: 4rem;\n    height: 4rem;\n    font-size: 1.77778rem; }\n    .floating.mini .icon {\n      line-height: 4rem; }\n\n.toggle {\n  width: 3.6rem;\n  background: transparent;\n  border-radius: 50%; }\n  .toggle > .icon, .toggle svg {\n    font-size: 2rem;\n    line-height: 3.6rem;\n    vertical-align: middle; }\n  .toggle > .rippleWrapper {\n    border-radius: 50%; }\n\n.neutral:not([disabled]).raised, .neutral:not([disabled]).floating {\n  color: #212121;\n  background-color: white; }\n\n.neutral:not([disabled]).flat, .neutral:not([disabled]).toggle {\n  color: #212121; }\n  .neutral:not([disabled]).flat:focus:not(:active), .neutral:not([disabled]).toggle:focus:not(:active) {\n    background: rgba(33, 33, 33, 0.2); }\n\n.neutral:not([disabled]).flat:hover {\n  background: rgba(33, 33, 33, 0.2); }\n\n.neutral:not([disabled]).inverse.raised, .neutral:not([disabled]).inverse.floating {\n  color: white;\n  background-color: #212121; }\n\n.neutral:not([disabled]).inverse.flat, .neutral:not([disabled]).inverse.toggle {\n  color: white; }\n  .neutral:not([disabled]).inverse.flat:focus:not(:active), .neutral:not([disabled]).inverse.toggle:focus:not(:active) {\n    background: rgba(33, 33, 33, 0.2); }\n\n.neutral:not([disabled]).inverse.flat:hover {\n  background: rgba(33, 33, 33, 0.2); }\n\n.primary:not([disabled]).raised, .primary:not([disabled]).floating {\n  color: white;\n  background: #3f51b5; }\n\n.primary:not([disabled]).flat, .primary:not([disabled]).toggle {\n  color: #3f51b5; }\n  .primary:not([disabled]).flat:focus:not(:active), .primary:not([disabled]).toggle:focus:not(:active) {\n    background: rgba(63, 81, 181, 0.2); }\n\n.primary:not([disabled]).flat:hover {\n  background: rgba(63, 81, 181, 0.2); }\n\n.accent:not([disabled]).raised, .accent:not([disabled]).floating {\n  color: white;\n  background: #ff4081; }\n\n.accent:not([disabled]).flat, .accent:not([disabled]).toggle {\n  color: #ff4081; }\n  .accent:not([disabled]).flat:focus:not(:active), .accent:not([disabled]).toggle:focus:not(:active) {\n    background: rgba(255, 64, 129, 0.2); }\n\n.accent:not([disabled]).flat:hover {\n  background: rgba(255, 64, 129, 0.2); }\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
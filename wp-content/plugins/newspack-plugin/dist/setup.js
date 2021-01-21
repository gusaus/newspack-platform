(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"setup": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/wizards/setup/index.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/wizards/setup/index.js":
/*!***************************************!*\
  !*** ./assets/wizards/setup/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/objectSpread2.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shared_js_public_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/js/public-path */ \"./assets/shared/js/public-path.js\");\n/* harmony import */ var _shared_js_public_path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shared_js_public_path__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _views___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/ */ \"./assets/wizards/setup/views/index.js\");\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/src */ \"./assets/components/src/index.js\");\n/* harmony import */ var _components_src_proxied_imports_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/src/proxied-imports/router */ \"./assets/components/src/proxied-imports/router.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.scss */ \"./assets/wizards/setup/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n/**\n * Setup\n */\n\n/**\n * WordPress dependencies.\n */\n\n\n\n\n/**\n * Internal dependencies.\n */\n\n\n\n\n\nvar HashRouter = _components_src_proxied_imports_router__WEBPACK_IMPORTED_MODULE_14__[\"default\"].HashRouter,\n    Redirect = _components_src_proxied_imports_router__WEBPACK_IMPORTED_MODULE_14__[\"default\"].Redirect,\n    Route = _components_src_proxied_imports_router__WEBPACK_IMPORTED_MODULE_14__[\"default\"].Route;\nvar REQUIRED_PLUGINS = ['jetpack', 'amp', 'pwa', 'gutenberg', 'wordpress-seo', 'google-site-kit', 'newspack-blocks', 'newspack-theme'];\n/**\n * Wizard for setting up ability to take payments.\n * May have other settings added to it in the future.\n */\n\nvar SetupWizard = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SetupWizard, _Component);\n\n  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_6___default()(SetupWizard);\n\n  /**\n   * Constructor.\n   */\n  function SetupWizard() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SetupWizard);\n\n    _this = _super.apply(this, arguments);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"componentDidMount\", function () {\n      _this.retrieveProfile();\n\n      _this.retrieveTheme();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"updateProfile\", function () {\n      var _this$props = _this.props,\n          setError = _this$props.setError,\n          wizardApiFetch = _this$props.wizardApiFetch;\n      var profile = _this.state.profile;\n      var params = {\n        path: '/newspack/v1/profile/',\n        method: 'POST',\n        data: {\n          profile: profile\n        }\n      };\n      return new Promise(function (resolve, reject) {\n        wizardApiFetch(params).then(function (response) {\n          _this.setState({\n            profile: response.profile\n          }, function () {\n            return resolve(response);\n          });\n        }).catch(function (error) {\n          console.log('[Profile Update Error]', error);\n          setError({\n            error: error\n          });\n          reject(error);\n        });\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"retrieveProfile\", function () {\n      var _this$props2 = _this.props,\n          setError = _this$props2.setError,\n          wizardApiFetch = _this$props2.wizardApiFetch;\n      var params = {\n        path: '/newspack/v1/profile/',\n        method: 'GET'\n      };\n      return new Promise(function (resolve, reject) {\n        wizardApiFetch(params).then(function (response) {\n          var profile = response.profile,\n              currencies = response.currencies,\n              countries = response.countries;\n\n          _this.setState({\n            profile: profile,\n            currencies: currencies,\n            countries: countries\n          }, function () {\n            return resolve(response);\n          });\n        }).catch(function (error) {\n          console.log('[Profile Fetch Error]', error);\n          setError({\n            error: error\n          });\n          reject(error);\n        });\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"retrievePluginData\", function (plugin) {\n      var _this$props3 = _this.props,\n          setError = _this$props3.setError,\n          wizardApiFetch = _this$props3.wizardApiFetch;\n      var params = {\n        path: '/newspack/v1/plugins/' + plugin,\n        method: 'GET'\n      };\n      return new Promise(function (resolve, reject) {\n        wizardApiFetch(params).then(function (response) {\n          var pluginInfo = _this.state.pluginInfo;\n\n          _this.setState({\n            pluginInfo: _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default()({}, pluginInfo), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, plugin, response))\n          }, function () {\n            return resolve(response);\n          });\n        }).catch(function (error) {\n          console.log('[Profile Fetch Error]', error);\n          setError({\n            error: error\n          });\n          reject(error);\n        });\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"completeSetup\", function () {\n      var setError = _this.props.setError;\n      var params = {\n        path: \"/newspack/v1/wizard/newspack-setup-wizard/complete\",\n        method: 'post'\n      };\n      return new Promise(function (resolve, reject) {\n        return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()(params).then(function (response) {\n          _this.setState({\n            setupComplete: true\n          }, function () {\n            return resolve(response);\n          });\n        }).catch(function (error) {\n          console.log('[Complete Setup Error]', error);\n          setError(error);\n          reject(error);\n        });\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"isConfigurationComplete\", function () {\n      var pluginInfo = _this.state.pluginInfo;\n      return pluginInfo.jetpack && pluginInfo.jetpack.Configured && pluginInfo['google-site-kit'] && pluginInfo['google-site-kit'].Configured;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"retrieveTheme\", function () {\n      var _this$props4 = _this.props,\n          setError = _this$props4.setError,\n          wizardApiFetch = _this$props4.wizardApiFetch;\n      var params = {\n        path: '/newspack/v1/wizard/newspack-setup-wizard/theme',\n        method: 'GET'\n      };\n      wizardApiFetch(params).then(function (response) {\n        _this.setState({\n          theme: response.theme\n        });\n      }).catch(function (error) {\n        console.log('[Theme Fetch Error]', error);\n        setError({\n          error: error\n        });\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"updateTheme\", function (theme) {\n      var _this$props5 = _this.props,\n          setError = _this$props5.setError,\n          wizardApiFetch = _this$props5.wizardApiFetch;\n      var params = {\n        path: '/newspack/v1/wizard/newspack-setup-wizard/theme/' + theme,\n        method: 'POST'\n      };\n      wizardApiFetch(params).then(function (response) {\n        _this.setState({\n          theme: response.theme\n        });\n      }).catch(function (error) {\n        console.log('[Theme Update Error]', error);\n        setError({\n          error: error\n        });\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"incrementStarterContentProgress\", function () {\n      _this.setState(function (_ref) {\n        var starterContentProgress = _ref.starterContentProgress;\n        return {\n          starterContentProgress: starterContentProgress + 1\n        };\n      }, function () {\n        return _this.state.starterContentProgress >= _this.state.starterContentTotal && _this.finishStarterContentInstall();\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"installStarterContent\", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var starterPostsCount, postsPromises, x;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // there are 12 categories in starter content, this will result in one post in each for e2e\n              starterPostsCount = newspack_aux_data.is_e2e ? 12 : 40;\n\n              _this.setState({\n                starterContentInstallStarted: true,\n                starterContentProgress: 0,\n                starterContentTotal: starterPostsCount + 3\n              });\n\n              _context.next = 4;\n              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({\n                path: \"/newspack/v1/wizard/newspack-setup-wizard/starter-content/categories\",\n                method: 'post'\n              }).then(_this.incrementStarterContentProgress);\n\n            case 4:\n              postsPromises = [];\n\n              for (x = 0; x < starterPostsCount; x++) {\n                postsPromises.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({\n                  path: \"/newspack/v1/wizard/newspack-setup-wizard/starter-content/post/\".concat(x),\n                  method: 'post'\n                }).then(_this.incrementStarterContentProgress).catch(_this.incrementStarterContentProgress));\n              }\n\n              _context.next = 8;\n              return Promise.all(postsPromises);\n\n            case 8:\n              _context.next = 10;\n              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({\n                path: \"/newspack/v1/wizard/newspack-setup-wizard/starter-content/homepage\",\n                method: 'post'\n              }).then(_this.incrementStarterContentProgress);\n\n            case 10:\n              _context.next = 12;\n              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_9___default()({\n                path: \"/newspack/v1/wizard/newspack-setup-wizard/starter-content/theme\",\n                method: 'post'\n              }).then(_this.incrementStarterContentProgress);\n\n            case 12:\n              _this.finishStarterContentInstall();\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"finishStarterContentInstall\", function () {\n      _this.updateProfile().then(function () {\n        return _this.completeSetup().then(function () {\n          return window.location = newspack_urls.dashboard;\n        });\n      });\n    });\n\n    _this.state = {\n      installationComplete: false,\n      installedPlugins: [],\n      pluginInfo: {},\n      setupComplete: false,\n      profile: {},\n      currencies: {},\n      countries: {},\n      starterContentInstallStarted: false,\n      starterContentProgress: null,\n      starterContentTotal: null,\n      theme: null\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SetupWizard, [{\n    key: \"render\",\n\n    /**\n     * Render.\n     */\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          installationComplete = _this$state.installationComplete,\n          pluginInfo = _this$state.pluginInfo,\n          profile = _this$state.profile,\n          countries = _this$state.countries,\n          currencies = _this$state.currencies,\n          starterContentInstallStarted = _this$state.starterContentInstallStarted,\n          starterContentTotal = _this$state.starterContentTotal,\n          starterContentProgress = _this$state.starterContentProgress;\n      var routes = ['/', '/about', '/installation-progress', '/configure-jetpack', '/configure-google-site-kit', '/theme-style-selection', '/starter-content']; // background auto installation is a nice feature, but in e2e it\n      // creates an undeterministic environment, since the installation-progress\n      // is not visited (https://github.com/Automattic/newspack-e2e-tests/issues/3)\n\n      var shouldAutoInstallPlugins = function shouldAutoInstallPlugins(routeProps) {\n        return newspack_aux_data.is_e2e ? '/installation-progress' === routeProps.location.pathname : '/' !== routeProps.location.pathname;\n      };\n\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(HashRouter, {\n        hashType: \"slash\"\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_13__[\"WizardPagination\"], {\n        routes: routes\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        path: \"/\",\n        exact: true,\n        render: function render() {\n          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_views___WEBPACK_IMPORTED_MODULE_12__[\"Welcome\"], {\n            buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Get started'),\n            buttonAction: {\n              href: '#/about',\n              onClick: function onClick() {\n                return _this2.updateProfile();\n              }\n            },\n            secondaryButtonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Not right now'),\n            secondaryButtonAction: \"/wp-admin\",\n            profile: profile\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        path: \"/about\",\n        render: function render() {\n          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_views___WEBPACK_IMPORTED_MODULE_12__[\"About\"], {\n            headerText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('About your publication'),\n            subHeaderText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Share a few details so we can start setting up your profile'),\n            buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Continue'),\n            buttonAction: {\n              href: installationComplete ? '#/configure-jetpack' : '#/installation-progress',\n              onClick: function onClick() {\n                return _this2.updateProfile();\n              }\n            },\n            profile: profile,\n            currencies: currencies,\n            countries: countries,\n            updateProfile: function updateProfile(key, value) {\n              _this2.setState({\n                profile: _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default()({}, profile), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, key, value))\n              });\n            }\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        path: \"/configure-jetpack\",\n        render: function render() {\n          var plugin = 'jetpack';\n          var pluginConfigured = pluginInfo[plugin] && pluginInfo[plugin].Configured;\n          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_views___WEBPACK_IMPORTED_MODULE_12__[\"ConfigurePlugins\"], {\n            headerText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Configure Core Plugins'),\n            subHeaderText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Please configure the following core plugins to start using Newspack.'),\n            plugin: plugin,\n            buttonText: pluginConfigured ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Continue') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Configure Jetpack'),\n            buttonAction: pluginConfigured ? '#/configure-google-site-kit' : {\n              handoff: plugin\n            },\n            pluginConfigured: pluginConfigured,\n            onMount: _this2.retrievePluginData\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        path: \"/configure-google-site-kit\",\n        render: function render() {\n          var plugin = 'google-site-kit';\n          var pluginConfigured = pluginInfo[plugin] && pluginInfo[plugin].Configured;\n          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_views___WEBPACK_IMPORTED_MODULE_12__[\"ConfigurePlugins\"], {\n            headerText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Configure Core Plugins'),\n            subHeaderText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Please configure the following core plugin to start using Newspack.'),\n            plugin: plugin,\n            buttonText: pluginConfigured ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Continue') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Configure Google Site Kit'),\n            buttonAction: pluginConfigured ? '#/theme-style-selection' : {\n              handoff: plugin\n            },\n            pluginConfigured: pluginConfigured,\n            onMount: _this2.retrievePluginData\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        path: \"/theme-style-selection\",\n        render: function render() {\n          var theme = _this2.state.theme;\n          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_views___WEBPACK_IMPORTED_MODULE_12__[\"ThemeSelection\"], {\n            headerText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Site Design'),\n            subHeaderText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Choose a Newspack theme'),\n            buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Continue'),\n            buttonAction: \"#/starter-content\",\n            updateTheme: _this2.updateTheme,\n            theme: theme\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        path: \"/starter-content\",\n        render: function render() {\n          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_views___WEBPACK_IMPORTED_MODULE_12__[\"StarterContent\"], {\n            headerText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Starter Content'),\n            subHeaderText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Pre-configure the site for testing and experimentation'),\n            buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Install Starter Content'),\n            buttonAction: _this2.installStarterContent,\n            buttonDisabled: starterContentInstallStarted,\n            secondaryButtonText: starterContentProgress ? null : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Not right now'),\n            secondaryButtonAction: _this2.finishStarterContentInstall,\n            starterContentProgress: starterContentProgress,\n            starterContentTotal: starterContentTotal,\n            displayProgressBar: starterContentInstallStarted\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        path: ['/'],\n        render: function render(routeProps) {\n          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(_views___WEBPACK_IMPORTED_MODULE_12__[\"InstallationProgress\"], {\n            autoInstall: shouldAutoInstallPlugins(routeProps),\n            hidden: '/installation-progress' !== routeProps.location.pathname,\n            headerText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Installation...'),\n            subHeaderText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Please configure the following core plugin to start using Newspack.'),\n            buttonText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__[\"__\"])('Continue'),\n            buttonAction: '#/configure-jetpack',\n            buttonDisabled: !installationComplete,\n            plugins: REQUIRED_PLUGINS,\n            onStatus: function onStatus(status) {\n              return _this2.setState({\n                installationComplete: status.complete\n              });\n            }\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Route, {\n        render: function render(routeProps) {\n          return routes.indexOf(routeProps.location.pathname) === -1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Redirect, {\n            to: \"/\"\n          }) : null;\n        }\n      })));\n    }\n  }]);\n\n  return SetupWizard;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\nObject(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"render\"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_10__[\"createElement\"])(Object(_components_src__WEBPACK_IMPORTED_MODULE_13__[\"withWizard\"])(SetupWizard, [], {\n  suppressLogoLink: true\n})), document.getElementById('newspack-setup-wizard'));\n\n//# sourceURL=webpack:///./assets/wizards/setup/index.js?");

/***/ }),

/***/ "./assets/wizards/setup/style.scss":
/*!*****************************************!*\
  !*** ./assets/wizards/setup/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/wizards/setup/style.scss?");

/***/ }),

/***/ "./assets/wizards/setup/views/about/index.js":
/*!***************************************************!*\
  !*** ./assets/wizards/setup/views/about/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ \"./assets/wizards/setup/views/about/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n/**\n * About your publication setup screen.\n */\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Location Setup Screen.\n */\n\nvar About = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(About, _Component);\n\n  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default()(About);\n\n  function About() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, About);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(About, [{\n    key: \"render\",\n\n    /**\n     * Render.\n     */\n    value: function render() {\n      var _this$props = this.props,\n          profile = _this$props.profile,\n          updateProfile = _this$props.updateProfile,\n          currencies = _this$props.currencies,\n          countries = _this$props.countries;\n\n      var _ref = profile || {},\n          address = _ref.address,\n          address2 = _ref.address2,\n          city = _ref.city,\n          currency = _ref.currency,\n          country = _ref.country,\n          zip = _ref.zip;\n\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"SelectControl\"], {\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('Where is your business based?'),\n        value: country,\n        onChange: function onChange(value) {\n          return updateProfile('country', value);\n        },\n        options: countries\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"TextControl\"], {\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('Address'),\n        value: address,\n        onChange: function onChange(value) {\n          return updateProfile('address', value);\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"TextControl\"], {\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('Address line 2'),\n        value: address2,\n        onChange: function onChange(value) {\n          return updateProfile('address2', value);\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"div\", {\n        className: \"newspack-setup-wizard__form_element_row\"\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"div\", {\n        style: {\n          flex: 2\n        }\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"TextControl\"], {\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('City'),\n        value: city,\n        onChange: function onChange(value) {\n          return updateProfile('city', value);\n        }\n      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"div\", {\n        style: {\n          flex: 1\n        }\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"TextControl\"], {\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('Postcode/Zip'),\n        value: zip,\n        onChange: function onChange(value) {\n          return updateProfile('zip', value);\n        }\n      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"SelectControl\"], {\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('Currency'),\n        value: currency,\n        onChange: function onChange(value) {\n          return updateProfile('currency', value);\n        },\n        options: currencies\n      }));\n    }\n  }]);\n\n  return About;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"withWizardScreen\"])(About));\n\n//# sourceURL=webpack:///./assets/wizards/setup/views/about/index.js?");

/***/ }),

/***/ "./assets/wizards/setup/views/about/style.scss":
/*!*****************************************************!*\
  !*** ./assets/wizards/setup/views/about/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/wizards/setup/views/about/style.scss?");

/***/ }),

/***/ "./assets/wizards/setup/views/configure-plugins/index.js":
/*!***************************************************************!*\
  !*** ./assets/wizards/setup/views/configure-plugins/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n/**\n * Configure Plugins Screen\n */\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * External dependencies\n */\n\n\n/**\n * Configure Plugins Screen\n */\n\nvar ConfigurePlugins = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ConfigurePlugins, _Component);\n\n  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4___default()(ConfigurePlugins);\n\n  function ConfigurePlugins() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ConfigurePlugins);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"componentDidMount\", function () {\n      var _this$props = _this.props,\n          onMount = _this$props.onMount,\n          plugin = _this$props.plugin;\n      onMount(plugin);\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ConfigurePlugins, [{\n    key: \"render\",\n\n    /**\n     * Render.\n     */\n    value: function render() {\n      var _this$props2 = this.props,\n          plugin = _this$props2.plugin,\n          pluginConfigured = _this$props2.pluginConfigured;\n      var classNames = classnames__WEBPACK_IMPORTED_MODULE_9___default()('newspack-setup__configure-plugin-card', plugin);\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(\"div\", {\n        className: \"newspack-setup__configure-plugin\"\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(\"div\", {\n        className: classNames\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(\"h2\", null, 'jetpack' === plugin && 'Jetpack', 'google-site-kit' === plugin && 'Google Site Kit'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(\"p\", null, 'jetpack' === plugin && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__[\"__\"])('The ideal plugin for stats, related posts, search engine optimization, social sharing, protection, backups, security, and more.'), 'google-site-kit' === plugin && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__[\"__\"])('The one-stop solution to deploy, manage, and get insights from critical Google tools to make the site successful on the web.')), pluginConfigured && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_8__[\"Notice\"], {\n        isSuccess: true,\n        noticeText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__[\"__\"])('Plugin configuration complete')\n      })));\n    }\n  }]);\n\n  return ConfigurePlugins;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\nConfigurePlugins.defaultProps = {\n  plugin: null,\n  onMount: function onMount() {\n    return null;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_src__WEBPACK_IMPORTED_MODULE_8__[\"withWizardScreen\"])(ConfigurePlugins));\n\n//# sourceURL=webpack:///./assets/wizards/setup/views/configure-plugins/index.js?");

/***/ }),

/***/ "./assets/wizards/setup/views/index.js":
/*!*********************************************!*\
  !*** ./assets/wizards/setup/views/index.js ***!
  \*********************************************/
/*! exports provided: About, Welcome, ConfigurePlugins, InstallationProgress, ThemeSelection, StarterContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./assets/wizards/setup/views/about/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"About\", function() { return _about__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome */ \"./assets/wizards/setup/views/welcome/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Welcome\", function() { return _welcome__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _configure_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configure-plugins */ \"./assets/wizards/setup/views/configure-plugins/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ConfigurePlugins\", function() { return _configure_plugins__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _installation_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation-progress */ \"./assets/wizards/setup/views/installation-progress/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InstallationProgress\", function() { return _installation_progress__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _site_design_views_theme_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../site-design/views/theme-selection */ \"./assets/wizards/site-design/views/theme-selection/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThemeSelection\", function() { return _site_design_views_theme_selection__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _starter_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter-content */ \"./assets/wizards/setup/views/starter-content/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StarterContent\", function() { return _starter_content__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./assets/wizards/setup/views/index.js?");

/***/ }),

/***/ "./assets/wizards/setup/views/installation-progress/index.js":
/*!*******************************************************************!*\
  !*** ./assets/wizards/setup/views/installation-progress/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n\n\n\n\n\n\n/**\n * Plugin Installation Progress Screen.\n */\n\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * Plugin Installation Screen.\n */\n\nvar InstallationProgress = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InstallationProgress, _Component);\n\n  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default()(InstallationProgress);\n\n  function InstallationProgress() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstallationProgress);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstallationProgress, [{\n    key: \"render\",\n\n    /**\n     * Render.\n     */\n    value: function render() {\n      var _this$props = this.props,\n          autoInstall = _this$props.autoInstall,\n          plugins = _this$props.plugins,\n          onStatus = _this$props.onStatus;\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_5__[\"PluginInstaller\"], {\n        autoInstall: autoInstall,\n        plugins: plugins,\n        onStatus: onStatus\n      });\n    }\n  }]);\n\n  return InstallationProgress;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_src__WEBPACK_IMPORTED_MODULE_5__[\"withWizardScreen\"])(InstallationProgress));\n\n//# sourceURL=webpack:///./assets/wizards/setup/views/installation-progress/index.js?");

/***/ }),

/***/ "./assets/wizards/setup/views/starter-content/index.js":
/*!*************************************************************!*\
  !*** ./assets/wizards/setup/views/starter-content/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n\n\n\n\n\n\n/**\n * Starter Content Screen.\n */\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * Location Setup Screen.\n */\n\nvar StarterContent = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StarterContent, _Component);\n\n  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default()(StarterContent);\n\n  function StarterContent() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StarterContent);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StarterContent, [{\n    key: \"render\",\n\n    /**\n     * Render.\n     */\n    value: function render() {\n      var _this$props = this.props,\n          displayProgressBar = _this$props.displayProgressBar,\n          starterContentProgress = _this$props.starterContentProgress,\n          starterContentTotal = _this$props.starterContentTotal;\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"div\", {\n        className: \"newspack-setup-wizard__welcome\"\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"p\", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('Optionally pre-populate the site with categories, 40 placeholder stories, Newspack branding, and some homepage blocks. This feature will pre-configure the site for experimentation and testing and all placeholder content can be deleted and replaced later.')), displayProgressBar && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"ProgressBar\"], {\n        completed: starterContentProgress,\n        total: starterContentTotal,\n        displayFraction: true\n      }));\n    }\n  }]);\n\n  return StarterContent;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"withWizardScreen\"])(StarterContent));\n\n//# sourceURL=webpack:///./assets/wizards/setup/views/starter-content/index.js?");

/***/ }),

/***/ "./assets/wizards/setup/views/welcome/index.js":
/*!*****************************************************!*\
  !*** ./assets/wizards/setup/views/welcome/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n\n\n\n\n\n\n/**\n * Location setup Screen.\n */\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * Location Setup Screen.\n */\n\nvar Welcome = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Welcome, _Component);\n\n  var _super = _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3___default()(Welcome);\n\n  function Welcome() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Welcome);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Welcome, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.body.classList.add('newspack_page_newspack-setup-wizard__welcome');\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      document.body.classList.remove('newspack_page_newspack-setup-wizard__welcome');\n    }\n    /**\n     * Render.\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"div\", {\n        className: \"newspack-setup-wizard__welcome\"\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"h2\", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('Welcome to WordPress for your Newsroom')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(\"p\", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__[\"__\"])('We will help you get set up by installing the most relevant theme and plugins in the background.')));\n    }\n  }]);\n\n  return Welcome;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_src__WEBPACK_IMPORTED_MODULE_6__[\"withWizardScreen\"])(Welcome));\n\n//# sourceURL=webpack:///./assets/wizards/setup/views/welcome/index.js?");

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"apiFetch\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22apiFetch%22%5D%7D?");

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22components%22%5D%7D?");

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"i18n\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22i18n%22%5D%7D?");

/***/ }),

/***/ "@wordpress/primitives":
/*!*********************************************!*\
  !*** external {"this":["wp","primitives"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"primitives\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22primitives%22%5D%7D?");

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"url\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22url%22%5D%7D?");

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"lodash\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%22lodash%22%7D?");

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"React\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%22React%22%7D?");

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"ReactDOM\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%22ReactDOM%22%7D?");

/***/ })

/******/ })));
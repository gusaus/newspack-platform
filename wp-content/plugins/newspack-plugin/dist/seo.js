/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/d/auto-bind.js":
/*!*************************************!*\
  !*** ./node_modules/d/auto-bind.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue             = __webpack_require__(/*! type/value/is */ \"./node_modules/type/value/is.js\")\n  , ensureValue         = __webpack_require__(/*! type/value/ensure */ \"./node_modules/type/value/ensure.js\")\n  , ensurePlainFunction = __webpack_require__(/*! type/plain-function/ensure */ \"./node_modules/type/plain-function/ensure.js\")\n  , copy                = __webpack_require__(/*! es5-ext/object/copy */ \"./node_modules/es5-ext/object/copy.js\")\n  , normalizeOptions    = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , map                 = __webpack_require__(/*! es5-ext/object/map */ \"./node_modules/es5-ext/object/map.js\");\n\nvar bind = Function.prototype.bind\n  , defineProperty = Object.defineProperty\n  , hasOwnProperty = Object.prototype.hasOwnProperty\n  , define;\n\ndefine = function (name, desc, options) {\n\tvar value = ensureValue(desc) && ensurePlainFunction(desc.value), dgs;\n\tdgs = copy(desc);\n\tdelete dgs.writable;\n\tdelete dgs.value;\n\tdgs.get = function () {\n\t\tif (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;\n\t\tdesc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);\n\t\tdefineProperty(this, name, desc);\n\t\treturn this[name];\n\t};\n\treturn dgs;\n};\n\nmodule.exports = function (props/*, options*/) {\n\tvar options = normalizeOptions(arguments[1]);\n\tif (isValue(options.resolveContext)) ensurePlainFunction(options.resolveContext);\n\treturn map(props, function (desc, name) { return define(name, desc, options); });\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/d/auto-bind.js?");

/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue         = __webpack_require__(/*! type/value/is */ \"./node_modules/type/value/is.js\")\n  , isPlainFunction = __webpack_require__(/*! type/plain-function/is */ \"./node_modules/type/plain-function/is.js\")\n  , assign          = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , normalizeOpts   = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , contains        = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/\\u0000#/contains/index.js\");\n\nvar d = (module.exports = function (dscr, value/*, options*/) {\n\tvar c, e, w, options, desc;\n\tif (arguments.length < 2 || typeof dscr !== \"string\") {\n\t\toptions = value;\n\t\tvalue = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[2];\n\t}\n\tif (isValue(dscr)) {\n\t\tc = contains.call(dscr, \"c\");\n\t\te = contains.call(dscr, \"e\");\n\t\tw = contains.call(dscr, \"w\");\n\t} else {\n\t\tc = w = true;\n\t\te = false;\n\t}\n\n\tdesc = { value: value, configurable: c, enumerable: e, writable: w };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n});\n\nd.gs = function (dscr, get, set/*, options*/) {\n\tvar c, e, options, desc;\n\tif (typeof dscr !== \"string\") {\n\t\toptions = set;\n\t\tset = get;\n\t\tget = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[3];\n\t}\n\tif (!isValue(get)) {\n\t\tget = undefined;\n\t} else if (!isPlainFunction(get)) {\n\t\toptions = get;\n\t\tget = set = undefined;\n\t} else if (!isValue(set)) {\n\t\tset = undefined;\n\t} else if (!isPlainFunction(set)) {\n\t\toptions = set;\n\t\tset = undefined;\n\t}\n\tif (isValue(dscr)) {\n\t\tc = contains.call(dscr, \"c\");\n\t\te = contains.call(dscr, \"e\");\n\t} else {\n\t\tc = true;\n\t\te = false;\n\t}\n\n\tdesc = { get: get, set: set, configurable: c, enumerable: e };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/d/index.js?");

/***/ }),

/***/ "./node_modules/deep-map-keys/lib/deep-map-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/deep-map-keys/lib/deep-map-keys.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar WeakMap = __webpack_require__(/*! es6-weak-map */ \"./node_modules/es6-weak-map/index.js\");\nvar lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nvar DeepMapKeys = /** @class */ (function () {\n    function DeepMapKeys(mapFn, opts) {\n        this.mapFn = mapFn;\n        this.opts = opts;\n        this.cache = new WeakMap();\n    }\n    DeepMapKeys.prototype.map = function (value) {\n        return lodash_1.isArray(value) ? this.mapArray(value) :\n            lodash_1.isObject(value) ? this.mapObject(value) :\n                value;\n    };\n    DeepMapKeys.prototype.mapArray = function (arr) {\n        if (this.cache.has(arr)) {\n            return this.cache.get(arr);\n        }\n        var length = arr.length;\n        var result = [];\n        this.cache.set(arr, result);\n        for (var i = 0; i < length; i++) {\n            result.push(this.map(arr[i]));\n        }\n        return result;\n    };\n    DeepMapKeys.prototype.mapObject = function (obj) {\n        if (this.cache.has(obj)) {\n            return this.cache.get(obj);\n        }\n        var _a = this, mapFn = _a.mapFn, thisArg = _a.opts.thisArg;\n        var result = {};\n        this.cache.set(obj, result);\n        for (var key in obj) {\n            if (obj.hasOwnProperty(key)) {\n                result[mapFn.call(thisArg, key, obj[key])] = this.map(obj[key]);\n            }\n        }\n        return result;\n    };\n    return DeepMapKeys;\n}());\nexports.DeepMapKeys = DeepMapKeys;\n//# sourceMappingURL=deep-map-keys.js.map\n\n//# sourceURL=webpack://newspack/./node_modules/deep-map-keys/lib/deep-map-keys.js?");

/***/ }),

/***/ "./node_modules/deep-map-keys/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/deep-map-keys/lib/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nvar deep_map_keys_1 = __webpack_require__(/*! ./deep-map-keys */ \"./node_modules/deep-map-keys/lib/deep-map-keys.js\");\nfunction deepMapKeys(object, mapFn, options) {\n    options = lodash_1.isNil(options) ? {} : options;\n    if (!mapFn) {\n        throw new Error('mapFn is required');\n    }\n    else if (!lodash_1.isFunction(mapFn)) {\n        throw new TypeError('mapFn must be a function');\n    }\n    else if (!lodash_1.isObject(options)) {\n        throw new TypeError('options must be an object');\n    }\n    return new deep_map_keys_1.DeepMapKeys(mapFn, options).map(object);\n}\nmodule.exports = deepMapKeys;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://newspack/./node_modules/deep-map-keys/lib/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/\u0000#/clear.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/array/ #/clear.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// Inspired by Google Closure:\n// http://closure-library.googlecode.com/svn/docs/\n// closure_goog_array_array.js.html#goog.array.clear\n\n\n\nvar value = __webpack_require__(/*! ../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\");\n\nmodule.exports = function () {\n\tvalue(this).length = 0;\n\treturn this;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/array/%00#/clear.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/array/from/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/array/from/is-implemented.js\")() ? Array.from : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/array/from/shim.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/array/from/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/array/from/is-implemented.js ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar from = Array.from, arr, result;\n\tif (typeof from !== \"function\") return false;\n\tarr = [\"raz\", \"dwa\"];\n\tresult = from(arr);\n\treturn Boolean(result && result !== arr && result[1] === \"dwa\");\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/array/from/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/array/from/shim.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar iteratorSymbol = (__webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator)\n  , isArguments    = __webpack_require__(/*! ../../function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , isFunction     = __webpack_require__(/*! ../../function/is-function */ \"./node_modules/es5-ext/function/is-function.js\")\n  , toPosInt       = __webpack_require__(/*! ../../number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , callable       = __webpack_require__(/*! ../../object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , validValue     = __webpack_require__(/*! ../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , isValue        = __webpack_require__(/*! ../../object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , isString       = __webpack_require__(/*! ../../string/is-string */ \"./node_modules/es5-ext/string/is-string.js\")\n  , isArray        = Array.isArray\n  , call           = Function.prototype.call\n  , desc           = { configurable: true, enumerable: true, writable: true, value: null }\n  , defineProperty = Object.defineProperty;\n\n// eslint-disable-next-line complexity, max-lines-per-function\nmodule.exports = function (arrayLike/*, mapFn, thisArg*/) {\n\tvar mapFn = arguments[1]\n\t  , thisArg = arguments[2]\n\t  , Context\n\t  , i\n\t  , j\n\t  , arr\n\t  , length\n\t  , code\n\t  , iterator\n\t  , result\n\t  , getIterator\n\t  , value;\n\n\tarrayLike = Object(validValue(arrayLike));\n\n\tif (isValue(mapFn)) callable(mapFn);\n\tif (!this || this === Array || !isFunction(this)) {\n\t\t// Result: Plain array\n\t\tif (!mapFn) {\n\t\t\tif (isArguments(arrayLike)) {\n\t\t\t\t// Source: Arguments\n\t\t\t\tlength = arrayLike.length;\n\t\t\t\tif (length !== 1) return Array.apply(null, arrayLike);\n\t\t\t\tarr = new Array(1);\n\t\t\t\tarr[0] = arrayLike[0];\n\t\t\t\treturn arr;\n\t\t\t}\n\t\t\tif (isArray(arrayLike)) {\n\t\t\t\t// Source: Array\n\t\t\t\tarr = new Array((length = arrayLike.length));\n\t\t\t\tfor (i = 0; i < length; ++i) arr[i] = arrayLike[i];\n\t\t\t\treturn arr;\n\t\t\t}\n\t\t}\n\t\tarr = [];\n\t} else {\n\t\t// Result: Non plain array\n\t\tContext = this;\n\t}\n\n\tif (!isArray(arrayLike)) {\n\t\tif ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {\n\t\t\t// Source: Iterator\n\t\t\titerator = callable(getIterator).call(arrayLike);\n\t\t\tif (Context) arr = new Context();\n\t\t\tresult = iterator.next();\n\t\t\ti = 0;\n\t\t\twhile (!result.done) {\n\t\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;\n\t\t\t\tif (Context) {\n\t\t\t\t\tdesc.value = value;\n\t\t\t\t\tdefineProperty(arr, i, desc);\n\t\t\t\t} else {\n\t\t\t\t\tarr[i] = value;\n\t\t\t\t}\n\t\t\t\tresult = iterator.next();\n\t\t\t\t++i;\n\t\t\t}\n\t\t\tlength = i;\n\t\t} else if (isString(arrayLike)) {\n\t\t\t// Source: String\n\t\t\tlength = arrayLike.length;\n\t\t\tif (Context) arr = new Context();\n\t\t\tfor (i = 0, j = 0; i < length; ++i) {\n\t\t\t\tvalue = arrayLike[i];\n\t\t\t\tif (i + 1 < length) {\n\t\t\t\t\tcode = value.charCodeAt(0);\n\t\t\t\t\t// eslint-disable-next-line max-depth\n\t\t\t\t\tif (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];\n\t\t\t\t}\n\t\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, value, j) : value;\n\t\t\t\tif (Context) {\n\t\t\t\t\tdesc.value = value;\n\t\t\t\t\tdefineProperty(arr, j, desc);\n\t\t\t\t} else {\n\t\t\t\t\tarr[j] = value;\n\t\t\t\t}\n\t\t\t\t++j;\n\t\t\t}\n\t\t\tlength = j;\n\t\t}\n\t}\n\tif (length === undefined) {\n\t\t// Source: array or array-like\n\t\tlength = toPosInt(arrayLike.length);\n\t\tif (Context) arr = new Context(length);\n\t\tfor (i = 0; i < length; ++i) {\n\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];\n\t\t\tif (Context) {\n\t\t\t\tdesc.value = value;\n\t\t\t\tdefineProperty(arr, i, desc);\n\t\t\t} else {\n\t\t\t\tarr[i] = value;\n\t\t\t}\n\t\t}\n\t}\n\tif (Context) {\n\t\tdesc.value = null;\n\t\tarr.length = length;\n\t}\n\treturn arr;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/array/from/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-arguments.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString\n  , id = objToString.call((function () { return arguments; })());\n\nmodule.exports = function (value) { return objToString.call(value) === id; };\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/function/is-arguments.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/is-function.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-function.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString\n  , isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);\n\nmodule.exports = function (value) {\n\treturn typeof value === \"function\" && isFunctionStringTag(objToString.call(value));\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/function/is-function.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
eval("\n\n// eslint-disable-next-line no-empty-function\nmodule.exports = function () {};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/function/noop.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/math/sign/is-implemented.js\")() ? Math.sign : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/math/sign/shim.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/math/sign/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/is-implemented.js ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar sign = Math.sign;\n\tif (typeof sign !== \"function\") return false;\n\treturn sign(10) === 1 && sign(-20) === -1;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/math/sign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/shim.js ***!
  \************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\tvalue = Number(value);\n\tif (isNaN(value) || value === 0) return value;\n\treturn value > 0 ? 1 : -1;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/math/sign/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/to-integer.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/number/to-integer.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar sign  = __webpack_require__(/*! ../math/sign */ \"./node_modules/es5-ext/math/sign/index.js\")\n  , abs   = Math.abs\n  , floor = Math.floor;\n\nmodule.exports = function (value) {\n\tif (isNaN(value)) return 0;\n\tvalue = Number(value);\n\tif (value === 0 || !isFinite(value)) return value;\n\treturn sign(value) * floor(abs(value));\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/number/to-integer.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/number/to-pos-integer.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./to-integer */ \"./node_modules/es5-ext/number/to-integer.js\")\n  , max       = Math.max;\n\nmodule.exports = function (value) { return max(0, toInteger(value)); };\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/number/to-pos-integer.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/_iterate.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/_iterate.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// Internal method, used by iteration functions.\n// Calls a function for each key-value pair found in object\n// Optionally takes compareFn to iterate object in specific order\n\n\n\nvar callable                = __webpack_require__(/*! ./valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , value                   = __webpack_require__(/*! ./valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , bind                    = Function.prototype.bind\n  , call                    = Function.prototype.call\n  , keys                    = Object.keys\n  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nmodule.exports = function (method, defVal) {\n\treturn function (obj, cb/*, thisArg, compareFn*/) {\n\t\tvar list, thisArg = arguments[2], compareFn = arguments[3];\n\t\tobj = Object(value(obj));\n\t\tcallable(cb);\n\n\t\tlist = keys(obj);\n\t\tif (compareFn) {\n\t\t\tlist.sort(typeof compareFn === \"function\" ? bind.call(compareFn, obj) : undefined);\n\t\t}\n\t\tif (typeof method !== \"function\") method = list[method];\n\t\treturn call.call(method, list, function (key, index) {\n\t\t\tif (!objPropertyIsEnumerable.call(obj, key)) return defVal;\n\t\t\treturn call.call(cb, thisArg, obj[key], key, obj, index);\n\t\t});\n\t};\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/_iterate.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/assign/is-implemented.js\")() ? Object.assign : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/assign/shim.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/assign/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar assign = Object.assign, obj;\n\tif (typeof assign !== \"function\") return false;\n\tobj = { foo: \"raz\" };\n\tassign(obj, { bar: \"dwa\" }, { trzy: \"trzy\" });\n\treturn obj.foo + obj.bar + obj.trzy === \"razdwatrzy\";\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/assign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar keys  = __webpack_require__(/*! ../keys */ \"./node_modules/es5-ext/object/keys/index.js\")\n  , value = __webpack_require__(/*! ../valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , max   = Math.max;\n\nmodule.exports = function (dest, src/*, …srcn*/) {\n\tvar error, i, length = max(arguments.length, 2), assign;\n\tdest = Object(value(dest));\n\tassign = function (key) {\n\t\ttry {\n\t\t\tdest[key] = src[key];\n\t\t} catch (e) {\n\t\t\tif (!error) error = e;\n\t\t}\n\t};\n\tfor (i = 1; i < length; ++i) {\n\t\tsrc = arguments[i];\n\t\tkeys(src).forEach(assign);\n\t}\n\tif (error !== undefined) throw error;\n\treturn dest;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/assign/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/copy.js":
/*!*********************************************!*\
  !*** ./node_modules/es5-ext/object/copy.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar aFrom  = __webpack_require__(/*! ../array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , assign = __webpack_require__(/*! ./assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , value  = __webpack_require__(/*! ./valid-value */ \"./node_modules/es5-ext/object/valid-value.js\");\n\nmodule.exports = function (obj/*, propertyNames, options*/) {\n\tvar copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);\n\tif (copy !== obj && !propertyNames) return copy;\n\tvar result = {};\n\tif (propertyNames) {\n\t\taFrom(propertyNames, function (propertyName) {\n\t\t\tif (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];\n\t\t});\n\t} else {\n\t\tassign(result, obj);\n\t}\n\treturn result;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/copy.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/create.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/object/create.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// Workaround for http://code.google.com/p/v8/issues/detail?id=2804\n\n\n\nvar create = Object.create, shim;\n\nif (!__webpack_require__(/*! ./set-prototype-of/is-implemented */ \"./node_modules/es5-ext/object/set-prototype-of/is-implemented.js\")()) {\n\tshim = __webpack_require__(/*! ./set-prototype-of/shim */ \"./node_modules/es5-ext/object/set-prototype-of/shim.js\");\n}\n\nmodule.exports = (function () {\n\tvar nullObject, polyProps, desc;\n\tif (!shim) return create;\n\tif (shim.level !== 1) return create;\n\n\tnullObject = {};\n\tpolyProps = {};\n\tdesc = { configurable: false, enumerable: false, writable: true, value: undefined };\n\tObject.getOwnPropertyNames(Object.prototype).forEach(function (name) {\n\t\tif (name === \"__proto__\") {\n\t\t\tpolyProps[name] = {\n\t\t\t\tconfigurable: true,\n\t\t\t\tenumerable: false,\n\t\t\t\twritable: true,\n\t\t\t\tvalue: undefined\n\t\t\t};\n\t\t\treturn;\n\t\t}\n\t\tpolyProps[name] = desc;\n\t});\n\tObject.defineProperties(nullObject, polyProps);\n\n\tObject.defineProperty(shim, \"nullPolyfill\", {\n\t\tconfigurable: false,\n\t\tenumerable: false,\n\t\twritable: false,\n\t\tvalue: nullObject\n\t});\n\n\treturn function (prototype, props) {\n\t\treturn create(prototype === null ? nullObject : prototype, props);\n\t};\n})();\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/create.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/for-each.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/for-each.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./_iterate */ \"./node_modules/es5-ext/object/_iterate.js\")(\"forEach\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/for-each.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/is-object.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar map = { function: true, object: true };\n\nmodule.exports = function (value) { return (isValue(value) && map[typeof value]) || false; };\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/is-object.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar _undefined = __webpack_require__(/*! ../function/noop */ \"./node_modules/es5-ext/function/noop.js\")(); // Support ES3 engines\n\nmodule.exports = function (val) { return val !== _undefined && val !== null; };\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/is-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/keys/is-implemented.js\")() ? Object.keys : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/keys/shim.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/keys/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function () {\n\ttry {\n\t\tObject.keys(\"primitive\");\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/keys/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar keys = Object.keys;\n\nmodule.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/keys/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/map.js":
/*!********************************************!*\
  !*** ./node_modules/es5-ext/object/map.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar callable = __webpack_require__(/*! ./valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , forEach  = __webpack_require__(/*! ./for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , call     = Function.prototype.call;\n\nmodule.exports = function (obj, cb/*, thisArg*/) {\n\tvar result = {}, thisArg = arguments[2];\n\tcallable(cb);\n\tforEach(obj, function (value, key, targetObj, index) {\n\t\tresult[key] = call.call(cb, thisArg, value, key, targetObj, index);\n\t});\n\treturn result;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/map.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar forEach = Array.prototype.forEach, create = Object.create;\n\nvar process = function (src, obj) {\n\tvar key;\n\tfor (key in src) obj[key] = src[key];\n};\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function (opts1/*, …options*/) {\n\tvar result = create(null);\n\tforEach.call(arguments, function (options) {\n\t\tif (!isValue(options)) return;\n\t\tprocess(Object(options), result);\n\t});\n\treturn result;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/normalize-options.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/set-prototype-of/is-implemented.js\")() ? Object.setPrototypeOf : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/set-prototype-of/shim.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/set-prototype-of/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js":
/*!************************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/is-implemented.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar create = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};\n\nmodule.exports = function (/* CustomCreate*/) {\n\tvar setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;\n\tif (typeof setPrototypeOf !== \"function\") return false;\n\treturn getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/set-prototype-of/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/shim.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/* eslint no-proto: \"off\" */\n\n// Big thanks to @WebReflection for sorting this out\n// https://gist.github.com/WebReflection/5593554\n\n\n\nvar isObject         = __webpack_require__(/*! ../is-object */ \"./node_modules/es5-ext/object/is-object.js\")\n  , value            = __webpack_require__(/*! ../valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , objIsPrototypeOf = Object.prototype.isPrototypeOf\n  , defineProperty   = Object.defineProperty\n  , nullDesc         = { configurable: true, enumerable: false, writable: true, value: undefined }\n  , validate;\n\nvalidate = function (obj, prototype) {\n\tvalue(obj);\n\tif (prototype === null || isObject(prototype)) return obj;\n\tthrow new TypeError(\"Prototype must be null or an object\");\n};\n\nmodule.exports = (function (status) {\n\tvar fn, set;\n\tif (!status) return null;\n\tif (status.level === 2) {\n\t\tif (status.set) {\n\t\t\tset = status.set;\n\t\t\tfn = function (obj, prototype) {\n\t\t\t\tset.call(validate(obj, prototype), prototype);\n\t\t\t\treturn obj;\n\t\t\t};\n\t\t} else {\n\t\t\tfn = function (obj, prototype) {\n\t\t\t\tvalidate(obj, prototype).__proto__ = prototype;\n\t\t\t\treturn obj;\n\t\t\t};\n\t\t}\n\t} else {\n\t\tfn = function self(obj, prototype) {\n\t\t\tvar isNullBase;\n\t\t\tvalidate(obj, prototype);\n\t\t\tisNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);\n\t\t\tif (isNullBase) delete self.nullPolyfill.__proto__;\n\t\t\tif (prototype === null) prototype = self.nullPolyfill;\n\t\t\tobj.__proto__ = prototype;\n\t\t\tif (isNullBase) defineProperty(self.nullPolyfill, \"__proto__\", nullDesc);\n\t\t\treturn obj;\n\t\t};\n\t}\n\treturn Object.defineProperty(fn, \"level\", {\n\t\tconfigurable: false,\n\t\tenumerable: false,\n\t\twritable: false,\n\t\tvalue: status.level\n\t});\n})(\n\t(function () {\n\t\tvar tmpObj1 = Object.create(null)\n\t\t  , tmpObj2 = {}\n\t\t  , set\n\t\t  , desc = Object.getOwnPropertyDescriptor(Object.prototype, \"__proto__\");\n\n\t\tif (desc) {\n\t\t\ttry {\n\t\t\t\tset = desc.set; // Opera crashes at this point\n\t\t\t\tset.call(tmpObj1, tmpObj2);\n\t\t\t} catch (ignore) {}\n\t\t\tif (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };\n\t\t}\n\n\t\ttmpObj1.__proto__ = tmpObj2;\n\t\tif (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };\n\n\t\ttmpObj1 = {};\n\t\ttmpObj1.__proto__ = tmpObj2;\n\t\tif (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };\n\n\t\treturn false;\n\t})()\n);\n\n__webpack_require__(/*! ../create */ \"./node_modules/es5-ext/object/create.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/set-prototype-of/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function (fn) {\n\tif (typeof fn !== \"function\") throw new TypeError(fn + \" is not a function\");\n\treturn fn;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/valid-callable.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./is-object */ \"./node_modules/es5-ext/object/is-object.js\");\n\nmodule.exports = function (value) {\n\tif (!isObject(value)) throw new TypeError(value + \" is not an Object\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/valid-object.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) throw new TypeError(\"Cannot use null or undefined\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/object/valid-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/string/\\u0000#/contains/is-implemented.js\")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/string/\\u0000#/contains/shim.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/string/%00#/contains/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/is-implemented.js":
/*!*******************************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/is-implemented.js ***!
  \*******************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar str = \"razdwatrzy\";\n\nmodule.exports = function () {\n\tif (typeof str.contains !== \"function\") return false;\n\treturn str.contains(\"dwa\") === true && str.contains(\"foo\") === false;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/string/%00#/contains/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/shim.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/shim.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar indexOf = String.prototype.indexOf;\n\nmodule.exports = function (searchString/*, position*/) {\n\treturn indexOf.call(this, searchString, arguments[1]) > -1;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/string/%00#/contains/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/is-string.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/string/is-string.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString, id = objToString.call(\"\");\n\nmodule.exports = function (value) {\n\treturn (\n\t\ttypeof value === \"string\" ||\n\t\t(value &&\n\t\t\ttypeof value === \"object\" &&\n\t\t\t(value instanceof String || objToString.call(value) === id)) ||\n\t\tfalse\n\t);\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/string/is-string.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/random-uniq.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/string/random-uniq.js ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar generated = Object.create(null), random = Math.random;\n\nmodule.exports = function () {\n\tvar str;\n\tdo {\n\t\tstr = random().toString(36).slice(2);\n\t} while (generated[str]);\n\treturn str;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es5-ext/string/random-uniq.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/array.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/array.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ \"./node_modules/es5-ext/object/set-prototype-of/index.js\")\n  , contains       = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/\\u0000#/contains/index.js\")\n  , d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , Symbol         = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\")\n  , Iterator       = __webpack_require__(/*! ./ */ \"./node_modules/es6-iterator/index.js\");\n\nvar defineProperty = Object.defineProperty, ArrayIterator;\n\nArrayIterator = module.exports = function (arr, kind) {\n\tif (!(this instanceof ArrayIterator)) throw new TypeError(\"Constructor requires 'new'\");\n\tIterator.call(this, arr);\n\tif (!kind) kind = \"value\";\n\telse if (contains.call(kind, \"key+value\")) kind = \"key+value\";\n\telse if (contains.call(kind, \"key\")) kind = \"key\";\n\telse kind = \"value\";\n\tdefineProperty(this, \"__kind__\", d(\"\", kind));\n};\nif (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);\n\n// Internal %ArrayIteratorPrototype% doesn't expose its constructor\ndelete ArrayIterator.prototype.constructor;\n\nArrayIterator.prototype = Object.create(Iterator.prototype, {\n\t_resolve: d(function (i) {\n\t\tif (this.__kind__ === \"value\") return this.__list__[i];\n\t\tif (this.__kind__ === \"key+value\") return [i, this.__list__[i]];\n\t\treturn i;\n\t})\n});\ndefineProperty(ArrayIterator.prototype, Symbol.toStringTag, d(\"c\", \"Array Iterator\"));\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-iterator/array.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/for-of.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/for-of.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , callable    = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ \"./node_modules/es5-ext/string/is-string.js\")\n  , get         = __webpack_require__(/*! ./get */ \"./node_modules/es6-iterator/get.js\");\n\nvar isArray = Array.isArray, call = Function.prototype.call, some = Array.prototype.some;\n\nmodule.exports = function (iterable, cb /*, thisArg*/) {\n\tvar mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;\n\tif (isArray(iterable) || isArguments(iterable)) mode = \"array\";\n\telse if (isString(iterable)) mode = \"string\";\n\telse iterable = get(iterable);\n\n\tcallable(cb);\n\tdoBreak = function () {\n\t\tbroken = true;\n\t};\n\tif (mode === \"array\") {\n\t\tsome.call(iterable, function (value) {\n\t\t\tcall.call(cb, thisArg, value, doBreak);\n\t\t\treturn broken;\n\t\t});\n\t\treturn;\n\t}\n\tif (mode === \"string\") {\n\t\tlength = iterable.length;\n\t\tfor (i = 0; i < length; ++i) {\n\t\t\tchar = iterable[i];\n\t\t\tif (i + 1 < length) {\n\t\t\t\tcode = char.charCodeAt(0);\n\t\t\t\tif (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];\n\t\t\t}\n\t\t\tcall.call(cb, thisArg, char, doBreak);\n\t\t\tif (broken) break;\n\t\t}\n\t\treturn;\n\t}\n\tresult = iterable.next();\n\n\twhile (!result.done) {\n\t\tcall.call(cb, thisArg, result.value, doBreak);\n\t\tif (broken) return;\n\t\tresult = iterable.next();\n\t}\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-iterator/for-of.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/get.js":
/*!******************************************!*\
  !*** ./node_modules/es6-iterator/get.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArguments    = __webpack_require__(/*! es5-ext/function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , isString       = __webpack_require__(/*! es5-ext/string/is-string */ \"./node_modules/es5-ext/string/is-string.js\")\n  , ArrayIterator  = __webpack_require__(/*! ./array */ \"./node_modules/es6-iterator/array.js\")\n  , StringIterator = __webpack_require__(/*! ./string */ \"./node_modules/es6-iterator/string.js\")\n  , iterable       = __webpack_require__(/*! ./valid-iterable */ \"./node_modules/es6-iterator/valid-iterable.js\")\n  , iteratorSymbol = (__webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator);\n\nmodule.exports = function (obj) {\n\tif (typeof iterable(obj)[iteratorSymbol] === \"function\") return obj[iteratorSymbol]();\n\tif (isArguments(obj)) return new ArrayIterator(obj);\n\tif (isString(obj)) return new StringIterator(obj);\n\treturn new ArrayIterator(obj);\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-iterator/get.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/index.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar clear    = __webpack_require__(/*! es5-ext/array/#/clear */ \"./node_modules/es5-ext/array/\\u0000#/clear.js\")\n  , assign   = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , value    = __webpack_require__(/*! es5-ext/object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , d        = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , autoBind = __webpack_require__(/*! d/auto-bind */ \"./node_modules/d/auto-bind.js\")\n  , Symbol   = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\");\n\nvar defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, Iterator;\n\nmodule.exports = Iterator = function (list, context) {\n\tif (!(this instanceof Iterator)) throw new TypeError(\"Constructor requires 'new'\");\n\tdefineProperties(this, {\n\t\t__list__: d(\"w\", value(list)),\n\t\t__context__: d(\"w\", context),\n\t\t__nextIndex__: d(\"w\", 0)\n\t});\n\tif (!context) return;\n\tcallable(context.on);\n\tcontext.on(\"_add\", this._onAdd);\n\tcontext.on(\"_delete\", this._onDelete);\n\tcontext.on(\"_clear\", this._onClear);\n};\n\n// Internal %IteratorPrototype% doesn't expose its constructor\ndelete Iterator.prototype.constructor;\n\ndefineProperties(\n\tIterator.prototype,\n\tassign(\n\t\t{\n\t\t\t_next: d(function () {\n\t\t\t\tvar i;\n\t\t\t\tif (!this.__list__) return undefined;\n\t\t\t\tif (this.__redo__) {\n\t\t\t\t\ti = this.__redo__.shift();\n\t\t\t\t\tif (i !== undefined) return i;\n\t\t\t\t}\n\t\t\t\tif (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;\n\t\t\t\tthis._unBind();\n\t\t\t\treturn undefined;\n\t\t\t}),\n\t\t\tnext: d(function () {\n\t\t\t\treturn this._createResult(this._next());\n\t\t\t}),\n\t\t\t_createResult: d(function (i) {\n\t\t\t\tif (i === undefined) return { done: true, value: undefined };\n\t\t\t\treturn { done: false, value: this._resolve(i) };\n\t\t\t}),\n\t\t\t_resolve: d(function (i) {\n\t\t\t\treturn this.__list__[i];\n\t\t\t}),\n\t\t\t_unBind: d(function () {\n\t\t\t\tthis.__list__ = null;\n\t\t\t\tdelete this.__redo__;\n\t\t\t\tif (!this.__context__) return;\n\t\t\t\tthis.__context__.off(\"_add\", this._onAdd);\n\t\t\t\tthis.__context__.off(\"_delete\", this._onDelete);\n\t\t\t\tthis.__context__.off(\"_clear\", this._onClear);\n\t\t\t\tthis.__context__ = null;\n\t\t\t}),\n\t\t\ttoString: d(function () {\n\t\t\t\treturn \"[object \" + (this[Symbol.toStringTag] || \"Object\") + \"]\";\n\t\t\t})\n\t\t},\n\t\tautoBind({\n\t\t\t_onAdd: d(function (index) {\n\t\t\t\tif (index >= this.__nextIndex__) return;\n\t\t\t\t++this.__nextIndex__;\n\t\t\t\tif (!this.__redo__) {\n\t\t\t\t\tdefineProperty(this, \"__redo__\", d(\"c\", [index]));\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tthis.__redo__.forEach(function (redo, i) {\n\t\t\t\t\tif (redo >= index) this.__redo__[i] = ++redo;\n\t\t\t\t}, this);\n\t\t\t\tthis.__redo__.push(index);\n\t\t\t}),\n\t\t\t_onDelete: d(function (index) {\n\t\t\t\tvar i;\n\t\t\t\tif (index >= this.__nextIndex__) return;\n\t\t\t\t--this.__nextIndex__;\n\t\t\t\tif (!this.__redo__) return;\n\t\t\t\ti = this.__redo__.indexOf(index);\n\t\t\t\tif (i !== -1) this.__redo__.splice(i, 1);\n\t\t\t\tthis.__redo__.forEach(function (redo, j) {\n\t\t\t\t\tif (redo > index) this.__redo__[j] = --redo;\n\t\t\t\t}, this);\n\t\t\t}),\n\t\t\t_onClear: d(function () {\n\t\t\t\tif (this.__redo__) clear.call(this.__redo__);\n\t\t\t\tthis.__nextIndex__ = 0;\n\t\t\t})\n\t\t})\n\t)\n);\n\ndefineProperty(\n\tIterator.prototype,\n\tSymbol.iterator,\n\td(function () {\n\t\treturn this;\n\t})\n);\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-iterator/index.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/is-iterable.js":
/*!**************************************************!*\
  !*** ./node_modules/es6-iterator/is-iterable.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , isValue     = __webpack_require__(/*! es5-ext/object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ \"./node_modules/es5-ext/string/is-string.js\");\n\nvar iteratorSymbol = (__webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator)\n  , isArray        = Array.isArray;\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) return false;\n\tif (isArray(value)) return true;\n\tif (isString(value)) return true;\n\tif (isArguments(value)) return true;\n\treturn typeof value[iteratorSymbol] === \"function\";\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-iterator/is-iterable.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/string.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/string.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// Thanks @mathiasbynens\n// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols\n\n\n\nvar setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ \"./node_modules/es5-ext/object/set-prototype-of/index.js\")\n  , d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , Symbol         = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\")\n  , Iterator       = __webpack_require__(/*! ./ */ \"./node_modules/es6-iterator/index.js\");\n\nvar defineProperty = Object.defineProperty, StringIterator;\n\nStringIterator = module.exports = function (str) {\n\tif (!(this instanceof StringIterator)) throw new TypeError(\"Constructor requires 'new'\");\n\tstr = String(str);\n\tIterator.call(this, str);\n\tdefineProperty(this, \"__length__\", d(\"\", str.length));\n};\nif (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);\n\n// Internal %ArrayIteratorPrototype% doesn't expose its constructor\ndelete StringIterator.prototype.constructor;\n\nStringIterator.prototype = Object.create(Iterator.prototype, {\n\t_next: d(function () {\n\t\tif (!this.__list__) return undefined;\n\t\tif (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;\n\t\tthis._unBind();\n\t\treturn undefined;\n\t}),\n\t_resolve: d(function (i) {\n\t\tvar char = this.__list__[i], code;\n\t\tif (this.__nextIndex__ === this.__length__) return char;\n\t\tcode = char.charCodeAt(0);\n\t\tif (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];\n\t\treturn char;\n\t})\n});\ndefineProperty(StringIterator.prototype, Symbol.toStringTag, d(\"c\", \"String Iterator\"));\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-iterator/string.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/valid-iterable.js":
/*!*****************************************************!*\
  !*** ./node_modules/es6-iterator/valid-iterable.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isIterable = __webpack_require__(/*! ./is-iterable */ \"./node_modules/es6-iterator/is-iterable.js\");\n\nmodule.exports = function (value) {\n\tif (!isIterable(value)) throw new TypeError(value + \" is not iterable\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-iterator/valid-iterable.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/index.js":
/*!******************************************!*\
  !*** ./node_modules/es6-symbol/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es6-symbol/is-implemented.js\")()\n\t? (__webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\").Symbol)\n\t: __webpack_require__(/*! ./polyfill */ \"./node_modules/es6-symbol/polyfill.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/index.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar global     = __webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\")\n  , validTypes = { object: true, symbol: true };\n\nmodule.exports = function () {\n\tvar Symbol = global.Symbol;\n\tvar symbol;\n\tif (typeof Symbol !== \"function\") return false;\n\tsymbol = Symbol(\"test symbol\");\n\ttry { String(symbol); }\n\tcatch (e) { return false; }\n\n\t// Return 'true' also for polyfills\n\tif (!validTypes[typeof Symbol.iterator]) return false;\n\tif (!validTypes[typeof Symbol.toPrimitive]) return false;\n\tif (!validTypes[typeof Symbol.toStringTag]) return false;\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\tif (!value) return false;\n\tif (typeof value === \"symbol\") return true;\n\tif (!value.constructor) return false;\n\tif (value.constructor.name !== \"Symbol\") return false;\n\treturn value[value.constructor.toStringTag] === \"Symbol\";\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/is-symbol.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/generate-name.js":
/*!**************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/generate-name.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar d = __webpack_require__(/*! d */ \"./node_modules/d/index.js\");\n\nvar create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;\n\nvar created = create(null);\nmodule.exports = function (desc) {\n\tvar postfix = 0, name, ie11BugWorkaround;\n\twhile (created[desc + (postfix || \"\")]) ++postfix;\n\tdesc += postfix || \"\";\n\tcreated[desc] = true;\n\tname = \"@@\" + desc;\n\tdefineProperty(\n\t\tobjPrototype,\n\t\tname,\n\t\td.gs(null, function (value) {\n\t\t\t// For IE11 issue see:\n\t\t\t// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/\n\t\t\t//    ie11-broken-getters-on-dom-objects\n\t\t\t// https://github.com/medikoo/es6-symbol/issues/12\n\t\t\tif (ie11BugWorkaround) return;\n\t\t\tie11BugWorkaround = true;\n\t\t\tdefineProperty(this, name, d(value));\n\t\t\tie11BugWorkaround = false;\n\t\t})\n\t);\n\treturn name;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/lib/private/generate-name.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/standard-symbols.js":
/*!***********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/standard-symbols.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar d            = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , NativeSymbol = (__webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\").Symbol);\n\nmodule.exports = function (SymbolPolyfill) {\n\treturn Object.defineProperties(SymbolPolyfill, {\n\t\t// To ensure proper interoperability with other native functions (e.g. Array.from)\n\t\t// fallback to eventual native implementation of given symbol\n\t\thasInstance: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill(\"hasInstance\")\n\t\t),\n\t\tisConcatSpreadable: d(\n\t\t\t\"\",\n\t\t\t(NativeSymbol && NativeSymbol.isConcatSpreadable) ||\n\t\t\t\tSymbolPolyfill(\"isConcatSpreadable\")\n\t\t),\n\t\titerator: d(\"\", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill(\"iterator\")),\n\t\tmatch: d(\"\", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill(\"match\")),\n\t\treplace: d(\"\", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill(\"replace\")),\n\t\tsearch: d(\"\", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill(\"search\")),\n\t\tspecies: d(\"\", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill(\"species\")),\n\t\tsplit: d(\"\", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill(\"split\")),\n\t\ttoPrimitive: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill(\"toPrimitive\")\n\t\t),\n\t\ttoStringTag: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill(\"toStringTag\")\n\t\t),\n\t\tunscopables: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill(\"unscopables\")\n\t\t)\n\t});\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/lib/private/setup/standard-symbols.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/symbol-registry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/symbol-registry.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validateSymbol = __webpack_require__(/*! ../../../validate-symbol */ \"./node_modules/es6-symbol/validate-symbol.js\");\n\nvar registry = Object.create(null);\n\nmodule.exports = function (SymbolPolyfill) {\n\treturn Object.defineProperties(SymbolPolyfill, {\n\t\tfor: d(function (key) {\n\t\t\tif (registry[key]) return registry[key];\n\t\t\treturn (registry[key] = SymbolPolyfill(String(key)));\n\t\t}),\n\t\tkeyFor: d(function (symbol) {\n\t\t\tvar key;\n\t\t\tvalidateSymbol(symbol);\n\t\t\tfor (key in registry) {\n\t\t\t\tif (registry[key] === symbol) return key;\n\t\t\t}\n\t\t\treturn undefined;\n\t\t})\n\t});\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/lib/private/setup/symbol-registry.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("// ES2015 Symbol polyfill for environments that do not (or partially) support it\n\n\n\nvar d                    = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validateSymbol       = __webpack_require__(/*! ./validate-symbol */ \"./node_modules/es6-symbol/validate-symbol.js\")\n  , NativeSymbol         = (__webpack_require__(/*! ext/global-this */ \"./node_modules/ext/global-this/index.js\").Symbol)\n  , generateName         = __webpack_require__(/*! ./lib/private/generate-name */ \"./node_modules/es6-symbol/lib/private/generate-name.js\")\n  , setupStandardSymbols = __webpack_require__(/*! ./lib/private/setup/standard-symbols */ \"./node_modules/es6-symbol/lib/private/setup/standard-symbols.js\")\n  , setupSymbolRegistry  = __webpack_require__(/*! ./lib/private/setup/symbol-registry */ \"./node_modules/es6-symbol/lib/private/setup/symbol-registry.js\");\n\nvar create = Object.create\n  , defineProperties = Object.defineProperties\n  , defineProperty = Object.defineProperty;\n\nvar SymbolPolyfill, HiddenSymbol, isNativeSafe;\n\nif (typeof NativeSymbol === \"function\") {\n\ttry {\n\t\tString(NativeSymbol());\n\t\tisNativeSafe = true;\n\t} catch (ignore) {}\n} else {\n\tNativeSymbol = null;\n}\n\n// Internal constructor (not one exposed) for creating Symbol instances.\n// This one is used to ensure that `someSymbol instanceof Symbol` always return false\nHiddenSymbol = function Symbol(description) {\n\tif (this instanceof HiddenSymbol) throw new TypeError(\"Symbol is not a constructor\");\n\treturn SymbolPolyfill(description);\n};\n\n// Exposed `Symbol` constructor\n// (returns instances of HiddenSymbol)\nmodule.exports = SymbolPolyfill = function Symbol(description) {\n\tvar symbol;\n\tif (this instanceof Symbol) throw new TypeError(\"Symbol is not a constructor\");\n\tif (isNativeSafe) return NativeSymbol(description);\n\tsymbol = create(HiddenSymbol.prototype);\n\tdescription = description === undefined ? \"\" : String(description);\n\treturn defineProperties(symbol, {\n\t\t__description__: d(\"\", description),\n\t\t__name__: d(\"\", generateName(description))\n\t});\n};\n\nsetupStandardSymbols(SymbolPolyfill);\nsetupSymbolRegistry(SymbolPolyfill);\n\n// Internal tweaks for real symbol producer\ndefineProperties(HiddenSymbol.prototype, {\n\tconstructor: d(SymbolPolyfill),\n\ttoString: d(\"\", function () { return this.__name__; })\n});\n\n// Proper implementation of methods exposed on Symbol.prototype\n// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype\ndefineProperties(SymbolPolyfill.prototype, {\n\ttoString: d(function () { return \"Symbol (\" + validateSymbol(this).__description__ + \")\"; }),\n\tvalueOf: d(function () { return validateSymbol(this); })\n});\ndefineProperty(\n\tSymbolPolyfill.prototype,\n\tSymbolPolyfill.toPrimitive,\n\td(\"\", function () {\n\t\tvar symbol = validateSymbol(this);\n\t\tif (typeof symbol === \"symbol\") return symbol;\n\t\treturn symbol.toString();\n\t})\n);\ndefineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d(\"c\", \"Symbol\"));\n\n// Proper implementaton of toPrimitive and toStringTag for returned symbol instances\ndefineProperty(\n\tHiddenSymbol.prototype, SymbolPolyfill.toStringTag,\n\td(\"c\", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])\n);\n\n// Note: It's important to define `toPrimitive` as last one, as some implementations\n// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)\n// And that may invoke error in definition flow:\n// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149\ndefineProperty(\n\tHiddenSymbol.prototype, SymbolPolyfill.toPrimitive,\n\td(\"c\", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])\n);\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/polyfill.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isSymbol = __webpack_require__(/*! ./is-symbol */ \"./node_modules/es6-symbol/is-symbol.js\");\n\nmodule.exports = function (value) {\n\tif (!isSymbol(value)) throw new TypeError(value + \" is not a symbol\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-symbol/validate-symbol.js?");

/***/ }),

/***/ "./node_modules/es6-weak-map/index.js":
/*!********************************************!*\
  !*** ./node_modules/es6-weak-map/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es6-weak-map/is-implemented.js\")() ? WeakMap : __webpack_require__(/*! ./polyfill */ \"./node_modules/es6-weak-map/polyfill.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-weak-map/index.js?");

/***/ }),

/***/ "./node_modules/es6-weak-map/is-implemented.js":
/*!*****************************************************!*\
  !*** ./node_modules/es6-weak-map/is-implemented.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar weakMap, obj;\n\n\tif (typeof WeakMap !== \"function\") return false;\n\ttry {\n\t\t// WebKit doesn't support arguments and crashes\n\t\tweakMap = new WeakMap([[obj = {}, \"one\"], [{}, \"two\"], [{}, \"three\"]]);\n\t} catch (e) {\n\t\treturn false;\n\t}\n\tif (String(weakMap) !== \"[object WeakMap]\") return false;\n\tif (typeof weakMap.set !== \"function\") return false;\n\tif (weakMap.set({}, 1) !== weakMap) return false;\n\tif (typeof weakMap.delete !== \"function\") return false;\n\tif (typeof weakMap.has !== \"function\") return false;\n\tif (weakMap.get(obj) !== \"one\") return false;\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-weak-map/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es6-weak-map/is-native-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es6-weak-map/is-native-implemented.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
eval("// Exports true if environment provides native `WeakMap` implementation, whatever that is.\n\n\n\nmodule.exports = (function () {\n\tif (typeof WeakMap !== \"function\") return false;\n\treturn Object.prototype.toString.call(new WeakMap()) === \"[object WeakMap]\";\n}());\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-weak-map/is-native-implemented.js?");

/***/ }),

/***/ "./node_modules/es6-weak-map/polyfill.js":
/*!***********************************************!*\
  !*** ./node_modules/es6-weak-map/polyfill.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue           = __webpack_require__(/*! es5-ext/object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , setPrototypeOf    = __webpack_require__(/*! es5-ext/object/set-prototype-of */ \"./node_modules/es5-ext/object/set-prototype-of/index.js\")\n  , object            = __webpack_require__(/*! es5-ext/object/valid-object */ \"./node_modules/es5-ext/object/valid-object.js\")\n  , ensureValue       = __webpack_require__(/*! es5-ext/object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , randomUniq        = __webpack_require__(/*! es5-ext/string/random-uniq */ \"./node_modules/es5-ext/string/random-uniq.js\")\n  , d                 = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , getIterator       = __webpack_require__(/*! es6-iterator/get */ \"./node_modules/es6-iterator/get.js\")\n  , forOf             = __webpack_require__(/*! es6-iterator/for-of */ \"./node_modules/es6-iterator/for-of.js\")\n  , toStringTagSymbol = (__webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").toStringTag)\n  , isNative          = __webpack_require__(/*! ./is-native-implemented */ \"./node_modules/es6-weak-map/is-native-implemented.js\")\n\n  , isArray = Array.isArray, defineProperty = Object.defineProperty\n  , objHasOwnProperty = Object.prototype.hasOwnProperty, getPrototypeOf = Object.getPrototypeOf\n  , WeakMapPoly;\n\nmodule.exports = WeakMapPoly = function (/* Iterable*/) {\n\tvar iterable = arguments[0], self;\n\n\tif (!(this instanceof WeakMapPoly)) throw new TypeError(\"Constructor requires 'new'\");\n\tself = isNative && setPrototypeOf && (WeakMap !== WeakMapPoly)\n\t\t? setPrototypeOf(new WeakMap(), getPrototypeOf(this)) : this;\n\n\tif (isValue(iterable)) {\n\t\tif (!isArray(iterable)) iterable = getIterator(iterable);\n\t}\n\tdefineProperty(self, \"__weakMapData__\", d(\"c\", \"$weakMap$\" + randomUniq()));\n\tif (!iterable) return self;\n\tforOf(iterable, function (val) {\n\t\tensureValue(val);\n\t\tself.set(val[0], val[1]);\n\t});\n\treturn self;\n};\n\nif (isNative) {\n\tif (setPrototypeOf) setPrototypeOf(WeakMapPoly, WeakMap);\n\tWeakMapPoly.prototype = Object.create(WeakMap.prototype, { constructor: d(WeakMapPoly) });\n}\n\nObject.defineProperties(WeakMapPoly.prototype, {\n\tdelete: d(function (key) {\n\t\tif (objHasOwnProperty.call(object(key), this.__weakMapData__)) {\n\t\t\tdelete key[this.__weakMapData__];\n\t\t\treturn true;\n\t\t}\n\t\treturn false;\n\t}),\n\tget: d(function (key) {\n\t\tif (!objHasOwnProperty.call(object(key), this.__weakMapData__)) return undefined;\n\t\treturn key[this.__weakMapData__];\n\t}),\n\thas: d(function (key) {\n\t\treturn objHasOwnProperty.call(object(key), this.__weakMapData__);\n\t}),\n\tset: d(function (key, value) {\n\t\tdefineProperty(object(key), this.__weakMapData__, d(\"c\", value));\n\t\treturn this;\n\t}),\n\ttoString: d(function () {\n\t\treturn \"[object WeakMap]\";\n\t})\n});\ndefineProperty(WeakMapPoly.prototype, toStringTagSymbol, d(\"c\", \"WeakMap\"));\n\n\n//# sourceURL=webpack://newspack/./node_modules/es6-weak-map/polyfill.js?");

/***/ }),

/***/ "./node_modules/ext/global-this/implementation.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/implementation.js ***!
  \********************************************************/
/***/ (function(module) {

eval("var naiveFallback = function () {\n\tif (typeof self === \"object\" && self) return self;\n\tif (typeof window === \"object\" && window) return window;\n\tthrow new Error(\"Unable to resolve global `this`\");\n};\n\nmodule.exports = (function () {\n\tif (this) return this;\n\n\t// Unexpected strict mode (may happen if e.g. bundled into ESM module)\n\n\t// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis\n\t// In all ES5+ engines global object inherits from Object.prototype\n\t// (if you approached one that doesn't please report)\n\ttry {\n\t\tObject.defineProperty(Object.prototype, \"__global__\", {\n\t\t\tget: function () { return this; },\n\t\t\tconfigurable: true\n\t\t});\n\t} catch (error) {\n\t\t// Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)\n\t\treturn naiveFallback();\n\t}\n\ttry {\n\t\t// Safari case (window.__global__ is resolved with global context, but __global__ does not)\n\t\tif (!__global__) return naiveFallback();\n\t\treturn __global__;\n\t} finally {\n\t\tdelete Object.prototype.__global__;\n\t}\n})();\n\n\n//# sourceURL=webpack://newspack/./node_modules/ext/global-this/implementation.js?");

/***/ }),

/***/ "./node_modules/ext/global-this/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ext/global-this/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/ext/global-this/is-implemented.js\")() ? globalThis : __webpack_require__(/*! ./implementation */ \"./node_modules/ext/global-this/implementation.js\");\n\n\n//# sourceURL=webpack://newspack/./node_modules/ext/global-this/index.js?");

/***/ }),

/***/ "./node_modules/ext/global-this/is-implemented.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/is-implemented.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tif (typeof globalThis !== \"object\") return false;\n\tif (!globalThis) return false;\n\treturn globalThis.Array === Array;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/ext/global-this/is-implemented.js?");

/***/ }),

/***/ "./assets/wizards/seo/index.js":
/*!*************************************!*\
  !*** ./assets/wizards/seo/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _shared_js_public_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/js/public-path */ \"./assets/shared/js/public-path.js\");\n/* harmony import */ var _shared_js_public_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_js_public_path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/src */ \"./assets/components/src/index.js\");\n/* harmony import */ var _components_src_proxied_imports_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/src/proxied-imports/router */ \"./assets/components/src/proxied-imports/router.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views */ \"./assets/wizards/seo/views/index.js\");\n/* harmony import */ var deep_map_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! deep-map-keys */ \"./node_modules/deep-map-keys/lib/index.js\");\n/* harmony import */ var deep_map_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(deep_map_keys__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n/**\n * SEO\n */\n\n/**\n * WordPress dependencies.\n */\n\n\n\n/**\n * Internal dependencies.\n */\n\nconst __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__;\n\n\n\n/**\n * External dependencies.\n */\n\n\n\nconst {\n  HashRouter,\n  Redirect,\n  Route,\n  Switch\n} = _components_src_proxied_imports_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n\nclass SEOWizard extends _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Component {\n  constructor() {\n    super(...arguments);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"state\", {\n      titleSeparator: '',\n      underConstruction: false,\n      urls: {\n        facebook: '',\n        twitter: '',\n        instagram: '',\n        youtube: '',\n        linkedin: '',\n        pinterest: ''\n      },\n      verification: {\n        bing: '',\n        google: ''\n      }\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"onWizardReady\", () => this.fetch());\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"sanitizeResponse\", response => {\n      return deep_map_keys__WEBPACK_IMPORTED_MODULE_8___default()(response, key => (0,lodash__WEBPACK_IMPORTED_MODULE_9__.camelCase)(key));\n    });\n  }\n\n  /**\n   * Get settings for the wizard.\n   */\n  fetch() {\n    const {\n      setError,\n      wizardApiFetch\n    } = this.props;\n    return wizardApiFetch({\n      path: '/newspack/v1/wizard/newspack-seo-wizard/settings'\n    }).then(response => this.setState(this.sanitizeResponse(response))).catch(error => setError(error));\n  }\n  /**\n   * Update settings.\n   */\n\n\n  update() {\n    const {\n      setError,\n      wizardApiFetch\n    } = this.props;\n    return wizardApiFetch({\n      path: '/newspack/v1/wizard/newspack-seo-wizard/settings',\n      method: 'POST',\n      data: deep_map_keys__WEBPACK_IMPORTED_MODULE_8___default()(this.state, key => (0,lodash__WEBPACK_IMPORTED_MODULE_9__.snakeCase)(key)),\n      quiet: true\n    }).then(response => this.setState(this.sanitizeResponse(response))).catch(error => setError(error));\n  }\n  /**\n   * Sanitize API response.\n   */\n\n\n  /**\n   * Render\n   */\n  render() {\n    const {\n      pluginRequirements\n    } = this.props;\n\n    const headerText = __('SEO', 'newspack');\n\n    const subHeaderText = __('Search engine and social optimization', 'newspack');\n\n    const tabbedNavigation = [{\n      label: __('Environment', 'newspack'),\n      path: '/',\n      exact: true\n    }, {\n      label: __('Separator', 'newspack'),\n      path: '/separator',\n      exact: true\n    }, {\n      label: __('Webmaster Tools', 'newspack'),\n      path: '/tools',\n      exact: true\n    }, {\n      label: __('Social', 'newspack'),\n      path: '/social'\n    }];\n\n    const buttonText = __('Save Settings', 'newspack');\n\n    const secondaryButtonText = __('Advanced Settings', 'newspack');\n\n    const screenParams = {\n      data: this.state,\n      headerText,\n      subHeaderText,\n      tabbedNavigation\n    };\n    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(HashRouter, {\n      hashType: \"slash\"\n    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Switch, null, pluginRequirements, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Route, {\n      exact: true,\n      path: \"/\",\n      render: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_views__WEBPACK_IMPORTED_MODULE_7__.Environment, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, screenParams, {\n        buttonAction: () => this.update(),\n        buttonText: buttonText,\n        onChange: settings => this.setState(settings)\n      }))\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Route, {\n      exact: true,\n      path: \"/separator\",\n      render: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_views__WEBPACK_IMPORTED_MODULE_7__.Separator, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, screenParams, {\n        buttonAction: () => this.update(),\n        buttonText: buttonText,\n        onChange: settings => this.setState(settings),\n        secondaryButtonAction: {\n          editLink: 'admin.php?page=wpseo_titles',\n          handoff: 'wordpress-seo'\n        },\n        secondaryButtonText: secondaryButtonText\n      }))\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Route, {\n      exact: true,\n      path: \"/social\",\n      render: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_views__WEBPACK_IMPORTED_MODULE_7__.Social, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, screenParams, {\n        buttonAction: () => this.update(),\n        buttonText: buttonText,\n        onChange: settings => this.setState(settings),\n        secondaryButtonAction: {\n          editLink: 'admin.php?page=wpseo_social',\n          handoff: 'wordpress-seo'\n        },\n        secondaryButtonText: secondaryButtonText\n      }))\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Route, {\n      exact: true,\n      path: \"/tools\",\n      render: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_views__WEBPACK_IMPORTED_MODULE_7__.Tools, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, screenParams, {\n        buttonAction: () => this.update(),\n        buttonText: buttonText,\n        onChange: settings => this.setState(settings),\n        secondaryButtonAction: {\n          editLink: 'admin.php?page=wpseo_dashboard#top#webmaster-tools',\n          handoff: 'wordpress-seo'\n        },\n        secondaryButtonText: secondaryButtonText\n      }))\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Redirect, {\n      to: \"/\"\n    }))));\n  }\n\n}\n\n(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)((0,_components_src__WEBPACK_IMPORTED_MODULE_5__.withWizard)(SEOWizard, ['wordpress-seo', 'jetpack'])), document.getElementById('newspack-seo-wizard'));\n\n//# sourceURL=webpack://newspack/./assets/wizards/seo/index.js?");

/***/ }),

/***/ "./assets/wizards/seo/views/environment/index.js":
/*!*******************************************************!*\
  !*** ./assets/wizards/seo/views/environment/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\nconst __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;\n\n/**\n * SEO Environment screen.\n */\n\nclass Environment extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {\n  /**\n   * Render.\n   */\n  render() {\n    const {\n      data,\n      onChange\n    } = this.props;\n    const {\n      underConstruction\n    } = data;\n    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.ActionCard, {\n      isMedium: true,\n      title: __('Under construction', 'newspack'),\n      description: __('Discourage search engines from indexing this site.', 'newspack'),\n      toggleChecked: underConstruction,\n      toggleOnChange: value => onChange({\n        underConstruction: value\n      })\n    }));\n  }\n\n}\n\nEnvironment.defaultProps = {\n  data: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_components_src__WEBPACK_IMPORTED_MODULE_2__.withWizardScreen)(Environment));\n\n//# sourceURL=webpack://newspack/./assets/wizards/seo/views/environment/index.js?");

/***/ }),

/***/ "./assets/wizards/seo/views/index.js":
/*!*******************************************!*\
  !*** ./assets/wizards/seo/views/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Environment\": function() { return /* reexport safe */ _environment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"Separator\": function() { return /* reexport safe */ _separator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Tools\": function() { return /* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"Social\": function() { return /* reexport safe */ _social__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ \"./assets/wizards/seo/views/environment/index.js\");\n/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./separator */ \"./assets/wizards/seo/views/separator/index.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ \"./assets/wizards/seo/views/tools/index.js\");\n/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social */ \"./assets/wizards/seo/views/social/index.js\");\n\n\n\n\n\n//# sourceURL=webpack://newspack/./assets/wizards/seo/views/index.js?");

/***/ }),

/***/ "./assets/wizards/seo/views/separator/index.js":
/*!*****************************************************!*\
  !*** ./assets/wizards/seo/views/separator/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ \"@wordpress/html-entities\");\n/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n/**\n * Internal dependencies\n */\n\nconst __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__;\n\nconst SEPARATORS = {\n  'sc-dash': '-',\n  'sc-ndash': '&ndash;',\n  'sc-mdash': '&mdash;',\n  'sc-bull': '&bull;',\n  'sc-star': '*',\n  'sc-pipe': '|'\n};\n/**\n * SEO Separator screen.\n */\n\nclass Separator extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor() {\n    super(...arguments);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"exampleTitle\", titleSeparator => {\n      const separator = SEPARATORS[titleSeparator];\n      const blogName = window && window.newspack_urls ? window.newspack_urls.bloginfo.name : __('Site Name', 'newspack');\n      return `${__('Homepage', 'newspack')} ${separator} ${blogName}`;\n    });\n  }\n\n  /**\n   * Render.\n   */\n  render() {\n    const {\n      data,\n      onChange\n    } = this.props;\n    const {\n      titleSeparator\n    } = data;\n    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_4__.SectionHeader, {\n      title: __('Title separator', 'newspack'),\n      description: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, __('Choose the symbol to use as your title separator', 'newspack'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"br\", null), __('This will display, for instance, between your post title and site name', 'newspack'))\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, Object.keys(SEPARATORS).map(key => {\n      const value = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(SEPARATORS[key]);\n      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        key: key,\n        onClick: () => onChange({\n          titleSeparator: key\n        }),\n        isPressed: key === titleSeparator,\n        isSecondary: key !== titleSeparator,\n        className: \"icon-only size-48\"\n      }, value);\n    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_4__.PreviewBox, null, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(this.exampleTitle(titleSeparator))));\n  }\n\n}\n\nSeparator.defaultProps = {\n  data: {},\n  onChange: () => null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_components_src__WEBPACK_IMPORTED_MODULE_4__.withWizardScreen)(Separator));\n\n//# sourceURL=webpack://newspack/./assets/wizards/seo/views/separator/index.js?");

/***/ }),

/***/ "./assets/wizards/seo/views/social/index.js":
/*!**************************************************!*\
  !*** ./assets/wizards/seo/views/social/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\nconst __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;\n\n/**\n * SEO Social screen.\n */\n\nclass Social extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {\n  /**\n   * Render.\n   */\n  render() {\n    const {\n      data,\n      onChange\n    } = this.props;\n    const {\n      urls\n    } = data;\n    const {\n      facebook,\n      linkedin,\n      twitter,\n      youtube,\n      instagram,\n      pinterest\n    } = urls;\n    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.SectionHeader, {\n      title: __('Social accounts', 'newspack'),\n      description: __('Let search engines know which social profiles are associated to this site', 'newspack')\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n      columns: 3,\n      gutter: 32,\n      rowGap: 16\n    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.TextControl, {\n      label: __('Facebook Page', 'newspack'),\n      onChange: value => onChange({\n        urls: { ...urls,\n          facebook: value\n        }\n      }),\n      value: facebook,\n      placeholder: __('https://facebook.com/page', 'newspack')\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.TextControl, {\n      label: __('Twitter Username', 'newspack'),\n      onChange: value => onChange({\n        urls: { ...urls,\n          twitter: value\n        }\n      }),\n      value: twitter,\n      placeholder: __('username', 'newspack')\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.TextControl, {\n      label: \"Instagram\",\n      onChange: value => onChange({\n        urls: { ...urls,\n          instagram: value\n        }\n      }),\n      value: instagram,\n      placeholder: __('https://instagram.com/user', 'newspack')\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.TextControl, {\n      label: \"LinkedIn\",\n      onChange: value => onChange({\n        urls: { ...urls,\n          linkedin: value\n        }\n      }),\n      value: linkedin,\n      placeholder: __('https://linkedin.com/user', 'newspack')\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.TextControl, {\n      label: \"YouTube\",\n      onChange: value => onChange({\n        urls: { ...urls,\n          youtube: value\n        }\n      }),\n      value: youtube,\n      placeholder: __('https://youtube.com/c/channel', 'newspack')\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_2__.TextControl, {\n      label: \"Pinterest\",\n      onChange: value => onChange({\n        urls: { ...urls,\n          pinterest: value\n        }\n      }),\n      value: pinterest,\n      placeholder: __('https://pinterest.com/user', 'newspack')\n    })));\n  }\n\n}\n\nSocial.defaultProps = {\n  data: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_components_src__WEBPACK_IMPORTED_MODULE_2__.withWizardScreen)(Social));\n\n//# sourceURL=webpack://newspack/./assets/wizards/seo/views/social/index.js?");

/***/ }),

/***/ "./assets/wizards/seo/views/tools/index.js":
/*!*************************************************!*\
  !*** ./assets/wizards/seo/views/tools/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src */ \"./assets/components/src/index.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\nconst __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * SEO Tools screen.\n */\n\nclass Tools extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {\n  /**\n   * Render.\n   */\n  render() {\n    const {\n      data,\n      onChange\n    } = this.props;\n    const {\n      verification\n    } = data;\n    const {\n      google,\n      bing\n    } = verification;\n    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_3__.SectionHeader, {\n      title: __('Webmaster tools verification', 'newspack'),\n      description: __('Add a verification meta tag on your homepage', 'newspack')\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n      gutter: 32\n    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_3__.TextControl, {\n      label: __('Google', 'newspack'),\n      onChange: value => onChange({\n        verification: { ...verification,\n          google: value\n        }\n      }),\n      value: google,\n      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, __('Get your Google verification code in', 'newspack') + ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {\n        href: \"https://www.google.com/webmasters/verification/verification?tid=alternate\"\n      }, __('Google Search Console', 'newspack')))\n    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_src__WEBPACK_IMPORTED_MODULE_3__.TextControl, {\n      label: __('Bing', 'newspack'),\n      onChange: value => onChange({\n        verification: { ...verification,\n          bing: value\n        }\n      }),\n      value: bing,\n      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, __('Get your Bing verification code in', 'newspack') + ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {\n        href: \"https://www.bing.com/toolbox/webmaster/#/Dashboard/\"\n      }, __('Bing Webmaster Tool', 'newspack')))\n    })));\n  }\n\n}\n\nTools.defaultProps = {\n  data: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_components_src__WEBPACK_IMPORTED_MODULE_3__.withWizardScreen)(Tools));\n\n//# sourceURL=webpack://newspack/./assets/wizards/seo/views/tools/index.js?");

/***/ }),

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isPrototype = __webpack_require__(/*! ../prototype/is */ \"./node_modules/type/prototype/is.js\");\n\nmodule.exports = function (value) {\n\tif (typeof value !== \"function\") return false;\n\n\tif (!hasOwnProperty.call(value, \"length\")) return false;\n\n\ttry {\n\t\tif (typeof value.length !== \"number\") return false;\n\t\tif (typeof value.call !== \"function\") return false;\n\t\tif (typeof value.apply !== \"function\") return false;\n\t} catch (error) {\n\t\treturn false;\n\t}\n\n\treturn !isPrototype(value);\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/function/is.js?");

/***/ }),

/***/ "./node_modules/type/lib/resolve-exception.js":
/*!****************************************************!*\
  !*** ./node_modules/type/lib/resolve-exception.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue       = __webpack_require__(/*! ../value/is */ \"./node_modules/type/value/is.js\")\n  , isObject      = __webpack_require__(/*! ../object/is */ \"./node_modules/type/object/is.js\")\n  , stringCoerce  = __webpack_require__(/*! ../string/coerce */ \"./node_modules/type/string/coerce.js\")\n  , toShortString = __webpack_require__(/*! ./to-short-string */ \"./node_modules/type/lib/to-short-string.js\");\n\nvar resolveMessage = function (message, value) {\n\treturn message.replace(\"%v\", toShortString(value));\n};\n\nmodule.exports = function (value, defaultMessage, inputOptions) {\n\tif (!isObject(inputOptions)) throw new TypeError(resolveMessage(defaultMessage, value));\n\tif (!isValue(value)) {\n\t\tif (\"default\" in inputOptions) return inputOptions[\"default\"];\n\t\tif (inputOptions.isOptional) return null;\n\t}\n\tvar errorMessage = stringCoerce(inputOptions.errorMessage);\n\tif (!isValue(errorMessage)) errorMessage = defaultMessage;\n\tthrow new TypeError(resolveMessage(errorMessage, value));\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/lib/resolve-exception.js?");

/***/ }),

/***/ "./node_modules/type/lib/safe-to-string.js":
/*!*************************************************!*\
  !*** ./node_modules/type/lib/safe-to-string.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\ttry {\n\t\treturn value.toString();\n\t} catch (error) {\n\t\ttry { return String(value); }\n\t\tcatch (error2) { return null; }\n\t}\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/lib/safe-to-string.js?");

/***/ }),

/***/ "./node_modules/type/lib/to-short-string.js":
/*!**************************************************!*\
  !*** ./node_modules/type/lib/to-short-string.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar safeToString = __webpack_require__(/*! ./safe-to-string */ \"./node_modules/type/lib/safe-to-string.js\");\n\nvar reNewLine = /[\\n\\r\\u2028\\u2029]/g;\n\nmodule.exports = function (value) {\n\tvar string = safeToString(value);\n\tif (string === null) return \"<Non-coercible to string value>\";\n\t// Trim if too long\n\tif (string.length > 100) string = string.slice(0, 99) + \"…\";\n\t// Replace eventual new lines\n\tstring = string.replace(reNewLine, function (char) {\n\t\tswitch (char) {\n\t\t\tcase \"\\n\":\n\t\t\t\treturn \"\\\\n\";\n\t\t\tcase \"\\r\":\n\t\t\t\treturn \"\\\\r\";\n\t\t\tcase \"\\u2028\":\n\t\t\t\treturn \"\\\\u2028\";\n\t\t\tcase \"\\u2029\":\n\t\t\t\treturn \"\\\\u2029\";\n\t\t\t/* istanbul ignore next */\n\t\t\tdefault:\n\t\t\t\tthrow new Error(\"Unexpected character\");\n\t\t}\n\t});\n\treturn string;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/lib/to-short-string.js?");

/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../value/is */ \"./node_modules/type/value/is.js\");\n\n// prettier-ignore\nvar possibleTypes = { \"object\": true, \"function\": true, \"undefined\": true /* document.all */ };\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) return false;\n\treturn hasOwnProperty.call(possibleTypes, typeof value);\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/object/is.js?");

/***/ }),

/***/ "./node_modules/type/plain-function/ensure.js":
/*!****************************************************!*\
  !*** ./node_modules/type/plain-function/ensure.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar resolveException = __webpack_require__(/*! ../lib/resolve-exception */ \"./node_modules/type/lib/resolve-exception.js\")\n  , is               = __webpack_require__(/*! ./is */ \"./node_modules/type/plain-function/is.js\");\n\nmodule.exports = function (value/*, options*/) {\n\tif (is(value)) return value;\n\treturn resolveException(value, \"%v is not a plain function\", arguments[1]);\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/plain-function/ensure.js?");

/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isFunction = __webpack_require__(/*! ../function/is */ \"./node_modules/type/function/is.js\");\n\nvar classRe = /^\\s*class[\\s{/}]/, functionToString = Function.prototype.toString;\n\nmodule.exports = function (value) {\n\tif (!isFunction(value)) return false;\n\tif (classRe.test(functionToString.call(value))) return false;\n\treturn true;\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/plain-function/is.js?");

/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ../object/is */ \"./node_modules/type/object/is.js\");\n\nmodule.exports = function (value) {\n\tif (!isObject(value)) return false;\n\ttry {\n\t\tif (!value.constructor) return false;\n\t\treturn value.constructor.prototype === value;\n\t} catch (error) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/prototype/is.js?");

/***/ }),

/***/ "./node_modules/type/string/coerce.js":
/*!********************************************!*\
  !*** ./node_modules/type/string/coerce.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue  = __webpack_require__(/*! ../value/is */ \"./node_modules/type/value/is.js\")\n  , isObject = __webpack_require__(/*! ../object/is */ \"./node_modules/type/object/is.js\");\n\nvar objectToString = Object.prototype.toString;\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) return null;\n\tif (isObject(value)) {\n\t\t// Reject Object.prototype.toString coercion\n\t\tvar valueToString = value.toString;\n\t\tif (typeof valueToString !== \"function\") return null;\n\t\tif (valueToString === objectToString) return null;\n\t\t// Note: It can be object coming from other realm, still as there's no ES3 and CSP compliant\n\t\t// way to resolve its realm's Object.prototype.toString it's left as not addressed edge case\n\t}\n\ttry {\n\t\treturn \"\" + value; // Ensure implicit coercion\n\t} catch (error) {\n\t\treturn null;\n\t}\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/string/coerce.js?");

/***/ }),

/***/ "./node_modules/type/value/ensure.js":
/*!*******************************************!*\
  !*** ./node_modules/type/value/ensure.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar resolveException = __webpack_require__(/*! ../lib/resolve-exception */ \"./node_modules/type/lib/resolve-exception.js\")\n  , is               = __webpack_require__(/*! ./is */ \"./node_modules/type/value/is.js\");\n\nmodule.exports = function (value/*, options*/) {\n\tif (is(value)) return value;\n\treturn resolveException(value, \"Cannot use %v\", arguments[1]);\n};\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/value/ensure.js?");

/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";
eval("\n\n// ES3 safe\nvar _undefined = void 0;\n\nmodule.exports = function (value) { return value !== _undefined && value !== null; };\n\n\n//# sourceURL=webpack://newspack/./node_modules/type/value/is.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["moment"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"seo": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], function() { return __webpack_require__("./assets/wizards/seo/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
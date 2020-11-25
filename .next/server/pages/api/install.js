module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/install.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/install.js":
/*!******************************!*\
  !*** ./pages/api/install.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    accessToken,\n    SHOP,\n    AWS\n  } = process.env;\n  const endpoint = `${AWS}/ddb/${SHOP}`;\n\n  const body = _objectSpread(_objectSpread({}, JSON.parse(req.body)), {}, {\n    accessToken: accessToken,\n    subscription: \"monthly\"\n  });\n\n  const result = await fetch(endpoint, {\n    method: \"POST\",\n    body: JSON.stringify(body)\n  });\n  res.status(res.statusCode).json(await result.json());\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5zdGFsbC5qcz8wODZkIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImFjY2Vzc1Rva2VuIiwiU0hPUCIsIkFXUyIsInByb2Nlc3MiLCJlbnYiLCJlbmRwb2ludCIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJzdWJzY3JpcHRpb24iLCJyZXN1bHQiLCJmZXRjaCIsIm1ldGhvZCIsInN0cmluZ2lmeSIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsc0VBQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNO0FBQUVDLGVBQUY7QUFBZUMsUUFBZjtBQUFxQkM7QUFBckIsTUFBNkJDLE9BQU8sQ0FBQ0MsR0FBM0M7QUFDQSxRQUFNQyxRQUFRLEdBQUksR0FBRUgsR0FBSSxRQUFPRCxJQUFLLEVBQXBDOztBQUNBLFFBQU1LLElBQUksbUNBQ0hDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixHQUFHLENBQUNRLElBQWYsQ0FERztBQUVOTixlQUFXLEVBQUVBLFdBRlA7QUFHTlMsZ0JBQVksRUFBRTtBQUhSLElBQVY7O0FBTUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQ04sUUFBRCxFQUFXO0FBQ2pDTyxVQUFNLEVBQUUsTUFEeUI7QUFFakNOLFFBQUksRUFBRUMsSUFBSSxDQUFDTSxTQUFMLENBQWVQLElBQWY7QUFGMkIsR0FBWCxDQUExQjtBQUlBUCxLQUFHLENBQUNlLE1BQUosQ0FBV2YsR0FBRyxDQUFDZ0IsVUFBZixFQUEyQkMsSUFBM0IsQ0FBZ0MsTUFBTU4sTUFBTSxDQUFDTSxJQUFQLEVBQXRDO0FBQ0gsQ0FkRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9pbnN0YWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbiwgU0hPUCwgQVdTIH0gPSBwcm9jZXNzLmVudjtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke0FXU30vZGRiLyR7U0hPUH1gO1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgIC4uLkpTT04ucGFyc2UocmVxLmJvZHkpLFxuICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgIHN1YnNjcmlwdGlvbjogXCJtb250aGx5XCIsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMocmVzLnN0YXR1c0NvZGUpLmpzb24oYXdhaXQgcmVzdWx0Lmpzb24oKSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/install.js\n");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/update-contract.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/update-contract.js":
/*!**************************************!*\
  !*** ./pages/api/update-contract.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    SHOP,\n    AWS\n  } = process.env;\n  const endpoint = `${AWS}/ddb/${SHOP}`;\n\n  const body = _objectSpread(_objectSpread({}, JSON.parse(req.body)), {}, {\n    paramName: \"subscription\",\n    paramValue: \"yearly\"\n  });\n\n  const result = await fetch(endpoint, {\n    method: \"PUT\",\n    body: JSON.stringify(body)\n  });\n  res.status(res.statusCode).json(await result.json());\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBkYXRlLWNvbnRyYWN0LmpzPzdkYzciXSwibmFtZXMiOlsicmVxIiwicmVzIiwiU0hPUCIsIkFXUyIsInByb2Nlc3MiLCJlbnYiLCJlbmRwb2ludCIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwicmVzdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLHNFQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBZ0JDLE9BQU8sQ0FBQ0MsR0FBOUI7QUFDQSxRQUFNQyxRQUFRLEdBQUksR0FBRUgsR0FBSSxRQUFPRCxJQUFLLEVBQXBDOztBQUNBLFFBQU1LLElBQUksbUNBQ0hDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNPLElBQWYsQ0FERztBQUVORyxhQUFTLEVBQUUsY0FGTDtBQUdOQyxjQUFVLEVBQUU7QUFITixJQUFWOztBQU1BLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUNQLFFBQUQsRUFBVztBQUNqQ1EsVUFBTSxFQUFFLEtBRHlCO0FBRWpDUCxRQUFJLEVBQUVDLElBQUksQ0FBQ08sU0FBTCxDQUFlUixJQUFmO0FBRjJCLEdBQVgsQ0FBMUI7QUFJQU4sS0FBRyxDQUFDZSxNQUFKLENBQVdmLEdBQUcsQ0FBQ2dCLFVBQWYsRUFBMkJDLElBQTNCLENBQWdDLE1BQU1OLE1BQU0sQ0FBQ00sSUFBUCxFQUF0QztBQUNILENBZEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXBkYXRlLWNvbnRyYWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBTSE9QLCBBV1MgfSA9IHByb2Nlc3MuZW52O1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7QVdTfS9kZGIvJHtTSE9QfWA7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgLi4uSlNPTi5wYXJzZShyZXEuYm9keSksXG4gICAgICAgIHBhcmFtTmFtZTogXCJzdWJzY3JpcHRpb25cIixcbiAgICAgICAgcGFyYW1WYWx1ZTogXCJ5ZWFybHlcIixcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKHJlcy5zdGF0dXNDb2RlKS5qc29uKGF3YWl0IHJlc3VsdC5qc29uKCkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/update-contract.js\n");

/***/ })

/******/ });
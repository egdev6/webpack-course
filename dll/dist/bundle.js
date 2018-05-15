webpackJsonp([0],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _designCode = __webpack_require__(8);

var _designCode2 = _interopRequireDefault(_designCode);

var _teachers = __webpack_require__(9);

var _teachers2 = _interopRequireDefault(_teachers);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Teachers = __webpack_require__(11);

var _Teachers2 = _interopRequireDefault(_Teachers);

var _reactDom = __webpack_require__(12);

var _message = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_Teachers2.default, { data: _teachers2.default }), document.getElementById('container'));

console.log(_teachers2.default);

console.log("Hola mundo!");
document.write(_message.firstMessage);
(0, _message.delayedMessage)();

var img = document.createElement('img');
img.setAttribute('width', 300);
img.setAttribute('src', _designCode2.default);
document.body.append(img);

/***/ })

},[18]);
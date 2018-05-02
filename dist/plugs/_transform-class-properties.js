"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Book = function Book() {
  var _this = this;

  (0, _classCallCheck3["default"])(this, Book);
  this.field = 1;

  this.getField = function () {
    return _this.field;
  };
} // 默认
;

// 详情： http://babeljs.io/docs/plugins/transform-class-properties/

/*
转换后将变成
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Book = function Book() {
  var _this = this;

  (0, _classCallCheck3["default"])(this, Book);
  this.field = 1;

  this.getField = function () {
    return _this.field;
  };
} // 默认
;

Book.field2 = 2;

Book.getField2 = function () {
  return Book.field2;
};
*/


Book.field2 = 2;

Book.getField2 = function () {
  return Book.field2;
};
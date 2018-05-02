"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Person2 = require("./Person");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Student = exports.Student = function (_Person) {
  (0, _inherits3.default)(Student, _Person);

  function Student(name, id) {
    (0, _classCallCheck3.default)(this, Student);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Student.__proto__ || (0, _getPrototypeOf2.default)(Student)).call(this, name));

    _this.id = id;
    return _this;
  }

  (0, _createClass3.default)(Student, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }]);
  return Student;
}(_Person2.Person);
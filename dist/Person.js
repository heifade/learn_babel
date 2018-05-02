"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Person = exports.Person = function () {
  function Person(name) {
    (0, _classCallCheck3.default)(this, Person);

    this.name = name;
  }

  (0, _createClass3.default)(Person, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);
  return Person;
}();
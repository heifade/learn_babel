let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// 详情：http://babeljs.io/docs/plugins/transform-object-rest-spread/

/*
转换后将变成
"use strict";

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = (0, _objectWithoutProperties3["default"])(_x$y$a$b, ["x", "y"]);

console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
*/
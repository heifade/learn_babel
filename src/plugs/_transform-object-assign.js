Object.assign({}, { a: 1 });

// 详情见文档：https://www.npmjs.com/package/babel-plugin-transform-object-assign

/*
转换后将变成
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

_extends({}, { a: 1 });
*/
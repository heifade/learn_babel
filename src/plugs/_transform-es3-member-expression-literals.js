

let v = {};
v.catch = "100"; // 确保在属性访问中引用保留词 

// 详情见文档： http://babeljs.io/docs/plugins/transform-es3-member-expression-literals/



/*
转换后将变成
"use strict";

var v = {};
v["catch"] = "100";
*/
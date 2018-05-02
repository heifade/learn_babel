"use strict";

var foo = {
  "catch": function _catch() {}
};

// 详情见文档 http://babeljs.io/docs/plugins/transform-es3-property-literals/

/*
转换后将变成
"use strict";

var foo = {
  "catch": function _catch() {}
};

*/
// 1. 判断数据的类型

var isString = function (obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};

var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
};

var isNumber = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Number]";
};

// 1.1 优化
var isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
};

// 1.2 批量注册 isType 函数

var Type = {};
for (let i = 0, type; (type = ["String", "Array", "Number"][i++]); ) {
  (function (type) {
    Type["is" + type] = function (obj) {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    };
  })(type);
}

Type.isArray([1, 2, 3]);
Type.isString("str");
Type.isNumber(1);

// 2. 单例模式
var getSingle = function (fn) {
  var ret;
  return function () {
    return ret || (ret = fn.apply(fn, arguments));
  };
};

var getScript = getSingle(function () {
  return document.createElement("script");
});
var script1 = getScript();
var script2 = getScript();

console.log(script1 === script2); // true

const { mult } = require("./6.8-缓存代理/6.8.1-计算乘积");
var createProxyFactory = function (fn) {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = fn.apply(this, arguments));
  };
};

var proxyMult = createProxyFactory(mult);

proxyMult(1, 2);
proxyMult(1, 2);

/* 计算加和函数 */
var plus = function () {
  console.log("开始计算加和");
  var a = 0;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i];
  }
  return a;
};

const proxyPlus = createProxyFactory(plus);
proxyPlus(1, 2);
proxyPlus(1, 2);

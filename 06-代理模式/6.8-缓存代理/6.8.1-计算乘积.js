// 创建一个乘积函数
var mult = function () {
  console.log("开始计算乘积");
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};

// mult(2, 3); // 6
// mult(2, 3, 4); // 24

exports.mult = mult

// 加入缓存代理函数 proxyMult
var proxyMult = (function () {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = mult.apply(this, arguments));
  };
})();

// proxyMult(1, 2, 3, 4); // 24
// proxyMult(1, 2, 3, 4); // 直接使用上面的结果，输出 24

// ! 通过缓存代理的方式，mult 函数可以继续专注自身的职责（计算乘积），缓存的功能是由代理对象实现的
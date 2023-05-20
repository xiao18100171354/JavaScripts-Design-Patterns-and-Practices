// 1. 封装变量
// var mult = function () {
//   var a = 1;
//   for (var i = 0; i < arguments.length; i++) {
//     a = a * arguments[i];
//   }
//   return a;
// };

// console.log(mult(1, 2, 3, 4, 5)); // 120

// 1.1 利用缓存优化代码
// var cache = {};
// var mult = function () {
//   var args = Array.prototype.join.call(arguments, ",");
//   if (cache[args]) {
//     return cache[args];
//   }
//   var a = 1;
//   for (var i = 0; i < arguments.length; i++) {
//     a = a * arguments[i];
//   }

//   //   cache[args] = a;
//   //   return cache[args];
//   return (cache[args] = a);
// };

// console.log(mult(1, 2, 3, 4, 5)); // 120
// console.log(mult(1, 2, 3, 4, 5)); // 120，此次不需要进入for循环去计算，而是直接通过cache获取

// 1.2 不要把 cache 暴露到全局中
// var mult = (function () {
//   var cache = {};
//   return function () {
//     var args = Array.prototype.join.call(arguments, ",");
//     if (cache[args]) {
//       return cache[args];
//     }
//     var a = 1;
//     for (var i = 0; i < arguments.length; i++) {
//       a = a * arguments[i];
//     }
//     return (cache[args] = a);
//   };
// })();

// console.log(mult(1, 2, 3, 4, 5)); // 120

/**
 * 1.3 重构
 * 提炼函数时代码重构的一种常见技巧
 */
var mult = (function () {
  var cache = {};

  var calcuate = function () {
    // 封闭 calculate 函数
    var a = 1;
    for (var i = 0; i < arguments[0].length; i++) {
      a = a * arguments[0][i];
    }
    return a;
  };

  return function () {
    var args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = calcuate.call(null, arguments));
  };
})();
console.log(mult(1, 2, 3, 4, 5)); // 120

// 2. 延续局部变量的寿命
// var report = function (src) {
//   var img = new Image();
//   img.src = src;
// };

var report = (function () {
  var imgs = [];
  return function (src) {
    var img = new Image();
    imgs.push(img);
    img.src = src;
  };
})();

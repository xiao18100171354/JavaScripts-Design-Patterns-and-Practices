// 1. 普通例子
// var monthlyCost = 0;
// var cost = function (money) {
//   monthlyCost += money;
// };

// cost(100);
// cost(200);
// cost(300);

// console.log(monthlyCost); // 600

// 2. 在普通例子上做一个优化
var cost = (function () {
  var args = [];

  return function () {
    if (arguments.length === 0) {
      var money = 0;
      for (let i = 0; i < args.length; i++) {
        money += args[i];
      }
      return money;
    } else {
      [].push.apply(args, arguments);
    }
  };
})();

cost(100, 200); // 不会计算
cost(200); // 不会计算
cost(300); // 不会计算

console.log(cost()); // 800

var currying = function (fn) {
  var args = [];

  return function () {
    if (arguments.length === 0) {
      return fn.apply(fn, args);
    } else {
      // console.log(arguments);
      [].push.apply(args, arguments);
      // console.log(args);
    }
  };
};

var cost_curring = (function () {
  var money = 0;
  return function () {
    for (let i = 0; i < arguments.length; i++) {
      money += arguments[i];
    }
    return money;
  };
})();

var cost_truly = currying(cost_curring);
cost_truly(100);
cost_truly(200);
cost_truly(300);
console.log(cost_truly()); // 600

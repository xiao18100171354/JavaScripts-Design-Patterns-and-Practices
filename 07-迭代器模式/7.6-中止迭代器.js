// 迭代器可以像普通的 for 循环中的 break 一样，提供一种跳出循环的方法
// 约定如果回调函数的执行结果返回 false，则提前终止循环

var each = function (ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    if (callback(i, ary[i]) === false) {
      break;
    }
  }
};

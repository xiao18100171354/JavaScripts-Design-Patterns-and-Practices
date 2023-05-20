/**
 * AOP（面向切面编程）：把一些跟核心业务逻辑模块无关的功能抽离出来，再通过“动态织入”的方式惨入业务逻辑中。
 * 这样做既可以保持业务逻辑的纯净和高内聚，又可以很方面复用抽离出来的功能，如日志统计、异常处理等功能。
 */

Function.prototype.before = function (beforeFn) {
  var _self = this;

  return function () {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  var _self = this;

  return function () {
    var ret = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  };
};

var func = function () {
  console.log(2);
};

func = func
  .before(function () {
    console.log(1);
  })
  .after(function () {
    console.log(3);
  });

func();

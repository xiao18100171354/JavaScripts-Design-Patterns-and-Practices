const Singleton = function (name) {
  this.name = name;
};

Singleton.prototype.getName = function () {
  return this.name;
};

// 使用闭包的方式，把 instance 属性当作私有变量，通过闭包的特性保存起来
Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

const a = Singleton.getInstance("sven1");
const b = Singleton.getInstance("sven2");

console.log(a === b); // true

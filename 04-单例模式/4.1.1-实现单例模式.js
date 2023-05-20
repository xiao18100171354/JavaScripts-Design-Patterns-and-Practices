const Singleton = function (name) {
  this.name = name;
};

// 声明一个属性 instance 来存储 Singleton 类的实例对象
// 并且初始化为 null 说明 Singleton 类当前并没有已经创建的实例对象
Singleton.instance = null;

Singleton.prototype.getName = function () {
  return this.name;
};

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

const a = Singleton.getInstance("sven1");
const b = Singleton.getInstance("sven2");

console.log(a === b); // true

// 或使用闭包的方式，把 instance 属性当作私有变量，通过闭包的特性保存起来
Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

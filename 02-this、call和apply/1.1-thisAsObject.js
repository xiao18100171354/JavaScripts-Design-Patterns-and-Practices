// JavaScript 的 this 总是指向一个对象
// 而具体指向哪个对象实在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

// 1. 作为对象的方法调用
var obj = {
  a: 1,
  getA: function () {
    console.log(this === obj); // true
    console.log(this.a); // 1
  },
};

obj.getA();

// 2. 作为普通函数调用
window.name = "globalName";

var getName = function () {
  return this.name;
};

console.log(getName()); // globalName

var myObject = {
  name: "sven",
  getName: function () {
    return this.name;
  },
};

var getName2 = myObject.getName;
console.log(getName2()); // globalName

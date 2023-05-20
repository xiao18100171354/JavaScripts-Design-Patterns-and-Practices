// 原型模式：通过克隆来创建对象

var Plane = function () {
  this.blood = 100;
  this.attackLeven = 1;
  this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
plane.attackLeven = 10;
plane.defenseLevel = 7;

// Object.create 就是 JS 对原型模式的天然实现
var clonePlane = Object.create(plane);
console.log(clonePlane.blood);
console.log(clonePlane.attackLeven);
console.log(clonePlane.defenseLevel);
console.log(clonePlane.__proto__ === plane);

// 在不支持Object.create方法的浏览器中，则可以使用以下代码：
Object.create =
  Object.create ||
  function (obj) {
    var F = function () {};
    F.prototype = obj;

    return new F();
  };

var obj1 = new Object();
var obj2 = {};

console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.getPrototypeOf(obj2) === Object.prototype); // true

// Person 并不是类，而是函数构造器。JavaScript中函数既可以作为普通函数调用，也可以作为构造器被调用。
// 当使用new运算符来调用函数时，此时的函数就是一个构造器。
// 用 new 运算符来创建对象的过程，实际上也就是先克隆 Object.prototype 对象，在进行一些其他额外的操作。
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var a = new Person("sven");
console.log(a.name); // sven
console.log(a.getName()); // sven
console.log(Object.getPrototypeOf(a) === Person.prototype); // true

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var objectFactory = function () {
  var obj = new Object(); // 从 Object.prototype 上克隆一个空对象
  var Constructor = [].shift.call(arguments); // 取得外部传入的构造器

  obj.__proto__ = Constructor.prototype; // 将 obj 的原型对象指向构造器的原型对象
  var ret = Constructor.apply(obj, arguments); // 调用构造器函数，通过 apply 将 this 指向 obj

  return typeof ret === "object" ? ret : obj;
};

const a = objectFactory(Person, "sven");
console.log(a.name); // sven
console.log(a.getName()); // sven
console.log(Object.getPrototypeOf(a) === Person.prototype); // true

const b = objectFactory(Object);
console.log(Object.getPrototypeOf(b) === Object.prototype); // true

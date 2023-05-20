// 第一种场景：借用构造函数，实现一些类似继承的效果

var A = function (name) {
  this.name = name;
};

var B = function () {
  A.apply(this, arguments);
};

B.prototype.getNname = function () {
  return this.name;
};

var b = new B("sven");

console.log(b.getNname());

// 第二种场景：
(function () {
  Array.prototype.push.call(arguments, 3);
  console.log(arguments); // [1,2,3]
})(1, 2);

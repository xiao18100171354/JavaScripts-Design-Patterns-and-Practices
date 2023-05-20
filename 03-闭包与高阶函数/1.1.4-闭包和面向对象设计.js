/**
 * 过程和数据的结合是形容面向对象中的“对象”时经常使用的表达。
 * 对象以方法的形式包含了过程，而闭包则时在过程中以环境的形式包含了数据。
 * 通常用面向对象思想能实现的功能，用闭包也能实现。反之亦然
 */
// 闭包
var extent = function () {
  var value = 0;
  return {
    call: function () {
      value++;
      console.log(value);
    },
  };
};

var extent = extent();
extent.call(); // 1
extent.call(); // 2
extent.call(); // 3

// 面向对象，效果同上
var extent1 = {
  value: 0,
  call: function () {
    this.value++;
    console.log(this.value);
  },
};
extent1.call(); // 1
extent1.call(); // 2
extent1.call(); // 3

// 面向对象2
var Extent2 = function () {
  this.value = 0;
};

Extent2.prototype.call = function () {
  this.value++;
  console.log(this.value);
};

var extent2 = new Extent2();
extent2.call(); // 1
extent2.call(); // 2
extent2.call(); // 3
